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

    useEffect(() => {
        gsap.from(".menu-item", {
            y: -100,
            ease: "power3.out",
            duration: 1,
            scale: .6, //tamaño en el que empieza
            stagger: .2 //delay entre elementos
        })
    }, [])



    return (
        <>
            <nav className="hidden md:flex mx-auto space-x-10 w-full text-center h-25 items-center  bg-(--bg2) justify-center flex">
                <button onClick={() => router.push("/")}>
                    <p className="text-white tracking-[1.1rem] menu-item cursor-pointer hover:text-(--accent) text-2xl font-bold">
                        DELAIKA
                    </p>
                </button>
                    <button onClick={() => router.push("/about")}>
                        <p className="text-gray-200 menu-item  cursor-pointer hover:text-(--accent) text-xl font-bold">
                            NOSOTROS
                        </p>
                    </button>

                    <button onClick={() => router.push("/work")}>
                        <p className="text-gray-200 menu-item cursor-pointer hover:text-(--accent) text-xl font-bold">
                            ¿CÓMO TRABAJAMOS?
                        </p>
                    </button>

                    <button onClick={() => router.push("/contacto")}>
                        <p className="text-gray-200 menu-item cursor-pointer hover:text-(--accent) text-xl font-bold">
                            CONTACTO
                        </p>
                    </button>
            </nav>
            <nav className="md:hidden absolute items-center w-full bg-gradient-to-r from-black to-(--accent) h-15">
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="text-white  p-2"
                    aria-label="Toggle mobile menu"
                >
                    {isMobileMenuOpen ? (
                        <X className="h-6 w-6" />
                    ) : (
                        <Menu className="h-6 w-6" />
                    )}
                </button>

                <div>
                    {isMobileMenuOpen ? (
                        <div className="sm:hidden z-50 absolute mr-auto w-full bg-black space-y-10 pb-3 px-4 mt-10 mr-[100%]">
                            {/* LOGO */}
                            <div className="flex text-white block">
                                <Link
                                    href="/"
                                    className="text-white text-lg hover:text-gray-500 focus:text-gray-500"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    DELAIKA
                                </Link>
                            </div>
                            {/* about us */}
                            <Link
                                href="/about"
                                className="text-white text-lg hover:text-gray-500 focus:text-gray-500 block"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                NOSOTROS
                            </Link>
                            {/* collections */}
                            <Link
                                href="/work"
                                className="text-white text-lg hover:text-gray-500 focus:text-gray-500 block"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                NUESTRO TRABAJO
                            </Link>
                            {/* journal */}
                            <Link
                                href="/contacto"
                                className="text-white text-lg hover:text-gray-500 focus:text-gray-500 block"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                CONTACTO
                            </Link>
                        </div>


                    ) : (<div></div>)}
                </div>

            </nav>
        </>
    )
}