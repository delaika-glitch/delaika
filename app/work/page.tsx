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
    const ctx = gsap.context(() => {
      gsap.to("#square-white", {
        x: window.innerWidth - 200,
        rotate: 360,
        scrollTrigger: {
          trigger: "#work-section",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });
    }, container);
    return () => ctx.revert();
  }, []);
  

    return(
        <section ref={container} className="min-h-screen bg-(--bg) px-10 overflow-x-hidden">
        <div className="flex flex-col mx-auto">
          <h1 id="work-title" className="text-4xl md:text-9xl tracking-[-0.1rem] md:text-9xl rounded-xl bg-(--bg2) p-5 mt-[20%] md:mt-[10%] text-gray-200 mx-auto font-bold mb-1 uppercase">
            Un proceso claro. Resultados reales.
          </h1>
        </div>
        <div id="square-white" className="h-10 rounded-full w-10 bg-gradient-to-r from-white to-(--accent) mt-5"> </div>
        <div id="header2" className="mt-19">
           <Esquema/>
        </div>
        <Link href={"/contacto"} className="flex flex-col mx-auto mt-[10%]">
        <button className="bg-gradient-to-r from-(--accent) to-white md:w-70 mx-auto mb-[10%] cursor-pointer button hover:bg-green-600  border-2 md:h-17 border-gray-200 text-white rounded-[8px] flex flex-col p-4  items-center">
            <p className="md:text-2xl text-black font-bold ">ME INTERESA</p>
          </button>
        </Link>
      </section>
    )
}