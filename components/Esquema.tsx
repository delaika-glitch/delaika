"use client"
import { useEffect, useRef } from "react"
import gsap from "gsap"


export default function Esquema() {
  useEffect(() => {
    gsap.from(".servicio-title",{
      x:-300,
      opacity: .2,
      stagger:2,
      ease: "power3.inOut"
    }
    )

  })
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 gap-8 rounded-xl mt-3 max-w-6xl flex flex-col mx-auto items-center px-3 md:px-0">
      <div className="px-4 text-center p-4 items-center bg-[#233AC6] rounded-xl servicio-title">
        <p  className="text-white text-xl md:text-4xl hover:text-white hover:underline-text">
          1. Habla con nosotros
        </p>
      </div>
      <div  className="bg-[url(/blue-bg.jpg)] rounded-xl bg-cover min-h-[400px] p-20 flex justify-center ">
        <div className="bg-black rounded-xl flex flex-col items-center justify-center">
          <h1 className="text-md md:text-2xl text-white p-3 items-center">Escribe un mensaje en la sección de contacto o programa una reunión.</h1>
          <br></br>
          <h1 className="text-md md:text-2xl text-white p-3 items-center">Queremos entender que es lo que quieres lograr y empezar con tu proyecto.</h1>
        </div>
      </div>
      <div className="px-4 text-center servicio-title rounded-xl p-4 items-center bg-[#D6001C] autoShow ">
      <p  className="text-white text-xl md:text-4xl hover:text-white hover:underline-text">
          2. Aprobación del proyecto
        </p>
      </div>
      <div className="bg-[url(/orange-bg.jpg)] rounded-xl bg-cover min-h-[400px] p-20 flex justify-center ">
        <div className="bg-black rounded-xl flex flex-col items-center justify-center">
          <h1 className="text-md md:text-2xl text-white p-3 items-center">Te enviaré una propuesta de mi servicio y los elementos que incluirá tu página web.</h1>
          <br></br>
          <h1 className="text-md md:text-2xl text-white p-3 items-center">Una vez apruebes el proyecto, empezaré a trabajar en él.</h1>
        </div>
      </div>
     
      <div className="px-4 text-center servicio-title p-4 items-center rounded-xl bg-purple-700 autoShow ">
      <p  className="text-white text-xl md:text-4xl hover:text-white hover:underline-text">
          3. Seguimiento
        </p>
      </div>
      <div className="bg-[url(/purple-bg.jpg)] rounded-xl bg-cover min-h-[400px] p-10 flex justify-center ">
        <div className="bg-black rounded-xl flex flex-col items-center justify-center">
          <h1 className="text-lg md:text-2xl text-white p-3 items-center">Quiero que estés presente en cada etapa del proyecto, quiero que veas avances y cómo le estamos dando vida a tu empresa digitalmente.</h1>
          <br></br>
          <h1 className="text-lg md:text-2xl text-white p-3 items-center">Tendrémos reuniones semanales donde podrás ver avances, pedirme sugerencias, realizar cambios y en general ser parte de todo el proceso.</h1>
        </div>
      </div>
      <div className="px-4 servicio-title text-center rounded-xl p-4 items-center bg-green-800 autoShow ">
      <p  className="text-white text-xl md:text-4xl hover:text-white hover:underline-text">
          4. Entrega Final
        </p>
      </div>
      <div className="bg-[url(/final-bg.jpg)] bg-cover min-h-[400px] p-10 flex justify-center ">
        <div className="bg-black  flex flex-col items-center justify-center">
          <h1 className="text-2xl text-white p-3 items-center">En la fecha pactada, te haré entrega de tu página/software con todo lo que debes saber para que puedas utilizarlo a tu favor.</h1>
          <br></br>
          <h1 className="text-2xl text-white p-3 items-center">Seguiremos en contacto y yo voy a estar disponible para ti en todo momento.</h1>
        </div>
      </div>

    </div>
  )
}