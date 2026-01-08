"use client"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"



gsap.registerPlugin(ScrollTrigger)

export default function Esquema() {
  useGSAP(() => {
    gsap.from("#esquema-section", {
      scrollTrigger: {
        trigger: "#esquema-section",
        start: "top 60%",
        end: "top 20%",
        scrub: 1.5
      },
      opacity: .2,
      y:50
    })
  }, [])


  return (
    <main>
    <div  className="grid grid-cols-1 md:grid-cols-1 gap-8 rounded-xl mt-3 max-w-6xl flex flex-col mx-auto items-center px-3 md:px-0">
      <div id="esquema-section" className="px-4 text-center p-4 items-center bg-(--bg2) rounded-xl servicio-title">
        <p className="text-(--text) font-bold text-xl md:text-4xl hover:text-white hover:underline-text">
          1. HABLA CON NOSOTROS
        </p>
      </div>
      <div id="esquema-section" className="bg-gradient-to-r from-(--bg2) to-black rounded-xl bg-cover md:min-h-[400px] md:p-20 flex justify-center ">
        <div className="bg-black rounded-xl flex flex-col  justify-center">
          <h1 className="text-md md:text-2xl text-(--text) font-bold md:p-3  uppercase">Escribe un mensaje en la sección de contacto o programa una reunión.</h1>
          <br></br>
          <h1 className="text-md md:text-2xl text-(--text) font-bold md:p-3  uppercase">Queremos entender que es lo que quieres lograr.</h1>
        </div>
      </div>
      <div id="esquema-section" className="px-4 text-center servicio-title rounded-xl p-4 items-center bg-(--bg2)">
        <p id="header2" className="text-(--text) font-bold uppercase text-xl md:text-4xl hover:text-white hover:underline-text">
          2. PROPUESTA
        </p>
      </div>
      <div id="esquema-section" className="bg-gradient-to-r from-(--bg2) to-black rounded-xl bg-cover md:min-h-[400px] md:p-20 flex justify-center ">
        <div className="bg-black rounded-xl flex flex-col  justify-center">
          <h1 className="text-md md:text-2xl text-(--text) font-bold md:p-3 items-center uppercase">Recibirás el alcanze del proyecto junto con la propuesta económica</h1>
          <br></br>
          <h1 className="text-md md:text-2xl text-(--text) font-bold md:p-3 items-center uppercase">Una vez el proyecto sea aprobado, empezarémos a trabajar en él.</h1>
        </div>
      </div>

      <div className="px-4 text-center servicio-title p-4 items-center rounded-xl bg-(--bg2)">
        <p className="text-(--text) font-bold uppercase text-xl md:text-4xl hover:text-white hover:underline-text">
          3. Seguimiento
        </p>
      </div>
      <div id="esquema-section" className="bg-gradient-to-r from-(--bg2) to-black  rounded-xl bg-cover md:min-h-[400px] md:p-10 flex  ">
        <div className="bg-black rounded-xl flex flex-col items-center justify-center">
          <h1 className="text-md md:text-2xl text-(--text) font-bold md:p-3 items-center uppercase">QUEREMOS que estés presente en cada etapa del proyecto Y OBSERVES cómo le estamos dando vida a tu empresa digitalmente.</h1>
          <br></br>
          <h1 className="text-md md:text-2xl text-(--text) font-bold md:p-3 items-center uppercase">Tendrémos reuniones semanales donde podrás ver avances, pedirme sugerencias, realizar cambios y en general ser parte de todo el proceso.</h1>
        </div>
      </div>
      <div className="px-4 servicio-title text-center rounded-xl p-4 items-center bg-(--bg2) autoShow ">
        <p className="uppercase text-(--text) font-bold text-xl md:text-4xl hover:text-white hover:underline-text">
          4. Entrega Final
        </p>
      </div>
      <div id="esquema-section" className="bg-gradient-to-r from-(--bg2) to-black rounded-xl bg-cover md:min-h-[400px] md:p-20 flex justify-center ">
        <div className="bg-black rounded-xl flex flex-col items-center justify-center">
          <h1 className="uppercase text-md md:text-2xl text-(--text) font-bold md:p-3 items-center">En la fecha pactada, te haré entrega de tu página/software con todo lo que debes saber para que puedas utilizarlo a tu favor.</h1>
          <br></br>
          <h1 className="uppercase text-md md:text-2xl text-(--text) font-bold md:p-3 items-center">Seguiremos en contacto y yo voy a estar disponible para ti en todo momento.</h1>
        </div>
      </div>

    </div>
    </main>
  )
}