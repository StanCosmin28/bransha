import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const SmartHomeControlPanel = () => {
  const [activeTab, setActiveTab] = useState("end-user");
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const listRef = useRef(null);
  const observerRef = useRef(null);

  const baseURL = "https://stancosmin28.github.io/bransha";
  const endUserFeatures = [
    "Activează sau dezactivează cu ușurință sistemele HVAC, iluminatul natural (draperii), iluminatul artificial și prizele.",
    "Creează scenarii personalizate pentru rutine zilnice sau ocazii speciale - adaptate doar pentru tine.",
    "Primește notificări în timp real de la senzorii integrați - fii mereu la curent cu ce se întâmplă.",
    "Monitorizează totul prin intermediul camerelor video, direct din aplicație.",
    "Urmărește activitatea sistemului oricând în secțiunea Istoric - clară, cronologică și detaliată.",
  ];
  const userIcon = `${baseURL}/user.svg`;
  const managerIcon = `${baseURL}/manager.svg`;
  const ownerManagerFeatures = [
    "Creare conturi pentru utilizatori - rezidenți, oaspeți, angajați.",
    " Monitorizare activitate - acces, utilizare sisteme, comportament în spațiu.",
    "Personalizare funcționalități  setări individuale pentru fiecare spațiu.",
    "Oferte pentru hoteluri - ca administrator, poți crea pachete speciale direct în secțiunea Rezervări.",
  ];

  const features =
    activeTab === "end-user" ? endUserFeatures : ownerManagerFeatures;

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.fromTo(
            titleRef.current,
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0, duration: 0.5, ease: "ease-out" }
          );
          gsap.fromTo(
            listRef.current.children,
            { opacity: 0, y: 5 },
            {
              opacity: 1,
              y: 0,
              duration: 0.3,
              stagger: 0.1,
              ease: "ease-out",
            }
          );
          observerRef.current.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observerRef.current.observe(sectionRef.current);
    }

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white flex flex-col items-center justify-start p-16 sm:p-18 md:p-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute w-1/3 h-1/3 bg-gradient-to-br from-green-400/20 via-transparent to-blue-400/20 rounded-full blur-xl animate-shimmer" />
      </div>
      <img className="w-auto max-h-100 p-10" src="/munn-3d-v2.webp" alt="" />

      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mb-6 sm:mb-10 z-10">
        <button
          className={`flex items-center px-4 py-2 sm:px-6 sm:py-2 rounded-full transition-all duration-300 cursor-pointer ${
            activeTab === "end-user"
              ? "bg-purple-600 text-white shadow-lg"
              : "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:shadow-md"
          }`}
          onClick={() => setActiveTab("end-user")}
        >
          <img className="p-2" src={userIcon} alt="" />
          End-user
        </button>
        <button
          className={`flex items-center px-4 py-2 sm:px-6 sm:py-2 rounded-full transition-all duration-300 cursor-pointer ${
            activeTab === "owner-manager"
              ? "bg-purple-600 text-white shadow-lg"
              : "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:shadow-md"
          }`}
          onClick={() => setActiveTab("owner-manager")}
        >
          <img className="p-2" src={managerIcon} alt="" />
          Owner/Manager
        </button>
      </div>

      <h1
        ref={titleRef}
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-10 px-4"
      >
        Tu controlezi totul - simplu și intuitiv
      </h1>

      <div
        ref={listRef}
        className="w-full max-w-xs sm:max-w-md md:max-w-xl space-y-3 sm:space-y-4 z-10"
      >
        {features.map((feature, index) => (
          <div
            key={index}
            className="cursor-pointer bg-white/10 backdrop-blur-md rounded-lg p-3 sm:p-4 border-l-4 border-green-400 hover:bg-green-400/10 transition-all duration-300 hover:shadow-[0_0_15px_rgba(74,222,128,0.3)] relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/20 to-transparent h-1/2 animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <p className="text-xs sm:text-sm md:text-base text-white leading-relaxed z-10 relative text-left">
              {feature}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmartHomeControlPanel;
