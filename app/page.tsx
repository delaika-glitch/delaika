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

gsap.registerPlugin(ScrollTrigger)

export default function MyApp() {
  const timeline = gsap.timeline({
    repeat: -1, yoyo:true, repeatDelay:1
  })

  useGSAP(() => {
    timeline.to("#green-box", {
      x:window.innerWidth - 200,
      rotation:360,
      borderRadius: "100%",
      duration:2,
      ease: "power1.out"
    }) 
    timeline.to("#green-box", {
      y:350,
      scale:1,
      duration:2,
      ease:"bounce",
    })
  }, [])

  useGSAP(()=>{
    if (typeof window === 'undefined') return;
    
    gsap.from(".frase-section",{
        scrollTrigger: {
            trigger: ".frase-section",
            start: "top 75%", // Más arriba
            end: "top 20%",   // Más abajo = más rango de scroll
            scrub: 1.5
        },
        x: window.innerWidth +100,
        ease: "power1.out",
    })
}, [])



 
 
  return (
    <main className=" bg-(--bg) w-full overflow-x-hidden">
      {/*Header*/}
      <section>
        <HomeHero/>
      </section>
      {/*Frase*/}
      <section className=" flex flex-col mt-[20%] " >
        <div className="h-[50vh] mt-2 max-w-6xl px-3  flex mx-auto items-center justify-center">
          <Frase />
        </div>
      </section>
      
      <section className="flex flex-col mb-20 pl-4"> 
        <RotatingHero/>
      </section>
      <section >
        <div id="green-box" className="w-20 h-20 bg-gradient-to-r from-(--accent) to-white"></div>
      </section>
      <section className=" h-full mb-7 mx-auto bg-(--bg) p-20">
        <h1 className="text-4xl md:text-5xl text-white hover:text-gray-300 mb-7 text-center uppercase">
        Cuéntanos qué necesitas y te decimos cómo hacerlo
        </h1>
        <h1 className="text-zinc-300 animate-bounce text-3xl flex flex-col mx-auto mt-16 text-center">¿Necesitas hablar conmigo?</h1>
        <h1 className="text-zinc-200 text-xl text-center">¡Tengamos una reunión!</h1>
        <a href={"https://calendly.com"} className="mx-auto bg-zinc-300 hover:bg-zinc-400 flex flex-col text-center w-50 p-3 rounded-lg mt-3">
          Agenda tu reunión
        </a>
      </section>
    </main>
  )

}