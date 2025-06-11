// import { useState, useRef, useEffect } from "react";

// const AppleCardsCarousel = () => {
//   const [selectedCard, setSelectedCard] = useState(null);
//   const [canScrollLeft, setCanScrollLeft] = useState(false);
//   const [canScrollRight, setCanScrollRight] = useState(true);
//   const [imageLoading, setImageLoading] = useState({});
//   const carouselRef = useRef(null);

//   // Sample data - replace with your own
//   const cards = [
//     {
//       id: 1,
//       category: "Artificial Intelligence",
//       title: "You can do more with AI.",
//       src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       content: (
//         <div className="space-y-6">
//           <div className="bg-gray-50 dark:bg-neutral-800 p-8 rounded-3xl">
//             <p className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed">
//               <span className="font-bold text-neutral-700 dark:text-neutral-200">
//                 Artificial Intelligence is transforming the way we work and
//                 live.
//               </span>{" "}
//               From automating routine tasks to enabling creative breakthroughs,
//               AI tools are becoming essential for productivity and innovation.
//               Discover how you can leverage AI to enhance your workflow and
//               achieve more than ever before.
//             </p>
//             <img
//               src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2832&auto=format&fit=crop"
//               alt="AI Technology"
//               className="w-full h-64 object-cover rounded-2xl mt-6"
//             />
//           </div>
//         </div>
//       ),
//     },
//     {
//       id: 2,
//       category: "Productivity",
//       title: "Enhance your productivity.",
//       src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       content: (
//         <div className="space-y-6">
//           <div className="bg-gray-50 dark:bg-neutral-800 p-8 rounded-3xl">
//             <p className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed">
//               <span className="font-bold text-neutral-700 dark:text-neutral-200">
//                 Maximize your efficiency with the right tools and techniques.
//               </span>{" "}
//               Learn how to streamline your workflow, eliminate distractions, and
//               focus on what matters most. Our productivity suite helps you
//               organize tasks, manage time, and achieve your goals faster.
//             </p>
//             <img
//               src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=2839&auto=format&fit=crop"
//               alt="Productivity Setup"
//               className="w-full h-64 object-cover rounded-2xl mt-6"
//             />
//           </div>
//         </div>
//       ),
//     },
//     {
//       id: 3,
//       category: "Product",
//       title: "Launching the new Vision Pro.",
//       src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       content: (
//         <div className="space-y-6">
//           <div className="bg-gray-50 dark:bg-neutral-800 p-8 rounded-3xl">
//             <p className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed">
//               <span className="font-bold text-neutral-700 dark:text-neutral-200">
//                 Experience the future of spatial computing.
//               </span>{" "}
//               The new Vision Pro brings together digital content and the
//               physical world in ways never before possible. Immerse yourself in
//               apps, entertainment, and experiences that feel magical.
//             </p>
//             <img
//               src="https://images.unsplash.com/photo-1592478411213-6153e4ebc696?q=80&w=2832&auto=format&fit=crop"
//               alt="VR Technology"
//               className="w-full h-64 object-cover rounded-2xl mt-6"
//             />
//           </div>
//         </div>
//       ),
//     },
//     {
//       id: 4,
//       category: "Product",
//       title: "Maps for your iPhone 15 Pro Max.",
//       src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       content: (
//         <div className="space-y-6">
//           <div className="bg-gray-50 dark:bg-neutral-800 p-8 rounded-3xl">
//             <p className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed">
//               <span className="font-bold text-neutral-700 dark:text-neutral-200">
//                 Navigate with precision and style.
//               </span>{" "}
//               The enhanced Maps app on iPhone 15 Pro Max delivers incredibly
//               detailed views, real-time updates, and seamless integration with
//               your daily routine. Get where you're going with confidence.
//             </p>
//             <img
//               src="https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=2874&auto=format&fit=crop"
//               alt="iPhone Maps"
//               className="w-full h-64 object-cover rounded-2xl mt-6"
//             />
//           </div>
//         </div>
//       ),
//     },
//     {
//       id: 5,
//       category: "iOS",
//       title: "Photography just got better.",
//       src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       content: (
//         <div className="space-y-6">
//           <div className="bg-gray-50 dark:bg-neutral-800 p-8 rounded-3xl">
//             <p className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed">
//               <span className="font-bold text-neutral-700 dark:text-neutral-200">
//                 Capture life's moments with stunning clarity.
//               </span>{" "}
//               Advanced computational photography, improved low-light
//               performance, and professional-grade features make every shot a
//               masterpiece. Your memories deserve the best quality.
//             </p>
//             <img
//               src="https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?q=80&w=2832&auto=format&fit=crop"
//               alt="iPhone Photography"
//               className="w-full h-64 object-cover rounded-2xl mt-6"
//             />
//           </div>
//         </div>
//       ),
//     },
//     {
//       id: 6,
//       category: "Hiring",
//       title: "Hiring for a Staff Software Engineer",
//       src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       content: (
//         <div className="space-y-6">
//           <div className="bg-gray-50 dark:bg-neutral-800 p-8 rounded-3xl">
//             <p className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed">
//               <span className="font-bold text-neutral-700 dark:text-neutral-200">
//                 Join our world-class engineering team.
//               </span>{" "}
//               We're looking for exceptional software engineers who are
//               passionate about building products that impact millions of users.
//               Work on cutting-edge technology with the best minds in the
//               industry.
//             </p>
//             <div className="bg-white dark:bg-neutral-700 p-6 rounded-2xl mt-6">
//               <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200 mb-4">
//                 What we offer:
//               </h3>
//               <ul className="space-y-2 text-neutral-600 dark:text-neutral-400">
//                 <li>• Competitive salary and equity</li>
//                 <li>• Flexible work arrangements</li>
//                 <li>• Health and wellness benefits</li>
//                 <li>• Professional development opportunities</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       ),
//     },
//   ];

