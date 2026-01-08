
import { useEffect } from "react"
import gsap from "gsap"
import { useGSAP } from '@gsap/react';
export default function RotatingHero(){

    useGSAP(()=>{
        if (typeof window === 'undefined') return;
        
        gsap.from(".scroll",{
            scrollTrigger: {
                trigger: ".scroll",
                start: "top 90%", // Más arriba
                end: "top 20%",   // Más abajo = más rango de scroll
                scrub: 1.5
            },
            stagger: {
              amount:2,
            },
            x: window.innerWidth -100,
            ease: "power1.out",
        })
    }, [])

    useGSAP(() => {
      if(typeof window === "undefined") return;

      gsap.from("#image", {
        scrollTrigger: {
          trigger: "#image",
          start: "top 95%",
          end: "bottom 10%",
          scrub: 1.5
        },
        opacity:0
      })
    })

    useGSAP(() => {
      gsap.from("#moon", {
        scrollTrigger: {
          trigger: "#moon",
          start: "top 80%",
          end: "center 50%",
          scrub: 1
        },
        y: -200
      })
    })

    return(
        <div className="mx-auto px-10 grid md:grid-cols-3 text-center items-center">
        <div  id="moon" className=" flex flex-col gap-10 ">
        <div className="hidden md:block h-20 w-35 justify-right rounded-2xl bg-gradient-to-t from-(--text) to-black)"></div>
        <div className="hidden md:block h-20 w-35 rounded-2xl justify-right bg-gradient-to-t from-(--text) to-black)"></div>
        <div className="hidden md:block h-20 w-35 rounded-2xl bg-gradient-to-t from-(--text) to-black)"></div>
        </div>
        
        <div className="space-y-10 bg-(--bg2) w-full rounded-[8px] max-w-xl px-6 border-2 border-black text-center  flex flex-col p-5 scroll">
          <p className="scroll font-bold text-(--text) text-5xl p-3 h-10 bg-black  flex items-center text-center">
            SERVICIOS
          </p>
          <p className="scroll bg-black  text-md md:text-xl text-(--text) font-bold">
            PÁGINAS WEB
          </p>
          <p className="scroll bg-black  text-md md:text-xl font-bold text-(--text)">
            DESARROLLO DE SOFTWARE
          </p>
          <p className="scroll bg-black  text-md md:text-xl font-bold text-(--text)">
            BACKEND
          </p>
          <p className="scroll bg-black  text-md md:text-xl font-bold text-(--text)">
            INTELIGENCIA ARTIFICIAL
          </p>
          <p className="scroll bg-black  text-md md:text-xl font-bold text-(--text)">
            MANTENIMIENTO
          </p>
          <p className="scroll bg-black  text-md md:text-xl font-bold text-(--text)">
            SEGURIDAD DIGITAL
          </p>
        </div>
        <div id="moon" className="ml-auto flex flex-col gap-10">
        <div className="hidden md:block h-20 w-35 rounded-2xl bg-gradient-to-t from-(--text) to-black"></div>
        <div className="hidden md:block h-20 w-35  rounded-2xl bg-gradient-to-t from-(--text) to-black)"></div>
        <div className="hidden md:block h-20 w-35  rounded-2xl bg-gradient-to-t from-(--text) to-black)"></div>

        </div>
        </div>
    )
}