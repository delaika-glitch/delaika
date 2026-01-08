"use client"
import { useEffect, useRef, useState } from "react";
import { useTransitionRouter } from "next-transition-router"
import { Menu, X } from "lucide-react";
import gsap from "gsap";
import Link from "next/link";

export default function Navbar() {
    const router = useTransitionRouter();
    const navbarRef = useRef(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.from(".menu-item", {
            y: -100,
            ease: "power3.out",
            duration: 1,
            scale: .6, //tamaño en el que empieza
            stagger: .2 //delay entre elementos
        })
    }, [])

    useEffect(() => {
        if (isMobileMenuOpen) {
            // Guardar la posición actual del scroll
            const scrollY = window.scrollY;
            // Bloquear el scroll
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollY}px`;
            document.body.style.width = '100%';
            document.body.style.overflow = 'hidden';
        } else {
            // Restaurar el scroll
            const scrollY = document.body.style.top;
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            document.body.style.overflow = '';
            // Restaurar la posición del scroll
            if (scrollY) {
                window.scrollTo(0, parseInt(scrollY || '0') * -1);
            }
        }
    }, [isMobileMenuOpen]);

    useEffect(() => {
        if (menuRef.current) {
            if (isMobileMenuOpen) {
                // Animación de entrada desde la izquierda
                gsap.fromTo(menuRef.current, 
                    {
                        x: "-100%",
                        opacity: 0
                    },
                    {
                        x: 0,
                        opacity: 1,
                        duration: 1,
                        ease: "power3.out"
                    }
                );
            } else {
                // Animación de salida hacia la izquierda
                gsap.to(menuRef.current, {
                    x: "-100%",
                    opacity: 0,
                    duration: 0.3,
                    ease: "power2.in"
                });
            }
        }
    }, [isMobileMenuOpen]);

    const handleMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };



    return (
        <>
            <nav className="hidden md:flex mx-auto space-x-15 w-full text-center h-25 items-center border-b border-(--text) bg-(--bg) justify-center flex">
                <button onClick={() => router.push("/")}>
                    <p className="text-(--text) font-extrabold tracking-[.5rem] menu-item cursor-pointer hover:text-(--accent) text-3xl font-bold">
                        DELAIKA
                    </p>
                </button>
                    <button onClick={() => router.push("/about")}>
                        <p className="text-(--text) font-extrabold menu-item  cursor-pointer hover:text-(--accent) text-2xl font-bold">
                            NOSOTROS
                        </p>
                    </button>

                    <button onClick={() => router.push("/work")}>
                        <p className="text-(--text) font-extrabold menu-item cursor-pointer hover:text-(--accent) text-2xl font-bold">
                            ¿CÓMO TRABAJAMOS?
                        </p>
                    </button>

                    <button onClick={() => router.push("/contacto")}>
                        <p className="text-(--text) font-extrabold menu-item cursor-pointer hover:text-(--accent) text-2xl font-bold">
                            CONTACTO
                        </p>
                    </button>
            </nav>
            <nav className="md:hidden fixed top-0 left-0 right-0 z-50 items-center w-full flex justify-between bg-(--bg) h-25 px-8">
    <p className="text-center text-[#fffce1] font-bold text-3xl tracking-[3]">DELAIKA</p>
    <button
        onClick={handleMenuToggle}
        className="text-[#fffce1] flex items-center rounded-xl h-10 w-30 border-2 p-3"
    >
        {isMobileMenuOpen ? (
            <p className="mx-auto font-bold">CERRAR</p>
        ) : (
            <p className="font-bold mx-auto">MENÚ</p>
        )}
    </button>
                

                <div className="absolute transition-300 z-50 items-center w-full left-0 top-0 overflow-hidden">
    {isMobileMenuOpen && (
        <div 
            ref={menuRef}
            className="sm:hidden fixed top-20 left-0 right-0 bottom-0 w-full bg-[#fffce1] rounded-b-xl flex flex-col space-y-10 py-10 px-4 justify-center overflow-y-auto"
                        >
                            {/* LOGO */}
                            <div className="flex text-black block">
                                <Link
                                    href="/"
                                    className="text-black border-4 rounded-xl p-3 font-bold text-2xl tracking-[1.5] hover:text-gray-500 focus:text-gray-500"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    INICIO
                                </Link>
                            </div>
                            {/* about us */}
                            <Link
                                href="/about"
                                className="text-black border-4 rounded-xl p-3 font-bold text-2xl tracking-[1.5] hover:text-gray-500 focus:text-gray-500 block"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                NOSOTROS
                            </Link>
                            {/* collections */}
                            <Link
                                href="/work"
                                className="font-extrabold text-black border-4 rounded-xl p-3  text-2xl tracking-[1.5] hover:text-gray-500 focus:text-gray-500 block"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                NUESTRO TRABAJO
                            </Link>
                            {/* journal */}
                            <Link
                                href="/contacto"
                                className="text-black border-4 rounded-xl p-3 font-bold text-2xl tracking-[1.5] hover:text-gray-500 focus:text-gray-500 block"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                CONTACTO
                                </Link>
                        </div>
                    )}
                </div>
            </nav>
        </>
    )
}