//   const checkScrollability = () => {
//     if (carouselRef.current) {
//       const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
//       setCanScrollLeft(scrollLeft > 0);
//       setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
//     }
//   };

//   const scrollLeft = () => {
//     if (carouselRef.current) {
//       carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
//     }
//   };

//   const scrollRight = () => {
//     if (carouselRef.current) {
//       carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
//     }
//   };

//   const openCard = (card) => {
//     setSelectedCard(card);
//     document.body.style.overflow = "hidden";
//   };

//   const closeCard = () => {
//     setSelectedCard(null);
//     document.body.style.overflow = "auto";
//   };

//   const handleImageLoad = (cardId) => {
//     setImageLoading((prev) => ({ ...prev, [cardId]: false }));
//   };

//   const handleImageLoadStart = (cardId) => {
//     setImageLoading((prev) => ({ ...prev, [cardId]: true }));
//   };

//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       if (event.key === "Escape") {
//         closeCard();
//       }
//     };

//     const handleClickOutside = (event) => {
//       if (selectedCard && event.target.classList.contains("modal-backdrop")) {
//         closeCard();
//       }
//     };

//     if (selectedCard) {
//       window.addEventListener("keydown", handleKeyDown);
//       window.addEventListener("click", handleClickOutside);
//     }

//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//       window.removeEventListener("click", handleClickOutside);
//       document.body.style.overflow = "auto";
//     };
//   }, [selectedCard]);

//   useEffect(() => {
//     checkScrollability();

//     // Initialize image loading states
//     const initialLoadingState = {};
//     cards.forEach((card) => {
//       initialLoadingState[card.id] = true;
//     });
//     setImageLoading(initialLoadingState);
//   }, []);

//   return (
//     <div className="w-full h-full py-20">
//       {/* Title */}
//       <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans mb-8">
//         Get to know your iSad.
//       </h2>

//       {/* Carousel Container */}
//       <div className="relative w-full">
//         {/* Scrollable Cards Container */}
//         <div
//           ref={carouselRef}
//           className="flex w-full overflow-x-scroll scroll-smooth py-10 scrollbar-hide"
//           onScroll={checkScrollability}
//           style={{
//             scrollbarWidth: "none",
//             msOverflowStyle: "none",
//           }}
//         >
//           <div className="flex flex-row justify-start gap-4 pl-4 mx-auto max-w-7xl">
//             {cards.map((card, index) => (
//               <div
//                 key={card.id}
//                 className="flex-shrink-0 last:pr-[5%] md:last:pr-[33%] opacity-0 translate-y-5 animate-fade-in-up"
//                 style={{
//                   animationDelay: `${index * 100}ms`,
//                   animationFillMode: "forwards",
//                 }}
//               >
//                 <button
//                   onClick={() => openCard(card)}
//                   className="relative z-10 flex h-80 w-56 md:h-[40rem] md:w-96 flex-col items-start justify-start overflow-hidden rounded-3xl bg-gray-100 dark:bg-neutral-900 transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 group"
//                 >
//                   {/* Gradient Overlay */}
//                   <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-full bg-gradient-to-b from-black/50 via-transparent to-transparent group-hover:from-black/60 transition-all duration-300" />

//                   {/* Text Content */}
//                   <div className="relative z-40 p-8">
//                     <p className="text-left font-sans text-sm md:text-base font-medium text-white opacity-90 group-hover:opacity-100 transition-opacity duration-300">
//                       {card.category}
//                     </p>
//                     <p className="mt-2 max-w-xs text-left font-sans text-xl md:text-3xl font-semibold text-white group-hover:scale-105 transition-transform duration-300">
//                       {card.title}
//                     </p>
//                   </div>

