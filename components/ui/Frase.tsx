"use client"
import DecryptedText from "../DecryptedText"

export default function Frase(){
    return(
        <DecryptedText
          text="Hoy en día, tener presencia digital es esencial. No basta con existir en el mundo físico; tu proyecto o negocio también debe ser visible en el mundo digital. Mi objetivo es ayudarte a construir una presencia online fuerte, coherente y efectiva, para que conectes con tu audiencia y aproveches al máximo las oportunidades de este mundo digital."
          speed={30}
          maxIterations={10}
          sequential={true}
          revealDirection="start"
          className="text-white text-md md:text-3xl "
          characters=".;"
          encryptedClassName="text-white text-md md:text-3xl"
          animateOn="view"
          />
    )
    

}