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
      data-index={index}
      className="relative flex-shrink-0 opacity-0 translate-y-5 xl:first:pl-10 xl:last:pr-10 lg:first:pl-5 lg:last:pr-5 md:first:pl-5 md:last:pr-5 first:pl-4 last:pr-4"
      style={{
        animationFillMode: "forwards",
      }}
    >
      <div className="relative h-80 w-56 md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-96 rounded-3xl cursor-pointer overflow-hidden group flex items-end">
        <div className="absolute rounded-3xl bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10 inset-0 min-w-full"></div>
        <div className="relative z-20 p-6 flex flex-row items-center justify-start gap-4 h-auto w-full">
          <svg
            className="w-10 h-10 md:w-12 md:h-12 border-2 border-purple-500 p-1"
            fill="none"
            stroke="white"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <div className="flex flex-col">
            <p className="text-left font-sans text-sm md:text-base font-medium text-white opacity-90">
              {card.category}
            </p>
            <p className="max-w-xs text-left font-sans text-lg md:text-2xl lg:text-3xl font-semibold text-white">
              {card.title}
            </p>
          </div>
        </div>
        <img
          src={card.src}
          alt={card.title}
          className="absolute inset-0 h-full w-full object-cover transition-all duration-500 group-hover:scale-110 overflow-hidden"
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
        right: Math.round(scrollLeft) < scrollWidth - clientWidth,
      });
    }
  }, []);

  const scroll = (direction) => {
    if (carouselRef.current) {
      // Adjust scroll amount to roughly one card width (w-56 or 224px on mobile, w-80 or 320px on md+)
      carouselRef.current.scrollBy({
        left: direction * (window.innerWidth >= 768 ? 320 : 224),
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
  }, [checkScrollability]);

  return (
    <div className="w-full py-10 bg-white dark:bg-neutral-900">
      <div className="relative w-full max-w-[2000px] mx-auto">
        <div
          ref={carouselRef}
          className="flex w-full overflow-x-scroll scroll-smooth py-5 scrollbar-hide"
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
        {(canScroll.right || canScroll.left) && (
          <div className="flex justify-end gap-2 mt-4 pr-4 md:pr-10">
            <button
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-neutral-700 dark:hover:bg-neutral-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105"
              onClick={() => scroll(-1)}
              disabled={!canScroll.left}
              aria-label="Scroll left"
            >
              <svg
                className="h-6 w-6 text-gray-500 dark:text-gray-300"
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
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-neutral-700 dark:hover:bg-neutral-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105"
              onClick={() => scroll(1)}
              disabled={!canScroll.right}
              aria-label="Scroll right"
            >
              <svg
                className="h-6 w-6 text-gray-500 dark:text-gray-300"
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
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default AppleCardsCarousel;
