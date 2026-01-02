"use client"
import { useEffect, useRef } from "react";
import { useTransitionRouter } from "next-transition-router"
import gsap from "gsap";

export default function Navbar(){
    const router = useTransitionRouter();
    const navbarRef = useRef(null);

    useEffect(() => {
        gsap.from(".menu-item", {
            y:-100,
            ease: "power3.out",
            duration:1, 
            scale:.6, //tamaño en el que empieza
            stagger:.2 //delay entre elementos
        })
    },[])

    
    
    return(
        <nav className="fixed top-2 rounded-xl border-2 border-gray-300  max-w-6xl z-50 left-1/2 -translate-x-1/2 w-full mx-auto flex flex-row h-20 bg-(--bg2) border-b border-[var(--delaika-purple)] items-center ">
            <div className=" mx-auto cursor-pointer ">
            <button onClick={() => router.push("/")}>
                <p className="text-white tracking-[1.1rem] menu-item cursor-pointer hover:text-(--accent) text-2xl font-bold">
                 DELAIKA
                </p>
            </button>
            </div>
            <div className="mx-auto cursor-pointer">
            <button onClick={() => router.push("/about")}>
            <p className="text-gray-200 menu-item cursor-pointer hover:text-(--accent) text-xl font-bold">
                 NOSOTROS
                </p>
            </button>
            </div>
            <div className="mx-auto cursor-pointer">
            <button onClick={() => router.push("/work")}>
            <p className="text-gray-200 menu-item cursor-pointer hover:text-(--accent) text-xl font-bold">
                 ¿CÓMO TRABAJAMOS?
                </p>
            </button>
            </div>
            <div className="mx-auto cursor-pointer">
            <button onClick={() => router.push("/contacto")}>
            <p className="text-gray-200 menu-item cursor-pointer hover:text-(--accent) text-xl font-bold">
                 CONTACTO
                </p>
            </button>
            </div>
        </nav>
    )
}