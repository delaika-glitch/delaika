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
        <nav className="fixed  z-50 left-1/2 -translate-x-1/2 w-[900px] mx-auto flex flex-row shadow-xl shadow-purple-300 h-20 bg-[var(--delaika-black)] border-b border-[var(--delaika-purple)] items-center ">
            <div className=" mx-auto cursor-pointer ">
            <button onClick={() => router.push("/")}>
                <p className="text-white menu-item cursor-pointer hover:text-white text-2xl font-bold">
                 Delaika
                </p>
            </button>
            </div>
            <div className="mx-auto cursor-pointer">
            <button onClick={() => router.push("/")}>
            <p className="text-gray-200 menu-item cursor-pointer hover:text-white text-2xl font-bold">
                 Contacto
                </p>
            </button>
            </div>
            <div className="mx-auto cursor-pointer">
            <button onClick={() => router.push("/work")}>
            <p className="text-gray-200 menu-item cursor-pointer hover:text-white text-2xl font-bold">
                 Mi trabajo
                </p>
            </button>
            </div>
            <div className="mx-auto cursor-pointer">
            <button onClick={() => router.push("/")}>
            <p className="text-gray-200 menu-item cursor-pointer hover:text-white text-2xl font-bold">
                 Contacto
                </p>
            </button>
            </div>
        </nav>
    )
}