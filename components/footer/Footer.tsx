"use client"
import Image from "next/image"

export default function Footer(){
    return(
        <main className="w-full md:min-h-[200px] overflow-hidden text-center flex items-center bg-(--bg) px-10 border-gray-800 border-1 p-20">
            <div className="space-y-10  mx-auto text-center">
                <h1 className="text-center mx-auto font-bold text-lg md:text-9xl text-(--text)  hover:text-(--accent)">DELAIKA</h1>
            </div>
        </main>
    )
}