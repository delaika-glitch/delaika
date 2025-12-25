"use client"
export default function Esquema() {
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 rounded-xl mt-3 max-w-6xl flex flex-col mx-auto items-center px-3 md:px-0">
          <div className="px-4 text-center p-4 items-center bg-blue-200 rounded-full">
          <p className="text-black text-xl md:text-4xl hover:text-white hover:underline-text"> 
            1. Habla conmigo 
          </p>
          </div>
          <div className="bg-[url(/blue-bg.jpg)] bg-cover min-h-[400px] p-10 flex justify-center ">
            <div className="bg-black  flex flex-col items-center justify-center">
              <h1 className="text-md md:text-lg text-white p-3 items-center">Mandame un mensaje en la sección de contacto o programa una reunión.</h1>
              <br></br>
              <h1 className="text-md md:text-lg text-white p-3 items-center">Quiero entender que es lo que quieres lograr y empezar con tu proyecto.</h1>
            </div>
          </div>
          <div className="px-4 text-center p-4 items-center">
          <p className="text-gray-400 text-xl md:text-4xl"> 
            2. Aprobación del proyecto
          </p>
          </div>
          <div  className="bg-[url(/orange-bg.jpg)] bg-cover min-h-[400px] p-10 flex justify-center ">
            <div className="bg-black  flex flex-col items-center justify-center">
              <h1 className="text-md md:text-lg text-white p-3 items-center">Te enviaré una propuesta de mi servicio y los elementos que incluirá tu página web.</h1>
              <br></br>
              <h1 className="text-md md:text-lg text-white p-3 items-center">Una vez apruebes el proyecto, empezaré a trabajar en él.</h1>
            </div>
          </div>
          <div className="px-4 text-center p-4 items-center">
          <p className="text-gray-400 text-xl md:text-4xl"> 
            3. Seguimiento
          </p>
          </div>
          <div className="bg-[url(/purple-bg.jpg)] bg-cover min-h-[400px] p-10 flex justify-center ">
            <div className="bg-black  flex flex-col items-center justify-center">
              <h1 className="text-lg text-white p-3 items-center">Quiero que estés presente en cada etapa del proyecto, quiero que veas avances y cómo le estamos dando vida a tu empresa digitalmente.</h1>
              <br></br>
              <h1 className="text-lg text-white p-3 items-center">Tendrémos reuniones semanales donde podrás ver avances, pedirme sugerencias, realizar cambios y en general ser parte de todo el proceso.</h1>
            </div>
          </div>
          <div className="px-4 text-center p-4 items-center">
          <p className="text-gray-400 text-xl md:text-4xl"> 
            4. Entrega Final
          </p>
          </div>
          <div className="bg-[url(/final-bg.jpg)] bg-cover min-h-[400px] p-10 flex justify-center ">
            <div className="bg-black  flex flex-col items-center justify-center">
              <h1 className="text-lg text-white p-3 items-center">En la fecha pactada, te haré entrega de tu página/software con todo lo que debes saber para que puedas utilizarlo a tu favor.</h1>
              <br></br>
              <h1 className="text-lg text-white p-3 items-center">Seguiremos en contacto y yo voy a estar disponible para ti en todo momento.</h1>
            </div>
          </div>
         
        </div>
    )
}