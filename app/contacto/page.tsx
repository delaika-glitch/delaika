"use client"
import { Cpu, Send, User, PhoneCall} from "lucide-react"
import Link from "next/link"

export default function Con(){
    return(
        <main className="min-h-screen bg-(--bg) flex flex-col pb-20 pt-10 px-5">
            <div className="flex flex-col mx-auto font-bold text-(--text) mt-20 mb-20">
                <h1 className="uppercase text-4xl md:text-6xl mx-auto">Ponte en contacto con nuestro equipo</h1>
                <p className="uppercase mt-5 md:mx-auto text-xl md:text-3xl">Será un placer atenderte</p>
                <p className="uppercase md:mx-auto text-xl md:text-3xl mt-20">ELIGE LA OPCIÓN QUE TE SEA MÁS FAVORABLE:</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 px-5 mx-auto font-bold text-(--text)">
            <Link href={"/contacto/chatbot"}>
                <div className="bg-(--bg2) h-full p-20 w-full flex flex-col mx-auto text-center">
                 <Cpu className="text-(--text) w-20 h-20 mx-auto my-auto"/>
                 <h1 className="text-(--text) font-bold text-xl md:text-4xl mx-auto my-auto">ASISTENTE VIRTUAL</h1>
                </div>
                </Link>
                <Link href={"/contacto/mensajes"} >
                <div className="bg-(--bg2) h-full flex flex-col p-20 text-center">
                 <Send className="font-bold text-(--text) w-20 h-20 mx-auto"/>
                 <h1 className="font-bold text-(--text) font-bold text-xl md:text-4xl mx-auto my-auto">ENVIAR UN MENSAJE</h1>
                </div>
                </Link>
                <Link href={""}>
                <div className="bg-(--bg2) h-full flex flex-col mx-auto p-20 text-center">
                 <User className="font-bold text-(--text) w-20 h-20 mx-auto my-auto "/>
                 <h1 className="font-bold text-(--text) font-bold text-xl md:text-4xl mx-auto my-auto">PROGRAMAR UNA REUNIÓN</h1>
                </div>
                </Link>
                <Link href={""}>
                <div className="bg-(--bg2) h-full p-20 w-full flex flex-col mx-auto">
                 <PhoneCall className="text-(--text) w-20 h-20 mx-auto my-auto"/>
                 <h1 className="text-(--text) font-bold text-xl md:text-4xl mx-auto my-auto">+52 722 427 8825</h1>
                 <h1 className="text-(--text) font-bold text-sm md:text-lg mx-auto my-auto">(SOLO WHATS APP)</h1>
                </div>
                </Link>
            </div>
        </main>
    )
}