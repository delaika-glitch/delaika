"use client"
import Image from "next/image"

export default function Footer(){
    return(
        <main className="w-ful min-h-[200px] bg-(--bg2) px-10 border-gray-800 border-1 p-20">
            <div className="space-y-10 ">
                <h1 className="text-center font-bold text-4xl md:text-9xl text-(--text) hover:text-(--accent)">D E L A I K A</h1>
            </div>
        </main>
    )
}