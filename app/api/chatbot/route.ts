import { GoogleGenerativeAI } from "@google/generative-ai";
import { createClient } from "@/lib/supabase/server";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GENERATIVE_AI_API_KEY!);

export async function POST(req: Request) {
  try {
    const supabase = await createClient();
    const body = await req.json();
    const { message, conversationId } = body;

    if (!message) {
      return Response.json({ error: "No se recibió ningún mensaje" }, { status: 400 });
    }

    let currentId = conversationId;

    // 1. Si no hay ID, creamos una nueva conversación
    if (!currentId) {
      const { data: newConv, error: errConv } = await supabase
        .from('conversaciones')
        .insert([{}])
        .select()
        .single();

      if (errConv) throw errConv;
      currentId = newConv.id;

      // AVISAR A N8N
      if (process.env.N8N_WEBHOOK_URL) {
        fetch(process.env.N8N_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            event: 'nueva_conversacion',
            id: currentId,
            mensaje: message
          })
        }).catch(e => console.log("Error n8n:", e));
      }
    }
    // 2. DETECCIÓN DE LEADS (Se ejecuta en CADA mensaje)
    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
    const foundEmails = message.match(emailRegex);

    if (foundEmails && foundEmails.length > 0) {
      const userEmail = foundEmails[0];

      // Guardamos el lead en Supabase
      const { error: leadError } = await supabase.from('seguimiento').insert([
        { conversacion_id: currentId, email: userEmail, mensaje_origen: message }
      ]);

      if (leadError) console.error("Error Supabase Lead:", leadError.message);

      // AVISO A N8N (Con await para asegurar el envío)
      if (process.env.N8N_WEBHOOK_URL) {
        try {
          await fetch(process.env.N8N_WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
              event: 'lead_capturado', 
              id: currentId,
              email: userEmail,
              mensaje_completo: message 
            })
          });
          console.log("✅ Aviso de Lead enviado a n8n");
        } catch (e) {
          console.error("❌ Error enviando a n8n:", e);
        }
      }
    }
    // 2. Guardar mensaje del usuario
    await supabase.from('mensajes_chatbot').insert([
      { conversacion_id: currentId, rol: 'user', contenido: message }
    ]);

    // 3. Configurar Gemini
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash", // Recomiendo probar flash primero por latencia
      systemInstruction: `
      Eres el asistente virtual de Delaika, un estudio boutique de diseño y desarrollo de productos digitales de alto rendimiento.
      Tu tono debe ser: Innovador, profesional, estratégico y cercano. No eres un simple robot, eres la primera impresión de un equipo experto.
      Sobre Delaika:
      No solo escribimos código; creamos herramientas estratégicas para que las organizaciones escalen, digitalicen procesos y proyecten vanguardia.
      Servicios principales:
      1. Diseño y Desarrollo Web Profesional: Enfocado en conversión y estética de alto nivel.
      2. Software a Medida: Soluciones únicas para problemas complejos de negocio.
      3. Arquitectura Backend: Estructuras sólidas y escalables.
      4. Integraciones con IA: Implementación de chatbots avanzados, automatizaciones y chats internos.
      5. Mantenimiento Evolutivo: Soporte mensual para asegurar que el producto siempre funcione al 100%.
      Políticas de Precios y Tiempos:
      - Precios: No proporciones cifras. Explica que cada proyecto es único y estratégico. Para valorar el costo, invita al cliente a la sección de "Contacto" o a programar una reunión con el equipo técnico.
      - Tiempos: Son variables según la complejidad y el roadmap del equipo. No prometas fechas.
      Reglas Críticas:
      1. Si preguntan algo ajeno a Delaika: "Lo siento, como asistente de Delaika, solo puedo ayudarte con temas relacionados a nuestros servicios de desarrollo y estrategia digital."
      2. Si hay una queja o el cliente está molesto: Sé empático y deriva de inmediato a mariano@delaika.com.
      3. Idioma: Siempre en español, con excelente ortografía.
      4. Jamás inventes servicios que no estén en la lista anterior.
      ESTRATEGIA DE CAPTACIÓN DE LEADS (CRÍTICO):
              1. Tu objetivo final es convertir la curiosidad en una oportunidad de negocio.
              2. Momento para pedir datos: No pidas datos en el primer mensaje. Hazlo cuando el usuario:
                 - Pregunte por precios.
                 - Pregunte por tiempos de entrega.
                 - Exprese que tiene un proyecto o idea en mente.
                 - Solicite una reunión o presupuesto.
              3. Cómo pedir los datos: Usa frases como:
                 - "Para darte una asesoría exacta sobre [Proyecto del usuario], ¿podrías compartirme tu nombre y correo? Así Mariano del equipo técnico podrá contactarte."
                 - "Cada proyecto en Delaika es único. Si me dejas tu email o WhatsApp, puedo agendarte una breve llamada con nuestros estrategas."
              4. Validación de datos: Si el usuario te da su nombre, agradécele y pídele el email para completar el registro.
              5. Persistencia suave: Si el usuario ignora tu petición de datos, responde su duda y vuelve a intentarlo una sola vez más de forma distinta.

              REGLAS DE FORMATO:
              - Usa listas con puntos si explicas pasos de un proceso.
              - Mantén las respuestas breves (máximo 3 párrafos) para que sean fáciles de leer en móviles.

              ESTRATEGIA DE CAPTACIÓN DE DATOS (LEAD CAPTURE):
1. No pidas datos de golpe. Primero resuelve una duda para ganar confianza.
2. Momento clave: Cuando pregunten por "precios", "presupuestos", "reuniones" o digan "tengo una idea/proyecto".
3. Guion sugerido: "Para darte una respuesta exacta sobre [proyecto del usuario], ¿podrías dejarme tu nombre y correo? Así Mariano podrá analizarlo y contactarte con una propuesta estratégica."
4. Si te dan el dato: Confirma que lo recibiste y diles que el equipo se pondrá en contacto pronto.
      `
    });

    // 4. Generar contenido (ESTRUCTURA CORREGIDA)
    // En lugar de pasar solo 'message', pasamos el objeto que el SDK espera
    const result = await model.generateContent({
      contents: [
        {
          role: "user",
          parts: [{ text: message }],
        },
      ],
    });

    const responseText = result.response.text();

    // 5. Guardar respuesta en Supabase
    await supabase.from('mensajes_chatbot').insert([
      { conversacion_id: currentId, rol: 'model', contenido: responseText }
    ]);

    return Response.json({
      text: responseText,
      conversationId: currentId
    });

  } catch (error: any) {
    console.error("Error completo:", error);
    return Response.json({ error: error.message || "Error interno" }, { status: 500 });

  }

}