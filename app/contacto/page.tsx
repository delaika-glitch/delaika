"use client"
import { Cpu, Send, User } from "lucide-react"
import { PersonStanding } from "lucide-react"
import Contacto from "@/components/Contacto"

export default function Con(){
    return(
        <main className="min-h-screen bg-(--bg) flex flex-col pb-20 pt-20">
            <div className="flex flex-col mx-auto  font-bold text-white mt-20 mb-20">
                <h1 className="uppercase text-4xl md:text-6xl mx-auto">¡Ponte en contacto con nuestro equipo!</h1>
                <p className="uppercase mt-5 md:mx-auto text-xl md:text-3xl">Será un placer atenderte</p>
                <p className="uppercase md:mx-auto text-xl md:text-3xl mt-20">ELIGE LA OPCIÓN QUE TE SEA MÁS FAVORABLE:</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-3 px-5 mx-auto">
                <div className="bg-(--bg2) h-full flex flex-col  mx-auto p-10">
                 <Send className="text-white w-20 h-20 mx-auto my-auto"/>
                 <h1 className="text-white font-bold text-4xl mx-auto my-auto">ENVIAR UN MENSAJE</h1>
                </div>
                <div className="bg-(--bg2) h-full flex flex-col mx-auto p-20">
                 <User className="text-white w-20 h-20 mx-auto my-auto "/>
                 <h1 className="text-white font-bold text-4xl mx-auto my-auto">PROGRAMAR UNA REUNIÓN</h1>
                </div>
                <div className="bg-(--bg2) h-full flex flex-col mx-auto p-20">
                 <Cpu className="text-white w-20 h-20 mx-auto my-auto"/>
                 <h1 className="text-white font-bold text-4xl mx-auto my-auto">DELAIKA.IA</h1>
                </div>
                
            </div>
        </main>
    )
}