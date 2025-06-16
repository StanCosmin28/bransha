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
        "https://plus.unsplash.com/premium_photo-1676657954811-9409c4830467?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
        "https://images.unsplash.com/photo-1534237710431-e2fc698436d0?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % data.length);
  };

  return (
    <div className="relative w-full overflow-hidden bg-white flex justify-center max-h-screen sm:max-h-auto">
      <div className="max-w-[1440px] w-full flex flex-col lg:flex-row items-center p-6 lg:p-10">
        {/* Description Panel */}
        <div className="bg-gray-100 h-full text-black p-6 rounded-lg shadow-lg w-full lg:w-1/3 mb-6 lg:mb-0 lg:mr-6 flex flex-col justify-evenly">
          <h2 className="text-2xl font-bold mb-2">
            {data[currentIndex].title}
          </h2>
          <h3 className="text-xl font-semibold mb-4">
            {data[currentIndex].subtitle}
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-800 text-left">
            {data[currentIndex].details.map((detail, i) => (
              <li key={i}>{detail}</li>
            ))}
          </ul>
          <div className="flex items-center justify-end mt-10 mr-10 font-bold text-2xl">
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
        <div className="w-full lg:w-2/3 relative h-[80vh] flex items-center justify-center">
          <div
            className="w-full h-full bg-cover bg-center rounded-lg shadow-lg"
            style={{ backgroundImage: `url(${data[currentIndex].image})` }}
          ></div>
          {/* Navigation Buttons */}
          <div className="absolute bottom-4 right-4 flex space-x-2">
            <button
              onClick={handlePrev}
              className="bg-white text-black px-6 py-2 rounded-full border border-gray-400 hover:bg-[#DCFC00] transition-all cursor-pointer hover:scale-106 duration-150"
            >
              ←
            </button>
            <button
              onClick={handleNext}
              className="bg-white text-black px-6 py-2 rounded-full border border-gray-400 hover:bg-[#DCFC00] transition-all cursor-pointer hover:scale-106 duration-150"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
