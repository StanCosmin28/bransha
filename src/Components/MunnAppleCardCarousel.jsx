import { useState, useRef, useEffect, useCallback } from "react";
import cards from "../Model/munnCardData";

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
      className="relative flex-shrink-0 opacity-0 translate-y-5 xl:first:pl-10 xl:last:pr-15 lg:last:pr-10 lg:first:pl-5 md:first:pl-5 md:last:pr-10 last:pr-5"
      style={{
        animationFillMode: "forwards",
      }}
    >
      {/* <div className="relative h-80 w-70 md:h-150 md:w-250 rounded-3xl bg-gray-100 dark:bg-neutral-900 transition-all duration-300 cursor-pointer overflow-hidden group"></div> */}
      <div className="relative h-80 w-56 md:h-[40rem] md:w-96 rounded-3xl cursor-pointer overflow-hidden group flex items-end">
        <div className="absolute rounded-3xl bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10 inset-0 min-w-full"></div>
        {/* <div className="absolute rounded-3xl bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10 inset-0"></div> */}
        <div className="relative z-20 p-6 flex flex-row items-center justify-start gap-6 h-auto w-full">
          <p className="text-left font-sans text-sm md:text-base font-medium text-white opacity-90">
            {/* {card.category} */}
            <svg className="w-12 h-12 border-2 border-purple-500"></svg>
            {/* replace it with the icon */}
          </p>
          <p className="max-w-xs text-left font-sans text-xl md:text-3xl font-semibold text-white ">
            {card.title}
          </p>
        </div>
        <img
          src={card.src}
          alt={card.title}
          className="absolute inset-0 h-full w-full object-cover transition-all duration-450 group-hover:scale-115 overflow-hidden"
          loading="lazy"
        />
      </div>
    </div>
  );
};

const AppleCardsCarousel = () => {
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
      { threshold: 0.1 }
    );

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, []);

  return (
    <div className="w-full py-10 bg-white">
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
