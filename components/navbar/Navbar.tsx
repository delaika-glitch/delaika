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
        <nav className="fixed z-50 w-full px-5 flex flex-row  h-20 bg-[#0e100f] border-b border-blue-200 items-center space-x-10">
            <div className="pr-8 mr-8 cursor-pointer ">
            <button onClick={() => router.push("/")}>
                <p className="text-gray-200 menu-item cursor-pointer hover:text-white text-2xl font-bold">
                 Delaika
                </p>
            </button>
            </div>
            <div className="cursor-pointer  pr-8 mr-8">
            <button onClick={() => router.push("/")}>
            <p className="text-gray-200 menu-item cursor-pointer hover:text-white text-2xl font-bold">
                 Contacto
                </p>
            </button>
            </div>
            <div className="pr-8 mr-8  cursor-pointer ">
            <button onClick={() => router.push("/about")}>
            <p className="text-gray-200 menu-item cursor-pointer hover:text-white text-2xl font-bold">
                 Mi trabajo
                </p>
            </button>
            </div>
            <div className="cursor-pointer">
            <button onClick={() => router.push("/")}>
            <p className="text-gray-200 menu-item cursor-pointer hover:text-white text-2xl font-bold">
                 Contacto
                </p>
            </button>
            </div>
        </nav>
    )
}