//                   {/* Background Image */}
//                   <div className="absolute inset-0 z-10">
//                     {imageLoading[card.id] && (
//                       <div className="absolute inset-0 bg-gray-200 dark:bg-neutral-700 animate-pulse" />
//                     )}
//                     <img
//                       src={card.src || "/placeholder.svg"}
//                       alt={card.title}
//                       className={`h-full w-full object-cover transition-all duration-700 group-hover:scale-110 ${
//                         imageLoading[card.id] ? "opacity-0" : "opacity-100"
//                       }`}
//                       loading="lazy"
//                       onLoad={() => handleImageLoad(card.id)}
//                       onLoadStart={() => handleImageLoadStart(card.id)}
//                     />
//                   </div>
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Navigation Arrows */}
//         <div className="mr-10 flex justify-end gap-2 mt-4">
//           <button
//             className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:scale-110"
//             onClick={scrollLeft}
//             disabled={!canScrollLeft}
//             aria-label="Scroll left"
//           >
//             <svg
//               className="h-6 w-6 text-gray-500"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M15 19l-7-7 7-7"
//               />
//             </svg>
//           </button>
//           <button
//             className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:scale-110"
//             onClick={scrollRight}
//             disabled={!canScrollRight}
//             aria-label="Scroll right"
//           >
//             <svg
//               className="h-6 w-6 text-gray-500"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M9 5l7 7-7 7"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Modal */}
//       {selectedCard && (
//         <div className="fixed inset-0 z-50 h-screen overflow-auto modal-backdrop opacity-0 animate-fade-in">
//           <div className="fixed inset-0 h-full w-full bg-black/80 backdrop-blur-lg" />
//           <div className="relative z-[60] mx-auto my-10 h-fit max-w-5xl rounded-3xl bg-white dark:bg-neutral-900 p-4 md:p-10 font-sans scale-95 opacity-0 animate-scale-in shadow-2xl">
//             {/* Close Button */}
//             <button
//               className="sticky top-4 right-0 ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-black dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-200 hover:scale-110"
//               onClick={closeCard}
//               aria-label="Close modal"
//             >
//               <svg
//                 className="h-6 w-6 text-neutral-100 dark:text-neutral-900"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             </button>

//             {/* Modal Content */}
//             <p className="text-base font-medium text-black dark:text-white opacity-70">
//               {selectedCard.category}
//             </p>
//             <p className="mt-4 text-2xl md:text-5xl font-semibold text-neutral-700 dark:text-white leading-tight">
//               {selectedCard.title}
//             </p>
//             <div className="py-10">{selectedCard.content}</div>
//           </div>
//         </div>
//       )}

//       {/* Custom Styles */}
//       <style jsx>{`
//         .scrollbar-hide::-webkit-scrollbar {
//           display: none;
//         }

//         @keyframes fade-in-up {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes fade-in {
//           from {
//             opacity: 0;
//           }
//           to {
//             opacity: 1;
//           }
//         }

//         @keyframes scale-in {
//           from {
//             opacity: 0;
//             transform: scale(0.95);
//           }
//           to {
//             opacity: 1;
//             transform: scale(1);
//           }
//         }

//         .animate-fade-in-up {
//           animation: fade-in-up 0.6s ease-out;
//         }

//         .animate-fade-in {
//           animation: fade-in 0.3s ease-out forwards;
//         }

//         .animate-scale-in {
//           animation: scale-in 0.3s ease-out forwards;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default AppleCardsCarousel;

import { useState, useRef, useEffect, useCallback } from "react";

const Card = ({ card, index }) => (
  <div
    className="flex-shrink-0 last:pr-[5%] md:last:pr-[33%] opacity-0 translate-y-5 animate-fade-in-up"
    style={{
      animationDelay: `${index * 100}ms`,
      animationFillMode: "forwards",
    }}
  >
    <div className="relative h-80 w-56 md:h-[40rem] md:w-96 rounded-3xl bg-gray-100 dark:bg-neutral-900 transition-all duration-300 hover:shadow-xl cursor-pointer overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-full bg-gradient-to-b from-black/50 via-transparent to-transparent hover:from-black/60 transition-all duration-300" />
      <div className="relative z-20 p-6">
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

const AppleCardsCarousel = ({ cards = [] }) => {
  const carouselRef = useRef(null);
  const [canScroll, setCanScroll] = useState({ left: false, right: true });

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
  }, []);

  return (
    <div className="w-full py-10">
      <div className="relative w-full">
        <div
          ref={carouselRef}
          className="flex w-full overflow-x-scroll scroll-smooth py-5 scrollbar-hide"
          onScroll={checkScrollability}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="flex flex-row justify-start gap-4 pl-4">
            {cards.map((card, index) => (
              <Card key={card.id} card={card} index={index} />
            ))}
          </div>
        </div>
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
