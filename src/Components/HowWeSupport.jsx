export default function HowWeSupport() {
  const cards = [
    {
      icon: "/bransha-icon.svg",
      title: "Soluții integrate, dezvoltate intern",
      description:
        "Produsele și softurile noastre sunt create și testate pentru a funcționa impecabil împreună, fără bătaie de cap.",
    },
    {
      icon: "/analytics-icon.svg",
      title: "Reducere a costurilor operaționale",
      description:
        "Soluțiile noastre inteligente ajută clienții să reducă semnificativ consumul și costurile lunare.",
    },
    {
      icon: "/building-icon.svg",
      title: "Flexibilitate pentru orice tip de proiect",
      description:
        "De la clădiri rezidențiale la spitale și parcuri industriale — soluțiile Bransha se adaptează la orice cerință.",
    },
    {
      icon: "/munn-icon.svg",
      title: "Control complet prin aplicația Munn",
      description:
        "Controlezi temperatura, accesul și iluminatul — direct de pe telefon sau desktop, oriunde te-ai afla.",
    },
  ];

  return (
    <section className="py-16 bg-white p-4">
      <div className="container mx-auto px-4 max-w-[1440px]">
        <div className="flex flex-col lg:flex-row lg:items-center  lg:gap-12">
          {/* Left side: Text */}
          <div className="lg:w-1/3 text-center lg:text-left mb-12 lg:mb-0 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Cum te sprijinim?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Tehnologie care lucrează pentru tine, nu invers. Simplu, eficient
              și făcut să țină pasul cu nevoile tale — fără complicații, doar
              rezultate reale.
            </p>
          </div>

          {/* Right side: Cards grid */}
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
              {cards.map((card, index) => (
                <div key={index} className="relative group cursor-pointer">
                  {/* Shadow element */}
                  <div className="absolute bg-black rounded-xl w-full h-full top-2 left-2 transition-all duration-300 group-hover:top-3 group-hover:left-3"></div>

                  {/* Main card with fixed height */}
                  <div className="relative bg-gray-50 p-6 rounded-xl border border-gray-100 transition-all duration-300 group-hover:-translate-y-1 group-hover:-translate-x-1 h-64 flex flex-col">
                    {/* Icon */}
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 flex-shrink-0`}
                    >
                      <img src={card.icon} alt="" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-tight">
                        {card.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed flex-1">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
