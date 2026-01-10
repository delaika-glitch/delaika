'use client';

import { useState, useRef, useEffect } from 'react';

interface Message {
  role: 'user' | 'bot';
  content: string;
}

export default function ChatDelaika() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  // 1. NUEVO: Estado para mantener el ID de la conversación
  const [conversationId, setConversationId] = useState<string | null>(null);
  
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const sendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    // 2. CORRECCIÓN: Guardamos el mensaje en una constante ANTES de borrar el input
    const messageToSend = input; 
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: messageToSend }]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chatbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          message: messageToSend, // Enviamos la constante con el texto real
          conversationId: conversationId  // Enviamos el ID que tenemos en el estado
        })
      });

      const data = await response.json();
      
      if (data.text) {
        // 3. ACTUALIZACIÓN: Guardamos el ID que nos devuelve el servidor para el próximo mensaje
        if (data.conversationId) {
          setConversationId(data.conversationId);
        }
        setMessages((prev) => [...prev, { role: 'bot', content: data.text }]);
      } else {
        throw new Error();
      }
    } catch (error) {
      setMessages((prev) => [...prev, { role: 'bot', content: "Lo siento, hubo un error en la conexión. ¿Podrías intentar de nuevo?" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className='bg-(--bg) h-full'>
    <div className="flex flex-col mt-25 md:mt-0  w-full max-w-2xl mx-auto h-[700px] bg-(--bg2) border border-gray-200 rounded-2xl shadow-xl overflow-hidden">
      {/* Header */}
      <div className="bg-(--bg) p-4">
        <h2 className="text-(--text) font-bold text-lg uppercase">Asistente Delaika</h2>
        <p className="text-gray-400 font-bold text-xs uppercase">Diseño y Desarrollo de Alto Rendimiento</p>
      </div>

      {/* Área de Mensajes */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-4 space-y-4 bg-(--bg)"
      >
        {messages.length === 0 && (
          <div className="text-center font-bold text-gray-400 mt-10">
            <p>¡Hola! Soy el asistente de Delaika. <br /> ¿En qué puedo ayudarte hoy?</p>
          </div>
        )}
        
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
              m.role === 'user' 
                ? 'bg-(--text) text-black rounded-tr-none' 
                : 'bg-gray-200 border border-gray-200 text-gray-800 rounded-tl-none shadow-sm'
            }`}>
              {m.content}
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-gray-200 uppercase p-3 rounded-2xl rounded-tl-none animate-pulse text-xs text-gray-500">
              Delaika está pensando...
            </div>
          </div>
        )}
      </div>

      {/* Input de texto */}
      <form onSubmit={sendMessage} className="p-4 border-t border-gray-200 bg-(--bg2) flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribe tu mensaje..."
          className="flex-1 p-2 placeholder-gray-200 border text-(--text) border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-sm"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="bg-(--text) uppercase text-black px-4 py-2 rounded-lg cursor-pointer hover:bg-(--accent) transition-colors disabled:bg-gray-400"
        >
          Enviar
        </button>
      </form>
    </div>
    </main>
  );
}