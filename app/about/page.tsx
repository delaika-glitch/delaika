"use client"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from '@gsap/react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

gsap.registerPlugin(ScrollTrigger)

export default function About() {
    const timeline = gsap.timeline({
        yoyo: true,
        repeat: -1,
        repeatDelay: 1
    })
    useGSAP(() => {
        timeline.to("#square", {
            rotate: 360,
            stagger: .5,
            borderRadius: "50%"
        })

    }, [])

    useGSAP(() => {
        if (typeof window === 'undefined') return;
        gsap.from(".es", {
            scrollTrigger: {
                trigger: ".es",
                start: "top 70%",
                end: "top 15%",
                scrub: 1.5
            },
            stagger: {
                amount: 1

            },
            y: 300,
            opacity: 0,
            ease: "power4.out",
        })
    }, [])

    useGSAP(() => {
        gsap.to(".lines", {
            scrollTrigger: {
                trigger: "#white",
                start: "top 65%",
                scrub: 1.5
            },
            stagger: {
                amount: .1
            },
            x: -600,
            backgroundColor: "#fffce1"
        })
    })

    useGSAP(() => {
        gsap.from(".filo-text", {
            scrollTrigger: {
                trigger: ".filo-text",
                start: "top 100%",
                end: "bottom 20%",
                scrub: true
            },
            stagger: {
                amount: 1
            },
            y: 100,
            ease: "power2.inOut",
            opacity: 0
        })
    })

    useGSAP(() => {
        gsap.to(".sound-text", {
            x: () => gsap.utils.random(-1.5, 1.5),
            y: () => gsap.utils.random(-1.5, 1.5),
            duration: 5,
            ease: "power1.inOut",
            repeat: -1,
            repeatDelay: 0.6
        })
    })

    useGSAP(() => {
        gsap.from(".more-text", {
            scrollTrigger: {
                trigger: ".sound-text",
                start: "top 105%",
                scrub: 1.5
            },
            opacity: 0,
            y: 200

        })
    })

    useGSAP(() => {
        gsap.to(".square-stagger", {
            y: 200,
            opacity: 0,
            ease: "power2.out",
            rotate: 360,
            borderRadius: "100",
            stagger: {
                amount: 1
            },
            scrollTrigger: {
                trigger: ".square-stagger",
                start: "top 95%",
                scrub: 1.3
            }
        })
    })

    useGSAP(() => {
        gsap.to(".square-stagger1", {
            x: -400,
            opacity: 0,
            ease: "power2.out",
            rotate: 360,
            borderRadius: "100",
            stagger: {
                amount: 1
            },
            scrollTrigger: {
                trigger: ".square-stagger1",
                start: "top 105%",
                scrub: 1.3
            }
        })
    })

    return (
        <main className="bg-(--bg) h-full pt-20  px-5 overflow-x-hidden">
            <div className="px-15">
                <h1 className="text-3xl md:text-7xl text-(--text) tracking-[0.3rem] mt-20 uppercase font-extrabold">Delaika nace de una idea simple</h1>
            </div>
            <div className="flex mt-20">
                <div id="square" className="h-10 w-10 md:h-40 md:w-40 bg-gradient-to-t from-(--accent) to-gray-200 rounded-xl mx-auto"></div>
                <div id="square" className="h-10 w-10 md:h-40 md:w-40 bg-gradient-to-b from-(--accent) to-gray-200 rounded-xl mx-auto"></div>
                <div id="square" className="h-10 w-10 md:h-40 md:w-40 bg-gradient-to-r from-(--accent) to-gray-200 rounded-xl mx-auto"></div>
                <div id="square" className="h-10 w-10 md:h-40 md:w-40 bg-gradient-to-r from-(--accent) to-gray-200 rounded-xl mx-auto"></div>
                <div id="square" className="h-10 w-10 md:h-40 md:w-40 bg-gradient-to-t from-(--accent) to-gray-200 rounded-xl mx-auto"></div>
            </div>
            <div>
                <p className="md:text-3xl md:w-[50%] font-extrabold text-(--text) mt-[10%] px-20 uppercase">Las buenas páginas web no nacen solo de código ni de plantillas. Nacen de decisiones de diseño bien pensadas y de una experiencia cuidada en cada detalle.</p>
            </div>
            <div className="h-5 lines mt-10 w-full bg-(--bg) rounded-xl mx-auto"></div>
            <div className="md:ml-[50%]">
                <p className="md:text-3xl w-full font-bold text-(--text) mt-[10%] mb-[10%] px-20 uppercase">En Delaika diseñamos sitios web para marcas que entienden que su presencia digital es parte de su identidad y no algo que se pueda dejar al azar.</p>
            </div>
            <div className="h-5 lines mt-[20%] md:mt-10 w-full bg-(--text) rounded-xl mx-auto"></div>
            <div className="mt-[10%] mb-[10%] px-4">
                <div className="flex flex-col mx-auto text-center space-y-[8%]">
                    <p className="rounded-full bg-gradient-to-b from-white to-(--accent) h-5 md:h-10 md:w-30 w-20 es mx-auto"></p>
                    <p className="uppercase es text-(--text) font-bold md:text-5xl text-2xl">
                        Es una experiencia
                    </p>
                    <p className="rounded-full bg-gradient-to-b from-white to-(--accent) h-5 md:h-10 md:w-180 w-40 es mx-auto"></p>
                    <p className="uppercase es text-(--text) md:text-5xl text-2xl font-bold">
                        Es una extensión de una marca
                    </p>
                    <p className="rounded-full bg-gradient-to-b from-white to-(--accent) h-5 md:h-10 md:w-300 w-50 es mx-auto"></p>
                    <p className="uppercase es text-(--text) font-bold justify-center md:text-5xl text-2xl">
                        Debe comunicar con claridad desde el primer segundo
                    </p>
                    <p className="rounded-full bg-gradient-to-b from-white to-(--accent) h-5 md:h-10 md:w-400 w-60 es mx-auto"></p>
                </div>
            </div>
            {/*filosofia*/}
            <div className="flex flex-col text-center">
                <div className="flex">
                    <h1 className="text-center text-(--text) filo-text ml-10 font-bold md:text-8xl text-3xl mb-[10%] ml ">NUESTRA <br></br> FILOSOFÍA</h1>

                </div>
                <div className="mx-auto filo-text">
                    <p className=" text-(--text) text-lg md:text-5xl  uppercase font-bold">La simplicidad no es ausencia de trabajo</p>
                    <p className="text-(--text) font-bold text-lg md:text-5xl uppercase mb-20">Es el resultado de hacerlo <span className="text-(--accent) uppercase font-bold text-lg md:text-5xl"> bien</span> </p>
                    <p className="text-(--text) text-lg md:text-3xl uppercase font-bold mb-20">Menos ruido.</p>
                    <p className="text-(--text) text-center text-lg md:text-3xl uppercase font-bold mb-20 ">Más intención.</p>
                    <p className="text-(--text) text-lg md:text-3xl uppercase font-bold mb-20">Más criterio</p>
                </div>
                <div className="max-w-7xl  flex gap-3 mx-auto">
                    <div className="h-5 md:h-20 square-stagger w-20 rounded-[8px] bg-gradient-to-b from-(--accent) to-white"></div>
                    <div className="h-5 md:h-20 square-stagger w-20 rounded-[8px] bg-gradient-to-b rounded-[8px]  from-(--accent) to-white"></div>
                    <div className="h-5 md:h-20 square-stagger w-20 rounded-[8px] bg-gradient-to-b rounded-[8px]  from-(--accent) to-white"></div>
                    <div className="h-5 md:h-20 square-stagger w-20 rounded-[8px] bg-gradient-to-b rounded-[8px]  from-(--accent) to-white"></div>
                </div>
            </div>
            {/*propósito*/}
            <div className=" mt-[10%]">
                <div className="flex ">
                    <h1 className="text-center text-(--text) filo-text ml-10 font-bold text-3xl md:text-8xl mb-[10%] ml  uppercase">Propósito</h1>

                </div>
                <div className="mx-auto filo-text">
                    <p className=" text-(--text)  text-lg md:text-5xl  uppercase font-bold">Acompañar a las marcas en su crecimiento digital.</p>
                    <p className="text-(--text) mt-20 font-bold text-lg md:text-5xl uppercase mb-20">Trabajamos con empresas que entienden que su web
                        no es solo un canal, sino una herramienta estratégica.</p>

                </div>
                <div className="max-w-7xl  flex gap-3 mx-auto">
                    <div className="h-10 sm:h-15 md:h-20 square-stagger1 w-10 sm:w15 md:w-20 rounded-[8px] bg-gradient-to-b from-(--accent) to-white"></div>
                    <div className="h-10 sm:h-15 md:h-20 square-stagger1 w-10 sm:w15 md:w-20  rounded-[8px] bg-gradient-to-b rounded-[8px]  from-(--accent) to-white"></div>
                    <div className="h-10 sm:h-15 md:h-20 square-stagger1 w-10 sm:w15 md:w-20  rounded-[8px] bg-gradient-to-b rounded-[8px]  from-(--accent) to-white"></div>
                    <div className="h-10 sm:h-15 md:h-20 square-stagger1 w-10 sm:w15 md:w-20  rounded-[8px] bg-gradient-to-b rounded-[8px]  from-(--accent) to-white"></div>
                </div>

            </div>
            <div className="">
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-xl text-(--text) font-bold">MISIÓN</AccordionTrigger>
                        <AccordionContent className="text-md text-(--text) font-bold uppercase">
                        Diseñar y construir páginas web que no solo se vean bien, sino que comuniquen con claridad, transmitan identidad y acompañen el crecimiento digital de las marcas a largo plazo.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-xl text-(--text) font-bold">VISIÓN</AccordionTrigger>
                        <AccordionContent className="text-md text-(--text) font-bold uppercase">
                        Crear experiencias digitales que representen fielmente a las marcas, donde cada decisión de diseño tenga un propósito y cada detalle comunique desde el primer segundo.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </main>
    )
}