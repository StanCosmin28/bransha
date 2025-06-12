import { useState, useRef, useEffect, useCallback } from "react";

const Card = ({ card, index, observer }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current && observer) {
      observer.observe(cardRef.current);
    }
    return () => {
      if (cardRef.current && observer) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [observer]);

  return (
    <div
      ref={cardRef}
      className="flex-shrink-0 opacity-0 translate-y-5 xl:first:pl-10 xl:last:pr-15 lg:last:pr-10 lg:first:pl-5 md:first:pl-5 md:last:pr-10 last:pr-5"
      style={{
        animationFillMode: "forwards",
      }}
    >
      <div className="relative h-80 w-56 md:h-[40rem] md:w-96 rounded-3xl bg-gray-100 dark:bg-neutral-900 transition-all duration-300 hover:shadow-xl cursor-pointer overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-full bg-gradient-to-b from-black/50 via-transparent to-transparent hover:from-black/60 transition-all duration-300" />
        <div className="relative z-20 p-6 h-full flex flex-col justify-end">
          <p className="text-left font-sans text-sm md:text-base font-medium text-white opacity-90 hover:opacity-100 transition-opacity duration-300">
            {card.category}
          </p>
          <p className="mt-2 max-w-xs text-left font-sans text-xl md:text-3xl font-semibold text-white hover:scale-105 transition-transform duration-300">
            {card.title}
          </p>
        </div>
        <img
          src={card.src || "/placeholder.svg"}
          alt={card.title}
          className="absolute inset-0 h-full w-full object-cover transition-all duration-450 hover:scale-115 overflow-hidden"
          loading="lazy"
        />
      </div>
    </div>
  );
};

const AppleCardsCarousel = ({ cards = [] }) => {
  const carouselRef = useRef(null);
  const [canScroll, setCanScroll] = useState({ left: false, right: true });
  const observer = useRef(null);

  const checkScrollability = useCallback(() => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScroll({
        left: scrollLeft > 0,
        right: scrollLeft < scrollWidth - clientWidth,
      });
    }
  }, []);

  const scroll = (direction) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: direction * 300,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    checkScrollability();
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            entry.target.style.animationDelay = `${
              parseInt(entry.target.dataset.index) * 100
            }ms`;
          }
        });
      },
      { threshold: 0.5 }
    );

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, []);

  return (
    <div className="w-full py-10">
      <div className="relative w-full">
        <div
          ref={carouselRef}
          className="flex w-full overflow-x-scroll scroll-smooth py-5 scrollbar-hide 2xl:justify-center"
          onScroll={checkScrollability}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="flex flex-row justify-start gap-4 pl-4">
            {cards.map((card, index) => (
              <Card
                key={card.id}
                card={card}
                index={index}
                observer={observer.current}
              />
            ))}
          </div>
        </div>
        {canScroll.right || canScroll.left ? (
          <div className="mr-10 flex justify-end gap-2 mt-4">
            <button
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105"
              onClick={() => scroll(-1)}
              disabled={!canScroll.left}
              aria-label="Scroll left"
            >
              <svg
                className="h-6 w-6 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105"
              onClick={() => scroll(1)}
              disabled={!canScroll.right}
              aria-label="Scroll right"
            >
              <svg
                className="h-6 w-6 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
      <style jsx="true">{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default AppleCardsCarousel;
