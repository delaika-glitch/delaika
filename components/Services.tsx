"use client"
import ElectricBorder from "./ElectricBorder"
import servicios from "@/lib/servicios"
import Image from "next/image"
import { useState } from "react"
import { useEffect } from "react"

export default function Services() {
    const [filterId, setFilterId] = useState("");

  useEffect(() => {
    setFilterId(`turbulent-displace-${Math.random().toString(36).substring(2, 9)}`);
  }, []);

  if (!filterId) return null;
    return(
        <div>
        <h1 className="text-center text-xl md:text-4xl text-white mb-10">Puedo crear cualquier cosa que necesites</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 px-3 gap-5 h-auto">
          {servicios.map((servicio) => (
            <ElectricBorder
              key={servicio.id}
              color="#666666"
              speed={1}
              chaos={0.2}
              thickness={4}
              style={{ borderRadius: 16 }}
              className="overflow-hidden"
              
            >
              <div className={`grid ${servicio.gridRows} h-full min-h-0`}>
        <div className="flex flex-col mx-auto w-full h-full min-h-0 p-4">
          <div className="relative w-full h-full min-h-[200px] max-h-[300px] flex items-center justify-center">
            <Image 
              src={servicio.imagen} 
              alt="servicio"
              width={300}
              height={400}
              className="object-contain w-full h-full"
            />
          </div>
        </div>
        <div className="flex flex-col text-center px-4 pb-4 justify-start">
          <h1 className="text-zinc-200 text-center text-xl md:text-2xl mb-4 line-clamp-2">
            {servicio.id}. {servicio.titulo}
          </h1>
          <p className="text-white text-sm md:text-base line-clamp-4 overflow-hidden">
            {servicio.descripcion}
          </p>
        </div>
      </div>
            </ElectricBorder>

          ))}
        </div>

        </div>
        
    )
}