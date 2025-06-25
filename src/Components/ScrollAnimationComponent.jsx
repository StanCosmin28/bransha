import { useState, useEffect, useRef } from "react";
import data from "../Model/data";

export default function ScrollAnimationComponent() {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isLeftVisible, setIsLeftVisible] = useState(false);
  const [cardVisibility, setCardVisibility] = useState(new Set());
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const leftSectionRef = useRef(null);
  const timeoutRef = useRef(null);

  const { iconsSVG } = data;
  const cards = [
    {
      title: "Soluții integrate",
      description:
        "Produse și softuri create și testate pentru a funcționa impecabil împreună, fără complicații.",
      // color: "bg-gray-800",
      color: "bg-[#EFEFEF]",
      icon: iconsSVG.bransha,
      // accent: "bg-gray-700",
      accent: "bg-[#EFEFEF]",
    },
    {
      title: "Reducerea costurilor",
      description:
        "Soluții inteligente care reduc semnificativ consumul și costurile operaționale lunare.",
      // color: "bg-teal-900",
      color: "bg-[#EFEFEF]",
      icon: iconsSVG.analytics,
      // accent: "bg-teal-800",
      accent: "bg-[#EFEFEF]",
    },
    {
      title: "Flexibilitate",
      description:
        "Soluții adaptabile pentru orice proiect, de la clădiri rezidențiale la parcuri industriale.",
      // color: "bg-blue-900",
      color: "bg-[#EFEFEF]",
      icon: iconsSVG.building,
      // accent: "bg-blue-800",
      accent: "bg-[#EFEFEF]",
    },
    {
      title: "Control prin aplicație",
      description:
        "Controlezi temperatura, accesul și iluminatul direct de pe telefon sau desktop.",
      // color: "bg-[rgb(151,71,255)]",
      color: "bg-[#EFEFEF]",
      icon: iconsSVG.munn,
      // accent: "bg-[rgb(135,63,230)]",
      accent: "bg-[#EFEFEF]",
    },
  ];

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        setIsLeftVisible(entry.isIntersecting);
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px",
      }
    );

    const cardObserver = new IntersectionObserver(
      (entries) => {
        setCardVisibility((prev) => {
          const newVisible = new Set(prev);
          let mostVisibleIndex = -1;
          let maxRatio = 0;

          entries.forEach((entry) => {
            const index = Number(entry.target.getAttribute("data-index"));

            if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
              newVisible.add(index);
              if (entry.intersectionRatio > maxRatio) {
                maxRatio = entry.intersectionRatio;
                mostVisibleIndex = index;
              }
            }
            // Removed deletion logic to keep cards visible
          });

          if (mostVisibleIndex !== -1) {
            if (timeoutRef.current) {
              clearTimeout(timeoutRef.current);
            }
            timeoutRef.current = setTimeout(() => {
              setActiveCardIndex(mostVisibleIndex);
            }, 200);
          }

          return newVisible;
        });
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        rootMargin: "-20% 0px -20% 0px",
      }
    );

    if (sectionRef.current) {
      // console.log("Section ref assigned:", sectionRef.current);
      sectionObserver.observe(sectionRef.current);
    } else {
      console.error("Section ref is null");
    }

    cardsRef.current.forEach((card, index) => {
      if (card) {
        cardObserver.observe(card);
      } else {
        console.warn(`Card ref at index ${index} is null`);
      }
    });

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      sectionObserver.disconnect();
      cardObserver.disconnect();
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-white">
      <section ref={sectionRef} className="min-h-[150vh] relative py-32">
        <div className="xl:hidden block">
          <div className="h-70 mx-auto relative w-full p-12 flex flex-col justify-center items-center">
            <div className="relative z-10">
              <h2 className="text-6xl font-bold text-black mb-6 leading-tight">
                Cum te sprijinim?
              </h2>
              <p className="text-gray-800 text-2xl max-w-150 mb-8">
                Tehnologie care lucrează pentru tine, nu invers. Simplu,
                eficient și făcut să țină pasul cu nevoile tale.
              </p>
            </div>
          </div>
        </div>
        <div
          ref={leftSectionRef}
          className={`
            hidden xl:block fixed z-50 left-12 top-1/2 -translate-y-1/2 w-[420px] 
            transition-all duration-500 ease-out
            ${
              isLeftVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-[100%]"
            }
          `}
        >
          <div className="relative">
            <div
              className={`min-h-150 relative w-full aspect-square rounded-3xl shadow-xl p-12 flex flex-col justify-center ${
                cards[activeCardIndex]?.accent || "bg-gray-700"
              }`}
            >
              {/* overflow-hidden  */}
              <div className="relative z-10">
                <div className="text-6xl mb-8 transition-opacity duration-300 ease-out">
                  <img
                    className="mx-auto"
                    src={cards[activeCardIndex]?.icon || iconsSVG.bransha}
                    alt=""
                  />
                </div>
                <h2 className="text-4xl font-bold text-black mb-6 leading-tight">
                  Cum te sprijinim?
                </h2>
                <p className="text-black/50 text-lg leading-relaxed mb-8">
                  Tehnologie care lucrează pentru tine, nu invers. Simplu,
                  eficient și făcut să țină pasul cu nevoile tale.
                </p>

                <div className="flex items-center space-x-3 mb-8">
                  {cards.map((_, idx) => (
                    <div
                      key={idx}
                      className={`
                        h-2 rounded-full transition-all duration-500 ease-out
                        ${
                          idx === activeCardIndex
                            ? "w-12 bg-black shadow-lg"
                            : idx < activeCardIndex
                            ? "w-6 bg-black/70"
                            : "w-4 bg-black/30"
                        }
                      `}
                    />
                  ))}
                </div>

                <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 transition-opacity duration-300 ease-out">
                  <div className="text-sm text-black/75 uppercase tracking-wider mb-1">
                    Pasul {activeCardIndex + 1} din {cards.length}
                  </div>
                  <div className="text-black font-semibold">
                    {cards[activeCardIndex]?.title}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full xl:ml-auto xl:w-3/5 xl:pl-16 px-6 lg:px-20">
          <div className="max-w-2xl mx-auto xl:mx-0 xl:max-w-3xl">
            <div className="space-y-10 md:space-y-20 py-20">
              {cards.map((card, index) => (
                <div
                  key={index}
                  ref={(el) => (cardsRef.current[index] = el)}
                  data-index={index}
                  className={`group relative w-full min-h-90 md:min-h-80 rounded-3xl shadow-xl overflow-hidden border-b-8 border-r-9 border-[#636363] transform transition-all duration-700 ease-out
                  ${
                    cardVisibility.has(index)
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-24"
                  }
                  hover:shadow-2xl hover:-rotate-1 cursor-pointer
                  `}
                  style={{
                    transitionDelay: cardVisibility.has(index)
                      ? `${index * 100}ms`
                      : "0ms",
                  }}
                >
                  <div className={`absolute inset-0 ${card.color}`}></div>

                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-8 right-8 w-32 h-32 bg-gray-400 rounded-full blur-2xl transition-transform duration-1000"></div>
                    <div className="absolute bottom-12 left-12 w-20 h-20 bg-gray-400 rounded-full blur-xl transition-transform duration-1000 delay-200"></div>
                  </div>

                  <div className="relative z-10 p-10 h-72 flex flex-col justify-between rounded-xl">
                    {/* <div className="w-full h-full bg-black absolute left-100 -z-10"></div> */}
                    <div>
                      <div className="text-5xl mb-6 transform transition-transform duration-300">
                        <img className="mx-auto" src={card.icon} alt="" />
                      </div>
                      <h3 className="text-4xl font-bold text-black mb-4 leading-tight group-hover:translate-x-2 transition-transform duration-300">
                        {card.title}
                      </h3>
                      <p className="text-xl text-black/90 leading-relaxed group-hover:translate-x-1 transition-transform duration-300 delay-75">
                        {card.description}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`absolute inset-0 ${card.accent} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
