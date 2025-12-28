"use client"
import ElectricBorder from "./ElectricBorder"
import servicios from "@/lib/servicios"
import Image from "next/image"
import { useState } from "react"
import { useEffect } from "react"

export default function Services() {
  const [filterId, setFilterId] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      },
      { threshold: 0.3 }
    );

    document
      .querySelectorAll(".imageReveal")
      .forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);


  return (
    <div className="w-full px-3 bg-black  mx-auto">
      <h1 className="text-center text-xl md:text-4xl text-black mb-10">Podemos crear cualquier solución que necesites</h1>
      <div className="grid grid-cols-3 border-black border-2 border-between px-3 h-full">
        {servicios.map((servicio) => (
          <div key={servicio.id} className={` h-full min-h-0`}>
            <div className="flex flex-col text-center border-white border-2 px-4 pb-4 justify-start">
              <h1 className="text-white text-center text-xl md:text-3xl mb-10 line-clamp-2">
                {servicio.id}. {servicio.titulo}
              </h1>
              <p className="text-white text-sm md:text-xl overflow-hidden">
                {servicio.descripcion}
              </p>
              <div className="relative w-full  h-[20%] flex items-center justify-center">
                <Image
                  src={servicio.imagen}
                  alt="servicio"
                  width={200}
                  height={200}
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
          </div>


        ))}
      </div>

    </div>

  )
}