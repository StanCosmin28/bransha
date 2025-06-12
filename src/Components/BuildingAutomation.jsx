import SolarSystemComponent from "./SolarSystemComponent";

export default function BuildingAutomation() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex flex-col md:flex-row items-center justify-between p-4 sm:p-6 md:p-8 lg:p-12 overflow-hidden relative ">
      <div className="max-w-7xl flex flex-row flex-1 justify-center items-center mx-auto">
        {/* Animated Background Particles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-2 h-2 bg-purple-400 rounded-full animate-pulse-slow opacity-50 top-1/4 left-1/4"></div>
          <div className="absolute w-1 h-1 bg-lime-300 rounded-full animate-pulse-fast opacity-30 top-3/4 right-1/3"></div>
          <div className="absolute w-3 h-3 bg-white rounded-full animate-pulse-slow opacity-20 bottom-1/3 left-2/3"></div>
        </div>

        {/* Left Text Section */}
        <div className="text-white text-left max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg space-y-5 mb-6 md:mb-0 z-10">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-purple-400 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text animate-fade-in">
            munn | Asistentul tău personal în lumea BMS
          </h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
            Totul sub control, dintr-un singur loc. Munn îți conectează clădirea
            printr-o interfață intuitivă, ușor de folosit, ordonată și de
            încredere.
          </p>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
            Disponibil și în versiuni speciale pentru hoteluri și complexe
            rezidențiale.
          </p>
          <button className="mt-4 px-6 py-2 bg-white text-black rounded-full text-xs sm:text-sm md:text-base lg:text-lg font-medium hover:bg-gray-100 hover:shadow-lg hover:scale-105 transition-all duration-300 transform-gpu">
            Află mai multe
          </button>
        </div>

        {/* Right Solar System Section */}
        <div className="w-full md:w-1/2 flex justify-center z-10">
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto">
            {/* <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-lime-400/20 rounded-full blur-xl animate-pulse-slow opacity-50"></div> */}
            <SolarSystemComponent />
          </div>
        </div>
      </div>
    </div>
  );
}

<style jsx>{`
  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  .animate-fade-in {
    animation: fade-in 1s ease-out forwards;
  }
  @keyframes pulse-slow {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
  }
  .animate-pulse-slow {
    animation: pulse-slow 4s infinite;
  }
  @keyframes pulse-fast {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.5);
    }
  }
  .animate-pulse-fast {
    animation: pulse-fast 2s infinite;
  }
`}</style>;
