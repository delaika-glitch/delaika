"use client"
import Esquema from "@/components/Esquema"
import Image from "next/image"
import { useEffect } from "react"
import gsap from "gsap"
export default function Work(){
    useEffect(() => {
        gsap.from(".title",{
            x:-900,
            duration:1,
            opacity:.3,
            ease: "power4.in"
        })
    }, [])
    return(
        <section className="min-h-screen bg-[var(--delaika-black)]">
        <div className="flex flex-col mx-auto">
           
          <h1 className="text-8xl md:text-3xl rounded-xl bg-purple-400 p-5 mt-[10%] text-black title mx-auto font-bold mb-1">¿CÓMO LOGRAMOS TU PRODUCTO DIGITAL?</h1>
          <Image 
             src="/delaika_logo.png"
             alt="pqnq"
             width={400}
             height={400}
             className="mx-auto">
            </Image>
        </div>
        <Esquema />
        <div className="max-w-7xl h-0.5 bg-gray-500 w-1000 flex mx-auto  mt-30"></div>
      </section>
    )
}