import { ShootingStars } from "./ShootingStars";
import { StarsBackground } from "./StarsBackground";
import data from "../Model/data";

export default function SimpleBranshaComponent() {
  return (
    // <section className="h-screen bg-black flex items-center justify-center relative overflow-hidden">
    <section className="h-[50vh] flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-center p-4 relative">
      <div className="absolute w-full h-full">
        <StarsBackground />
        <ShootingStars />
      </div>
      <div className="text-center text-white z-10">
        {/* <h1 className="text-6xl md:text-8xl font-thin tracking-tight mb-4">
          BRANSHA
        </h1> */}
        <img className="" src={data.branshaLogo} alt="" />
        {/* <p className="text-xl md:text-2xl font-light opacity-80">
          Think Different
        </p> */}
      </div>
    </section>
  );
}
