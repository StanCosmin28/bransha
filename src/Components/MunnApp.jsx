import { useState } from "react";
import { ChevronDown, Star, Gauge, Building2, Users } from "lucide-react";
import data from "../Model/data";

export default function MunnApp() {
  const [activeSection, setActiveSection] = useState("smart-building");
  const [openDropdown, setOpenDropdown] = useState(null);

  const sections = [
    {
      id: "smart-building",
      title: "Smart building",
      description:
        "Control total asupra sistemelor clădirii, scenarii, monitorizare și supraveghere.",
      icon: Building2,
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=800&fit=crop&q=80",
    },
    {
      id: "rezervari",
      title: "Rezervări",
      description:
        "Sistem inteligent de rezervare a spațiilor și resurselor din clădire.",
      icon: Star,
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=800&fit=crop&q=80",
    },
    {
      id: "marketplace",
      title: "Marketplace",
      description:
        "Platformă de servicii și produse pentru comunitatea din clădire.",
      icon: Gauge,
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=800&fit=crop&q=80",
    },
    {
      id: "comunitate",
      title: "Comunitate",
      description:
        "Conectează rezidenții și facilitează comunicarea în comunitate.",
      icon: Users,
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=800&fit=crop&q=80",
    },
  ];

  const currentSection = sections.find(
    (section) => section.id === activeSection
  );

  const toggleDropdown = (sectionId) => {
    setOpenDropdown(openDropdown === sectionId ? null : sectionId);
  };

  return (
    <div className="min-h-screen/2 lg:min-h-screen bg-black text-white overflow-hidden">
      {/* Munn App*/}
      <div className="text-center mt-20">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Munn App
        </h1>
        <p className="text-gray-400 mt-2">Explorează funcționalitățile</p>
      </div>
      {/* Desktop Layout */}
      <div className="hidden lg:flex items-center justify-center min-h-screen px-8 pb-8">
        <div className="flex items-center gap-16 max-w-7xl w-full">
          <div className="relative flex-shrink-0 w-80 h-[640px]">
            <div className="absolute w-[95%] h-[98%] top-2 left-2">
              <img
                src={currentSection.image}
                alt={currentSection.title}
                className="w-full h-full object-cover rounded-[13%] "
              />
            </div>
            <div className="absolute top-0 w-full h-full">
              <img
                src={data.iPhoneSVGV}
                alt="Phone"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Right Panel */}
          <div className="flex-1 space-y-6">
            {/* Section Buttons */}
            <div className="space-y-4">
              {sections.map((section, index) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full p-6 rounded-2xl text-left transition-all duration-500 hover:transform hover:scale-105 cursor-pointer ${
                    section.id === activeSection
                      ? "bg-gradient-to-r from-purple-600 to-purple-800 shadow-2xl scale-105"
                      : "bg-gray-900/50 hover:bg-gray-800/70"
                  }`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-3 rounded-2xl transition-all duration-300 ${
                        section.id === activeSection
                          ? "bg-white/20"
                          : "bg-white/10"
                      }`}
                    >
                      <section.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {section.title}
                    </h3>
                    {section.id === activeSection && (
                      <div className="ml-auto">
                        <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>

            {/* Active Section Description */}
            {currentSection && (
              <div className="mt-8 p-8 rounded-3xl bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-md border border-gray-700/50 shadow-2xl animate-in slide-in-from-right-4 duration-700 relative overflow-hidden">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-600/20 to-blue-600/20">
                    <currentSection.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">
                      {currentSection.title}
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></div>
                  </div>
                </div>
                <p className="text-white/90 text-lg leading-relaxed relative z-10 text-left">
                  {currentSection.description}
                </p>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-purple-600/10 to-blue-600/10 rounded-full blur-xl"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-blue-600/10 to-green-600/10 rounded-full blur-xl"></div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden p-6 space-y-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Munn App
          </h1>
          <p className="text-gray-400 mt-2">Explorează funcționalitățile</p>
        </div>

        {sections.map((section) => (
          <div
            key={section.id}
            className="border border-gray-800 rounded-2xl overflow-hidden"
          >
            {/* Dropdown Header */}
            <button
              onClick={() => toggleDropdown(section.id)}
              className={`w-full p-6 flex items-center justify-between transition-all duration-300 ${
                openDropdown === section.id
                  ? "bg-gradient-to-r from-purple-600 to-purple-800"
                  : "bg-gray-900/50 hover:bg-gray-800/70"
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="p-2 bg-white/10 rounded-xl">
                  <section.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-semibold text-white">
                  {section.title}
                </span>
              </div>
              <ChevronDown
                className={`w-6 h-6 text-white transition-transform duration-300 ${
                  openDropdown === section.id ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown Content */}
            {openDropdown === section.id && (
              <div className="p-6 bg-gray-900/30 animate-in slide-in-from-top-4 duration-300">
                <p className="text-gray-300 mb-6 leading-relaxed text-left">
                  {section.description}
                </p>
                <div className="relative w-48 h-96 mx-auto">
                  <div className="absolute top-6 left-4 w-[83%] h-[88%] overflow-hidden rounded-[13%]">
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute top-[5%] left-[2%] w-[96%] h-[90%]">
                    <img
                      src={data.iPhoneSVGV}
                      alt="Phone"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
