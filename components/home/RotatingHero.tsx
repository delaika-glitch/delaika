
import { useEffect } from "react"
import gsap from "gsap"
import { useGSAP } from '@gsap/react';
export default function RotatingHero(){

    useGSAP(()=>{
        if (typeof window === 'undefined') return;
        
        gsap.from(".scroll",{
            scrollTrigger: {
                trigger: ".scroll",
                start: "top 75%", // Más arriba
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
        y: -400
      })
    })

    return(
        <div className="mx-auto px-10 grid grid-cols-3 items-center">
        <div  id="moon" className=" flex flex-col gap-10">
        <div className="h-40 w-40 rounded-2xl bg-gradient-to-l from-white to-(--accent)"></div>
        <div className="h-40 w-40  rounded-2xl bg-gradient-to-t from-blue-600 to-(--accent)"></div>
        <div className="h-40 w-40  rounded-2xl bg-gradient-to-b from-red-200 to-(--acent)"></div>
        </div>
        
        <div className="space-y-10 bg-(--bg2) w-400 rounded-[8px] max-w-xl px-6 border-2 border-black text-left  flex flex-col p-5 scroll">
          <p className="scroll  text-5xl p-3 h-10 bg-gradient-to-r from-(--accent) to-white  flex items-center text-center">
            SERVICIOS
          </p>
          <p className="scroll text-md md:text-xl text-white font-bold">
            PÁGINAS WEB
          </p>
          <p className="scroll text-md md:text-xl font-bold text-white">
            DESARROLLO DE SOFTWARE
          </p>
          <p className="scroll text-md md:text-xl font-bold text-white">
            BACKEND
          </p>
          <p className="scroll text-md md:text-xl font-bold text-white">
            INTELIGENCIA ARTIFICIAL
          </p>
          <p className="scroll text-md md:text-xl font-bold text-white">
            MANTENIMIENTO
          </p>
        </div>
        <div id="moon" className="ml-auto flex flex-col gap-10">
        <div className="h-40 w-40 rounded-2xl bg-gradient-to-l from-white to-(--accent)"></div>
        <div className="h-40 w-40  rounded-2xl bg-gradient-to-t from-blue-600 to-(--accent)"></div>
        <div className="h-40 w-40  rounded-2xl bg-gradient-to-b from-red-200 to-(--acent)"></div>

        </div>
        </div>
    )
}