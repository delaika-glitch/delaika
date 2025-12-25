"use client"
import { useTransitionRouter } from "next-transition-router"

export default function Navbar(){
    const router = useTransitionRouter();
    
    return(
        <nav className="fixed bg-transparent border-3 border-black p-4 h-20 mt-2 items-center space-x-20 flex flex-row ml-10  mx-auto ">
            <div className="pr-8 mr-8 border-r border-black">
            <button onClick={() => router.push("/")}>
                <p className="text-black hover:text-[#] text-2xl font-bold">
                 Inicio
                </p>
            </button>
            </div>
            <div className="pr-8 mr-8 border-r border-black">
            <button onClick={() => router.push("/about")}>
                <p className="text-black hover:text-[#03e29d] text-2xl font-bold">
                 Mi trabajo
                </p>
            </button>
            </div>
            <div >
            <button onClick={() => router.push("/")}>
                <p className="text-black hover:text-[#3f22ec] text-2xl font-bold">
                 Contacto
                </p>
            </button>
            </div>
        </nav>
    )
}