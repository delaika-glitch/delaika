"use client"
import { useState } from "react"
import { Input } from "./ui/input"

export default function Contacto(){
    return(
    <main>
        <div className="flex-col mx-auto gap-10 bg-(--bg) h-full px-13 w-full">

            <div className="flex flex-col gap-5 ">
                <p className="text-white text-2xl">Nombre</p>
                <Input type="text" placeholder="Nombre" className="bg-white"/>
            </div>

            <div className="flex flex-col gap-5">
                <p className="text-white text-2xl">Apellido</p>
                <Input type="text" placeholder="Apellido" className="bg-white"/>
            </div>

            <div className="flex flex-col gap-5 mt-5">
                <p className="text-white text-xl">Email</p>
                <Input type="email" placeholder="Correo Electrónico" className="bg-white"/>
            </div>

            <div className="flex flex-col gap-5 mt-5">
                <p className="text-white text-xl">Número de teléfono</p>
                <Input type="number" placeholder="Número de teléfono" className="bg-white"/>
            </div>
        </div>
        <div className="px-13">
            <p className="text-white text-xl mt-5">Mensaje</p>
            <Input className="mt-5" type="text"placeholder="Escribeme lo que necesites...."/>
        </div>
        <button  className="ml-3 px-13 text-left bg-zinc-200 text-black p-3 mt-4 rounded-lg border-2 border-white hover:bg-gray-300 ">
          Enviar
        </button>
        <div>

        </div>
        </main>
    )
}