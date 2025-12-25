"use client"
import  Contacto  from "@/components/Contacto"
import BlurText from "@/components/BlurText"
import Frase from "@/components/ui/Frase"
import dynamic from "next/dynamic"
import RotatingText from "@/components/RotatingText"

const Esquema = dynamic(() => import("@/components/Esquema"),{
})
const Services = dynamic(() => import("@/components/Services"),{
})
export default function MyApp() {
  return(
    
    <main className=" min-h-screen w-full overflow-x-hidden">
      {/*Header*/}
      <section className="h-full mt-[10%] max-w-6xl mx-auto mb-10 grid grid-cols-2">
        <div className="flex flex-col mr-auto ">
        <BlurText 
          className="text-BLACK text-3xl md:text-8xl mb-7"
          text="Creemos juntos tu presencia en el mundo digital."
          delay={250}
          animateBy="words"
          direction="top"
        />
        <button className="flex bg-[#233AC6] w-35 text-center mt-3 text-white animate-bounce text-2xl rounded-lg p-3  hover:bg-[#1E1E1E] hover:text-white">
          Contáctame
        </button>
        </div>
        <div className="space-y-20 flex flex-col  items-center justify-center bg-blue-200">
          <RotatingText 
           texts={["PAGÍNAS WEB", "SOFTWARE", "DISEÑO", "E-COMMERCE", "SEGURIDAD", "IA", "ADMIN"]}
           loop={true}
           rotationInterval={3000}
           mainClassName="bg-black text-white p-3 text-3xl max-w-sm shadow-2xl"
           />
           <RotatingText 
           texts={["PAGÍNAS WEB", "SOFTWARE", "DISEÑO", "E-COMMERCE", "SEGURIDAD", "INTELIGENCIA ARTIFICIAL", "ADMIN"]}
           loop={true}
           rotationInterval={3000}
           mainClassName="bg-black text-white p-3 text-3xl"
           />
           <RotatingText 
           texts={["PAGÍNAS WEB", "SOFTWARE", "DISEÑO", "E-COMMERCE", "SEGURIDAD", "IA", "ADMIN"]}
           loop={true}
           rotationInterval={3000}
           mainClassName="bg-blue-700 text-white p-3 text-3xl"
           />
        </div>
      </section>
      {/*Frase*/}
      <section className="bg-gradient-to-b from-white to-[#233AC6] flex flex-col">
        <div className="min-h-[70vh] max-w-6xl  px-3 mt-4 flex mx-auto items-center justify-center">
          <Frase/>
        </div>
      </section>
      {/*Cómo trabajo*/}
      <section className="min-h-screen bg-white">
        <div className="flex flex-col mx-auto text-center mt-20">
          <h1 className="text-4xl md:text-5xl text-[#233AC6] hover:text-gray-300 mb-7">¿Cómo trabajo?</h1>
        </div>
        <Esquema/>
      </section>

      {/*Lo que puedes tener*/}
      <section className="bg-black min-h-screen pt-20">
        <div className="">
          <Services/>
        </div>
      </section>
       {/*Contacto*/}
       <section className=" h-auto mx-auto bg-black pt-20">
        <h1 className="text-4xl md:text-5xl text-white hover:text-gray-300 mb-7 text-center">
          Dejame un mensaje y te contestaré al instante
        </h1>
        <div className="max-w-5xl flex flex-col mx-auto text-white">
        <Contacto/>
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