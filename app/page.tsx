"use client"
import Contacto from "@/components/Contacto"
import Frase from "@/components/ui/Frase"
import { useRef, useEffect } from "react"
import { ScrollTrigger } from "gsap/all"
gsap.registerPlugin(ScrollTrigger);
import RotatingHero from "@/components/home/RotatingHero"
import HomeHero from "@/components/home/HomeHero"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import Link from "next/link"

gsap.registerPlugin(ScrollTrigger)

export default function MyApp() {
  const timeline = gsap.timeline({
    repeat: -1, yoyo: true, repeatDelay: 1
  })

  useGSAP(() => {
    timeline.to("#green-box", {
      x: window.innerWidth - 200,
      rotation: 360,
      borderRadius: "100%",
      duration: 2,
      ease: "power1.out"
    })
    timeline.to("#green-box", {
      y: 350,
      scale: 1,
      duration: 2,
      ease: "bounce",
    })
  }, [])

  useGSAP(() => {
    if (typeof window === 'undefined') return;

    gsap.from(".frase-section", {
      scrollTrigger: {
        trigger: ".frase-section",
        start: "top 75%", // Más arriba
        end: "top 20%",   // Más abajo = más rango de scroll
        scrub: 1.5
      },
      x: window.innerWidth + 100,
      ease: "power1.out",
    })
  }, [])

  useGSAP(() => {
    gsap.from("#bg-transition", {
      scrollTrigger: {
        trigger: "#bg-transition",
        start: "top 75%",
        end: "top 20%",
        scrub: true
      },
      backgroundColor: "#0E0E10",
    })
  })

  useGSAP(() => {
    gsap.from(".confidence-line", {
      scrollTrigger: {
        trigger: ".confidence-line",
        start: "top 95%",
        end: "top 10%",
        scrub: true,
      },
      stagger: {
        amount: 1,
      },
      scale: 1.5,
      ease: "back.out",
      backgroundColor: "black"
    })
  })

  useGSAP(() => {
    gsap.from(".queremos-bg", {
      scrollTrigger: {
        trigger: ".queremos-bg",
        start: "top 85%",
        end: "top 10%",
        scrub: true,
      },
      stagger: {
        amount: 1,
      },
      scale: 1.5,
      ease: "back.out",

    })
  }
)

  return (
    <main className="px-6 bg-(--bg) w-full overflow-x-hidden">
      {/*Header*/}
      <section>
        <HomeHero />
      </section>
      {/*Frase*/}
      <section className=" flex flex-col md:mt-[0%] md:mt-1 " >
        <div className="h-full md:h-[50vh] mt-2 max-w-6xl px-3  flex mx-auto items-center justify-center">
          <Frase />
        </div>
      </section>
      {/*SERVICIOS*/}
      <section className="flex flex-col md:mb-20 mt-[20%] md:mt-0  pl-4">
        <RotatingHero />
      </section>
      {/*Confianza*/}
      <section id="bg-transition" className="md:p-0 p-20 md:h-[60vh] bg-(--text) mt-[10%]  px-15 flex items-center">
        <div className="flex mx-auto flex-col ">
          <div className="w-full h-2 bg-black mb-3 confidence-line"></div>
          <div className="w-full h-2 bg-black mb-3 confidence-line"></div>
          <div className="w-full h-2 bg-black mb-3 confidence-line"></div>
          <div className="w-full h-2 bg-black mb-3 confidence-line"></div>
          <h1 id="text-transition" className="text-xl sm:text-2xl md:text-6xl text-center text-black font-bold justify-center">
            Nosotros no hacemos únicamente páginas, hacemos una experiencia digital para tus clientes
          </h1>

        </div>
      </section>
      {/*Confianza*/}
      <section id="" className="md:p-0  md:h-full  bg-(--bg) px-15 flex ">
        <div className="flex mx-auto flex-col space-y-20 mt-13">
          <h1 className="text-md sm:text-3xl md:text-5xl text-black font-bold p-3 queremos-bg rounded-xl bg-(--text) mx-auto">QUEREMOS QUE TE VEAN</h1>
          <h1 className="text-md sm:text-3xl md:text-5xl text-black font-bold p-3 queremos-bg rounded-xl bg-(--text) mx-auto">QUEREMOS QUE TE SIENTAN</h1>
          <h1 className="text-md sm:text-3xl md:text-5xl text-black font-bold p-3 queremos-bg rounded-xl bg-(--text) mx-auto">QUEREMOS QUE LES GUSTES</h1>
          <h1 className="text-md sm:text-3xl md:text-5xl text-black font-bold p-3 queremos-bg rounded-xl bg-(--text) mx-auto">QUEREMOS QUE TE PREFIERAN</h1>
          <h1 className="text-md sm:text-3xl md:text-5xl text-black font-bold p-3 queremos-bg rounded-xl bg-(--text) mx-auto mb-20">QUEREMOS QUE TE PRESUMAN</h1>          
        </div>
      </section>
      <section >
        <div id="green-box" className="hidden md:block  w-20 h-20 bg-gradient-to-r from-(--accent) to-white"></div>
      </section>
      <section className=" h-full md:h-[50vh] mb-7 mx-auto bg-(--bg) ">
        <h1 className="text-2xl md:text-4xl font-bold md:text-5xl text-(--text) hover:text-gray-300 mb-7 text-center uppercase">
          PERMITENOS LLEVARTE <br></br> AL SIGUIENTE NIVEL
        </h1>
        <h1 className="text-(--text) font-bold animate-bounce text-xl md:text-3xl flex flex-col mx-auto mt-16 text-center">¿Necesitas hablar con nosotros?</h1>
        <h1 className="text-(--text) font-bold text-center md:text-xl mb-8 mt-8">¡Tengamos una reunión!</h1>
        <Link href={"/contacto"}>
          <button className="bg-transparent mx-auto cursor-pointer hover:bg-(--text) border-(--text)  border-2 md:h-17 text-(--text) hover:text-black rounded-[20px] flex flex-col p-4  items-center">
            <p className="md:text-2xl  font-bold ">HABLA CON NOSTROS</p>
          </button>
          </Link>
      </section>
    </main>
  )

}