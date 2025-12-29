"use client"
import Contacto from "@/components/Contacto"
import BlurText from "@/components/BlurText"
import Frase from "@/components/ui/Frase"
import dynamic from "next/dynamic"
import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
gsap.registerPlugin(ScrollTrigger);
import SplitType from "split-type"
import { types } from "node:util"
import { plane } from "three/examples/jsm/Addons.js"
import RotatingHero from "@/components/home/RotatingHero"
import Image from "next/image"

const Esquema = dynamic(() => import("@/components/Esquema"), {
})
const Services = dynamic(() => import("@/components/Services"), {
})
export default function MyApp() {
  const logo = "/delaika_logo.png"
  useEffect(() => {
    gsap.from(".frase-section", {
      x: -200,
      duration: 1.5,
      delay: 1,
      ease: "power3.out"

    })
  })
  useEffect(() => {
    gsap.from(".image-logo", {
      y: -410,
      ease: "power3.in",
      duration: 3,
      delay: 1,
      opacity: 1
    })
  }, [])
  useEffect(() => {
    gsap.from(".square-item", {
      x: 900,
      background: "white",
      rotate: 180,
      duration: 4,
      stagger: 1
    })
  }, [])
  useEffect(() => {
    gsap.from(".button", {
      opacity:0,
      duration:2,
      
    })
  }, [])


  useEffect(() => {
    const text = new SplitType(".hero-text", {
      types: "words,chars",
    })

    gsap.from(text.chars, {
      y: () => gsap.utils.random(-150, 150),
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      color: "#5A189A",
      ease: "power3.out",
    })

    return () => {
      text.revert() // 🔥 MUY importante para cleanup
    }
  }, [])

  return (
    <main className=" bg-[var(--delaika-black)]  w-full overflow-x-hidden">
      {/*Header*/}
      <section className="h-full  md:min-h-screen bg-[var(--delaika-black)] w-full  flex flex-col items-center ">
        <div className=" mt-[8%]">
          <p className="text-xl  md:text-[12rem]  text-[var(--delaika-text)] font-bold hero-text">Presencia Digital </p>
          <Image 
             src="/delaika_logo.png"
             alt="pqnq"
             width={300}
             height={300}
             className="mx-auto">
            </Image>
          <div className="h-5 w-5  bg-[#FFC880] shadow-2xl shadow-purple-100  square-item"></div>
          <div className="h-4 w-4 mt-4 bg-[#FFC880]  square-item"></div>
          <div className="h-3 w-3 mt-4 bg-purple-300  square-item"></div>
        </div>
        <div className="mx-auto">

          <button className="bg-[var(--delaika-purple)] cursor-pointer button hover:bg-purple-800 shadow-md shadow-purple-200 border-2 h-17 border-black text-white flex flex-col p-4  items-center">
            <p className="text-2xl text-white">Contáctanos</p>
          </button>
        </div>
        <div className="max-w-7xl h-0.5 bg-gray-500 w-1000 flex mx-auto mb-20 mt-30"></div>
      </section>


      {/*Frase*/}
      <section className=" flex flex-col frase-section" >
        <div className="h-[50vh] mt-2 max-w-6xl px-3  flex mx-auto items-center justify-center">
          <Frase />
        </div>
        <div className="max-w-7xl h-0.5 bg-gray-500 w-1000 flex mx-auto mb-20 mt-30"></div>
      </section>
      <section className="flex flex-col mx-auto text-center"> 
        <h1 className="text-6xl mb-8 text-white">¿Qué hacemos en Delaika?</h1>
        <img className="image-logo w-70 mx-auto" src="/delaika_logo.png"></img>
        <RotatingHero/>
        <div className="max-w-7xl h-0.5 bg-gray-500 w-1000 flex mx-auto mb-20 mt-30"></div>
      </section>
      {/*Cómo trabajo*/}

      

      {/*Lo que puedes tener*/}
      <section className="bg-gradient-to-b from-[var(--delaika-black)] to-blue-800 min-h-screen pt-20">
        <div className="">
          <Services />
        </div>
      </section>
      {/*Contacto*/}
      <section className=" h-auto mx-auto bg-black pt-20">
        <h1 className="text-4xl md:text-5xl text-white hover:text-gray-300 mb-7 text-center">
          Dejame un mensaje y te contestaré al instante
        </h1>
        <div className="max-w-5xl flex flex-col mx-auto text-white">
          <Contacto />
        </div>
        <h1 className="text-zinc-300 animate-bounce text-3xl flex flex-col mx-auto mt-16 text-center">¿Necesitas hablar conmigo?</h1>
        <h1 className="text-zinc-200 text-xl text-center">¡Tengamos una reunión!</h1>
        <a href={"https://calendly.com"} className="mx-auto bg-zinc-300 hover:bg-zinc-400 flex flex-col text-center w-50 p-3 rounded-lg mt-3">
          Agenda tu reunión
        </a>
      </section>
      <section className="bg-black h-50 w-full">

      </section>
    </main>
  )

}