import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const SmartHomeControlPanel = () => {
  const [activeTab, setActiveTab] = useState("end-user");
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const listRef = useRef(null);
  const progressRef = useRef(null);
  const observerRef = useRef(null);

  const endUserFeatures = [
    "Activate or deactivate HVAC systems, natural lighting (drapes), artificial lighting, and outlets with ease.",
    "Create personalized scenarios for daily routines or special occasions - tailored just for you.",
    "Receive real-time notifications from integrated sensors - always know what's happening.",
    "Monitor everything via video cameras, directly from the app.",
    "Track system activity anytime in the History section - clear, chronological, and detailed.",
  ];

  const ownerManagerFeatures = [
    "Gestionează accesul utilizatorilor și permisiunile pe toate dispozitivele cu o singură atingere.",
    "Analizează datele privind consumul de energie și optimizează utilizarea cu ajutorul informațiilor inteligente.",
    "Programează alerte de mentenanță pe baza metricilor de performanță ale sistemului.",
    "Revizuiește jurnalele de securitate și ajustează setările de la distanță pentru un control sporit.",
    "Generează rapoarte detaliate pentru conformitate și audit, actualizate la ora 11:04 EEST, 19 iunie 2025.",
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

  // useEffect(() => {
  //   if (progressRef.current) {
  //     gsap.fromTo(
  //       progressRef.current,
  //       { drawSVG: "0%" },
  //       {
  //         drawSVG: "100%",
  //         duration: 0.3,
  //         ease: "ease-inOut",
  //         onComplete: () => gsap.set(progressRef.current, { drawSVG: "0%" }),
  //       }
  //     );
  //   }
  // }, [activeTab]);

  return (
    <div
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white flex flex-col items-center justify-start p-4 sm:p-6 md:p-8 relative overflow-hidden"
    >
      {/* Background Holographic Effect */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute w-1/3 h-1/3 bg-gradient-to-br from-green-400/20 via-transparent to-blue-400/20 rounded-full blur-xl animate-shimmer" />
      </div>

      {/* Tabs */}
      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mb-6 sm:mb-10 z-10">
        <button
          className={`flex items-center px-4 py-2 sm:px-6 sm:py-2 rounded-full transition-all duration-300 cursor-pointer ${
            activeTab === "end-user"
              ? "bg-purple-600 text-white shadow-lg"
              : "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:shadow-md"
          }`}
          onClick={() => setActiveTab("end-user")}
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
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
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 11c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
            />
          </svg>
          Owner/Manager
        </button>
      </div>

      {/* Progress Ring */}
      <svg
        ref={progressRef}
        className="w-12 h-12 mb-6 sm:mb-8 text-purple-600 opacity-50 z-10"
        viewBox="0 0 100 100"
      >
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="currentColor"
          strokeWidth="5"
          strokeDasharray="282.74"
          strokeDashoffset="282.74"
        />
      </svg>

      {/* Title */}
      <h1
        ref={titleRef}
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-10 px-4"
      >
        Tu controlezi totul - simplu și intuitiv
      </h1>

      {/* Feature List */}
      <div
        ref={listRef}
        className="w-full max-w-xs sm:max-w-md md:max-w-xl space-y-3 sm:space-y-4 z-10"
      >
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-md rounded-lg p-3 sm:p-4 border-l-4 border-green-400 hover:bg-green-400/10 transition-all duration-300 hover:shadow-[0_0_15px_rgba(74,222,128,0.3)] relative overflow-hidden"
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
