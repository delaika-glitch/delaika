"use client"
import Image from "next/image"

export default function Footer(){
    return(
        <main className="w-ful min-h-[200px] bg-black px-10 border-gray-800 border-1 grid grid-cols-3 p-20">
            <div className="col-span-1"><Image src="/delaika_logo.png" alt="" width={200} height={100}></Image></div>
            <div className="space-y-10">
                <h1 className="text-white"> Contacto</h1>
                <h1 className="text-white"> Contacto</h1>
                <h1 className="text-white"> Contacto</h1>
                <h1 className="text-white"> Contacto</h1>
            </div>
            <div className="space-y-10">
                <h1 className="text-white"> Contacto</h1>
                <h1 className="text-white"> Contacto</h1>
                <h1 className="text-white"> Contacto</h1>
                <h1 className="text-white"> Contacto</h1>
            </div>
            
            

        </main>
    )
}