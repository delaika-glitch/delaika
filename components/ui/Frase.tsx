"use client"
import DecryptedText from "../DecryptedText"

export default function Frase(){
    return(
        <div className="flex justify-center">
            <DecryptedText
              text="Una presencia digital sólida permite que tu marca exista, conecte y crezca donde realmente están las personas. Genera confianza, aumenta la visibilidad y convierte el interés inicial en relaciones duraderas, para que puedas centrarte en lo importante mientras tu identidad digital trabaja por ti."
              speed={20}
              maxIterations={10}
              sequential={true}
              revealDirection="start"
              className="text-(--text) font-bold text-md md:text-2xl uppercase text-center"
              characters=".:"
              encryptedClassName="text-white text-md  md:text-xl"
              animateOn="view"
              />
        </div>
    )
}