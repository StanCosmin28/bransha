import { useState } from "react";

export default function BuildingShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const data = [
    {
      title: "Nou Update al Sistemului Medical Romănesc",
      subtitle: "Spitalul Clinic de Urgență pentru Copii 'Sf.Maria'",
      details: [
        "Sistemul BMS asigură siguranța și confortul pacienților prin funcții esențiale:",
        "Apeleare Sordă, detectie a ferestrelor deschise, control automat al climatizării și al iluminatului natural.",
      ],
      location: "Iași",
      image:
        "https://images.unsplash.com/photo-1446133132410-19df4d6610a1?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Modernizare Spital General",
      subtitle: "Spitalul Județean Iași",
      details: [
        "Sistemul BMS optimizează eficiența energetică:",
        "Monitorizare în timp real, reglarea automată a ventilației și reducerea consumului.",
      ],
      location: "Iași",
      image:
        "https://images.unsplash.com/photo-1460472178825-e5240623afd5?q=80&w=2338&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Inovație în Sănătate",
      subtitle: "Clinica Privată Bransha",
      details: [
        "Tehnologii avansate pentru pacienți:",
        "Senzori de mișcare, control al luminii și integrare cu aplicații mobile.",
      ],
      location: "Iași",
      image:
        "https://images.unsplash.com/photo-1681997862998-617e27e86d55?q=80&w=1437&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % data.length);
  };

  return (
    <div className="relative w-full overflow-hidden bg-white flex justify-center">
      <div className="max-w-[1440px] w-full flex flex-col-reverse lg:flex-row items-stretch p-4 sm:p-6 lg:p-8">
        {/* Description Panel */}
        <div className="bg-gray-100 text-black p-4 sm:p-6 rounded-lg shadow-lg w-full lg:w-1/3 mb-4 lg:mb-0 lg:mr-4 flex flex-col justify-between h-[350px] sm:h-[500px]">
          <div className="h-full justify-evenly flex flex-col ">
            <h2 className="text-xl sm:text-2xl font-bold mb-2">
              {data[currentIndex].title}
            </h2>
            <h3 className="text-lg sm:text-xl font-semibold mb-4">
              {data[currentIndex].subtitle}
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-800 text-sm sm:text-base text-left">
              {data[currentIndex].details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-end mt-4 sm:mt-6 font-bold text-lg sm:text-2xl">
            <span className="text-red-500 mr-2">
              <svg
                width="18"
                height="25"
                viewBox="0 0 18 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9 7.25C7.75725 7.25 6.75 8.25725 6.75 9.5C6.75 10.7427 7.75725 11.75 9 11.75C10.2428 11.75 11.25 10.7427 11.25 9.5C11.25 8.25725 10.2428 7.25 9 7.25ZM9 13.25C6.92925 13.25 5.25 11.5715 5.25 9.5C5.25 7.4285 6.92925 5.75 9 5.75C11.0708 5.75 12.75 7.4285 12.75 9.5C12.75 11.5715 11.0708 13.25 9 13.25ZM9 0.5C4.02975 0.5 0 4.52975 0 9.5C0 13.2635 7.50375 24.5082 9 24.5C10.473 24.5082 18 13.2125 18 9.5C18 4.52975 13.9703 0.5 9 0.5Z"
                  fill="#FF5D5D"
                />
              </svg>
            </span>
            <span>{data[currentIndex].location}</span>
          </div>
        </div>

        {/* Image */}
        {/* Image Section with Crossfade Animation */}
        <div className="w-full lg:w-2/3 relative h-[450px] sm:h-[500px] flex items-center justify-center overflow-hidden">
          <div className="relative w-full h-full">
            {data.map((item, idx) => (
              <div
                key={idx}
                className={`absolute top-0 left-0 w-full h-full rounded-lg shadow-lg bg-cover bg-center transition-opacity duration-700 ease-in-out ${
                  idx === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
                style={{ backgroundImage: `url(${item.image})` }}
              />
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="absolute bottom-4 right-4 flex space-x-2 z-20">
            <button
              onClick={handlePrev}
              className="bg-white text-black px-4 sm:px-6 py-2 rounded-full border border-gray-400 hover:bg-[#DCFC00] transition-all cursor-pointer hover:scale-105 duration-150"
            >
              ←
            </button>
            <button
              onClick={handleNext}
              className="bg-white text-black px-4 sm:px-6 py-2 rounded-full border border-gray-400 hover:bg-[#DCFC00] transition-all cursor-pointer hover:scale-105 duration-150"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
