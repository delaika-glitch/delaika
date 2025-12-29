"use client"
import DecryptedText from "../DecryptedText"

export default function Frase(){
    return(
        <DecryptedText
          text="Una presencia digital sólida permite que tu marca exista, conecte y crezca donde realmente están las personas. Genera confianza, aumenta la visibilidad y convierte el interés inicial en relaciones duraderas, para que puedas centrarte en lo importante mientras tu identidad digital trabaja por ti."
          speed={20}
          maxIterations={10}
          sequential={true}
          revealDirection="start"
          className="text-[#FFC880] text-md md:text-4xl "
          characters=".;"
          encryptedClassName="text-[#FFC880] text-md md:text-4xl"
          animateOn="view"
          />
    )
    

}