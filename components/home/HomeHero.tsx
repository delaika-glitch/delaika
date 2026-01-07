import { useEffect } from "react"
import SplitType from "split-type"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

export default function HomeHero(){
    useGSAP(() => {
        const text = new SplitType(".hero-text", {
          types: "words,chars",
        })
    
        gsap.from(text.chars, {
          y: () => gsap.utils.random(-150, 150),
          opacity: 0,
          stagger: 0.1,
          duration: .01,
          color: "#2EFF7A",
          ease: "power3.out",
          yoyo:true
        })
    
        return () => {
          text.revert() // 🔥 MUY importante para cleanup
        }
      }, [])

      useGSAP(() => {
        gsap.to(".image-hero", {

          duration: 6,
          stagger: 1,
          repeat: 10,
          yoyo: true,
        })
      }, [])

      useGSAP(() => {
        gsap.from(".button", {
          y:500,
          duration:5,
          ease: "power4.out"
        })
      },[])

      useGSAP(() => {
        gsap.to("#hero-squares", {
          scrollTrigger:{
            trigger:"#hero-squares",
            scrub:2,
            start: "top 10%",
            end: "buttom 10%",
            
          },
          y: 700,
          rotate:360,
          duration: 5,
          ease: "power2.out",
          scale:2
        })
      },[])

    

      useGSAP(() => {
        gsap.from("#hero-company", {
          scrollTrigger: {
            trigger: "#hero-company",
            start: "top 80%",
            end: "center 50%",
            scrub: 1.5
          },
          opacity:0
        })

      },[])
    return(
        <section className="h-full text-center h-full md:h-full mt-[20%] md:mt-1 w-full  flex flex-col space-y-10">
          <div id="hero-squares" className="hidden md:flex mt-[10%] mx-auto flex gap-5 px-4">
            <div className="w-20 h-20 bg-gradient-to-r from-(--accent) to-white rounded-xl"></div>
            <div className="w-20 h-20 bg-gradient-to-l from-(--accent) to-white rounded-xl"></div>
            <div className="w-20 h-20 bg-gradient-to-t from-(--accent) to-white rounded-xl"></div>
            <div className="w-20 h-20 bg-gradient-to-b from-(--accent) to-white rounded-xl"></div>
            <div className="w-20 h-20 bg-gradient-to-l from-(--accent) to-white rounded-xl"></div>
            <div className="w-20 h-20 bg-gradient-to-t from-(--accent) to-white rounded-xl"></div>
            <div className="w-20 h-20 bg-gradient-to-r from-(--accent) to-white rounded-xl"></div>
          </div>
        <div className="relative mx-auto text-center px-4">
          <p className="text-4xl  md:text-[94px] text-(--text) font-bold  md:cking-[.5rem]">Websites profesionales para negocios que quieren crecer.</p>
        </div>
        <div className="mx-auto px-3 flex button mb-[20px] gap-3 items-center">
          <button className="bg-gradient-to-r from-(--accent) to-white hover:bg-black  cursor-pointer button hover:bg-green-600  border-2 md:h-17 border-gray-200 text-white rounded-[8px] flex flex-col p-4  items-center">
            <p className="md:text-2xl text-black font-bold ">QUIERO MI PÁGINA</p>
          </button>
          <button className="bg-transparent cursor-pointer button hover:bg-black hover:text-black  border-2 md:h-17 border-gray-200 text-white rounded-[8px] flex flex-col p-4  items-center">
            <p className="md:text-2xl text-white font-bold ">HABLA CON NOSOTROS</p>
          </button>
        </div>
        <div id="hero-company" className="hidden md:block text-white text-9xl mb-10 mt-[2%] font-bold  mx-auto text-center w-full">
          <span className="inline-block">D  E  L  A   I   K  A</span>
        </div>
      </section>
    )
}