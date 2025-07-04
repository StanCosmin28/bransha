import data from "../Model/data";
import ScrollReveal from "./ScrollReveal";

export default function MunnDescriptionComponent() {
  return (
    <div className="min-h-screen w-full max-w-7xl flex items-center justify-center  mx-auto">
      <div className="flex flex-col lg:flex-row w-full h-full p-4 sm:p-6 md:p-8 lg:p-12 gap-6 justify-center items-center">
        <div className="w-full lg:w-2/5 h-full flex items-center justify-center ">
          <img
            src={data.munn3DV1}
            alt="Munn 3D"
            className="object-contain w-full h-full p-10"
          />
        </div>
        <div className="w-full lg:w-3/5 h-full text-white flex flex-col justify-center space-y-5 p-4 gap-8">
          <ScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={10}
            blurStrength={50}
          >
            Nu sunt doar o aplicație. Sunt creierul digital al clădirii tale.
          </ScrollReveal>
          {/* <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            Nu sunt doar o aplicație. Sunt creierul digital al clădirii tale.
          </h1> */}
          <h2 className="text-sm sm:text-md md:text-lg lg:text-xl font-light leading-relaxed">
            Creat de Bransha R&D, funcționează ca un asistent personal pentru
            orice spațiu - casă, birou, școală sau instituție - totul într-un
            singur ecosistem smart.
          </h2>
          <h2>
            Un singur loc. Toate funcțiile. O experiență unică. Munn nu imită.
            Munn inovează.
          </h2>
        </div>
      </div>
    </div>
  );
}
