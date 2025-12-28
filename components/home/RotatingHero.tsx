import RotatingText from "../RotatingText"
export default function RotatingHero(){
    return(
        <>
        <div className="space-y-20 border-2 border-black flex flex-col p-2 items-center justify-center bg-black">
          <RotatingText 
           texts={["PAGÍNAS WEB", "SOFTWARE", "DISEÑO UI/UX", "E-COMMERCE", "SEGURIDAD", "INTELIGENCIA ARTIFICIAL", "PANEL DE ADMINISTRACIÓN"]}
           loop={true}
           rotationInterval={3000}
           mainClassName="bg-white text-black p-3 text-3xl max-w-sm shadow-2xl shadow-purple-600"
           />
        </div>
        </>
    )
}