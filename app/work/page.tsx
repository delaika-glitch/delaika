"use client"
import Esquema from "@/components/Esquema"
import Image from "next/image"
import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import Link from "next/link"
import { useGSAP } from "@gsap/react"

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
  }
export default function Work(){
  const container = useRef(null);

  useGSAP(() => {
    gsap.to("#square-white", {
      rotate: 360,
      scale: 6,
      duration: 2,
      ease: "power1.out",
      repeat: -1,
      repeatDelay: 1,
      yoyo: true,
      y:100
    });
  }, []);  

    return(
        <section ref={container} className="min-h-screen bg-(--bg) px-10 overflow-x-hidden">
        <div className="flex flex-col mx-auto">
          <h1 id="work-title" className="text-4xl md:text-9xl tracking-[-0.1rem] md:text-9xl rounded-xl bg-(--bg2) p-5 mt-[20%] md:mt-[10%] text-(--text) mx-auto font-bold mb-1 uppercase">
            Un proceso claro. Resultados reales.
          </h1>
        </div>
        <div id="square-white" className="h-10 mx-auto rounded-full w-10 bg-gradient-to-r from-white to-(--accent) mt-5"> </div>
        <div id="header2" className="">
           <Esquema/>
        </div>
        <Link href={"/contacto"}>
          <button className="bg-transparent mx-auto mt-10 mb-10 cursor-pointer hover:bg-(--text) border-(--text)  border-2 md:h-17 text-(--text) hover:text-black rounded-[20px] flex flex-col p-4  items-center">
            <p className="md:text-2xl  font-bold ">ME INTERESA</p>
          </button>
          </Link>
      </section>
    )
}