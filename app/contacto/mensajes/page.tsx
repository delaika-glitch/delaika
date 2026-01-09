"use client"
import { useState } from 'react'
import { createClient } from '@/lib/supabase/clients'

export default function Mensajes(){
  const [loading, setLoading] = useState(false)
  const supabase = createClient()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget;
    setLoading(true)

    const formData = new FormData(form)
    const datos = {
      nombre: formData.get('nombre'),
      apellido: formData.get('apellido'),
      email: formData.get('email'),
      telefono: formData.get('telefono'),
      mensaje: formData.get('mensaje'),
    }

    const { error } = await supabase
      .from('mensajes') 
      .insert([datos])

    setLoading(false)

    if (error) {
      alert('Error al enviar: ' + error.message)
    } else {
      alert('¡Mensaje enviado correctamente!')
      form.reset();
    }
  }

  return(
    <main className="h-full bg-(--bg)">
      <div className="h-full w-full max-w-2xl mt-20 md:mt-0 mx-auto rounded-2xl shadow-lg p-8">
        <h1 className="text-2xl font-bold text-(--text)">ESCRIBE TU MENSAJE:</h1>
      </div>
      
      <div className="bg-(--bg2) h-full w-full max-w-2xl mt-10 mx-auto rounded-2xl shadow-lg p-8">
        {/* CORRECCIÓN: Añadimos onSubmit aquí */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-gray-500 ml-1">NOMBRE</label>
              <input 
                name="nombre" // IMPORTANTE: Atributo name añadido
                type="text"
                required
                placeholder="Ej. Juan" 
                className="w-full text-(--text) p-3 border-2 placeholder-gray-500 border-gray-200 rounded-lg focus:border-(--accent) focus:outline-none transition-colors"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-gray-500 ml-1">EMAIL</label>
              <input 
                name="email" // IMPORTANTE
                type="email"
                required
                placeholder="correo@ejemplo.com" 
                className="w-full text-(--text) p-3 border-2 placeholder-gray-500 border-gray-200 rounded-lg focus:border-(--accent) focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-gray-500 ml-1">APELLIDO</label>
              <input 
                name="apellido" // IMPORTANTE
                type="text"
                placeholder="Ej. Pérez" 
                className="w-full text-(--text) p-3 border-2 border-gray-200 placeholder-gray-500 rounded-lg focus:border-(--accent) focus:outline-none transition-colors"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-gray-500 ml-1">TELÉFONO</label>
              <input 
                name="telefono" // IMPORTANTE
                type="tel"
                placeholder="+34 000 000 000" 
                className="w-full text-(--text) p-3 border-2 border-gray-200 placeholder-gray-500 rounded-lg focus:border-(--accent) focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* MENSAJE: Fuera de las columnas para ocupar todo el ancho si lo deseas */}
          <div className="md:col-span-2 mt-3">
            <label className="text-xs font-bold text-gray-500 ml-1">MENSAJE</label>
            <textarea // Cambiado de input a textarea para mejor UX
              name="mensaje" // IMPORTANTE
              required
              placeholder="Queremos escucharte" 
              className="w-full text-(--text) p-3 border-2 border-gray-200 placeholder-gray-500 rounded-lg focus:border-(--accent) focus:outline-none transition-colors min-h-[100px]"
            />
          </div>

          <div className="md:col-span-2 mt-5 flex">
            <button 
              type="submit" // Cambiado a submit
              disabled={loading}
              className="bg-transparent cursor-pointer hover:bg-(--text) border-(--text) border-2 text-(--text) hover:text-black rounded-[20px] flex flex-col p-4 items-center transition-all disabled:opacity-50"
            >
              <p className="md:text-sm font-bold">{loading ? 'ENVIANDO...' : 'ENVIAR'}</p>
            </button>
          </div>
        </form>
      </div>
    </main>
  )
}