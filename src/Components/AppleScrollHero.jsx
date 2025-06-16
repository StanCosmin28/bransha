// import { useEffect, useRef, useCallback } from "react";

// export default function AppleScrollHero({
//   imageSrc = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
//   alt = "Premium Product",
//   phoneSvg = "public/iphone_16.svg",
//   phoneWidth = 640,
//   phoneHeight = 320,
//   screenInset = 20,
// }) {
//   const containerRef = useRef(null);
//   const animationSectionRef = useRef(null);
//   const progressRef = useRef(0);
//   const phoneRef = useRef(null);
//   const rafRef = useRef(null);

//   const updateScrollProgress = useCallback(() => {
//     if (!animationSectionRef.current || !phoneRef.current) return;

//     const rect = animationSectionRef.current.getBoundingClientRect();
//     const sectionHeight = animationSectionRef.current.offsetHeight;
//     const viewportHeight = window.innerHeight;
//     const scrollTop = -rect.top;
//     const scrollHeight = sectionHeight - viewportHeight;

//     let progress = 0;
//     if (scrollTop <= 0) progress = 0;
//     else if (scrollTop >= scrollHeight) progress = 1;
//     else progress = scrollTop / scrollHeight;

//     // Smooth easing
//     const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
//     const smoothProgress = easeOutCubic(progress);
//     progressRef.current = smoothProgress;

//     // Update phone transform directly
//     const phoneScale = 8 - smoothProgress * 7; // 8.0 to 1.0
//     const phoneRotation = smoothProgress * 1.5; // 0 to 1.5 degrees
//     phoneRef.current.style.transform = `translate3d(0, 0, 0) scale(${phoneScale}) rotate(${phoneRotation}deg)`;
//     phoneRef.current.style.willChange = "transform";
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (rafRef.current) cancelAnimationFrame(rafRef.current);
//       rafRef.current = requestAnimationFrame(updateScrollProgress);
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     handleScroll(); // Initial call

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       if (rafRef.current) cancelAnimationFrame(rafRef.current);
//     };
//   }, [updateScrollProgress]);

//   // Custom SVG Phone Component
//   const CustomPhoneSVG = ({ children }) => {
//     if (typeof phoneSvg === "string") {
//       return (
//         <div
//           className="relative"
//           style={{ width: phoneWidth, height: phoneHeight }}
//         >
//           <img
//             src={phoneSvg || "/placeholder.svg"}
//             alt="Phone"
//             className="w-full h-full"
//             loading="lazy"
//           />
//           <div
//             className="absolute rounded-[2rem] overflow-hidden"
//             style={{
//               top: screenInset,
//               left: screenInset,
//               right: screenInset,
//               bottom: screenInset,
//             }}
//           >
//             {children}
//           </div>
//         </div>
//       );
//     }
//     return (
//       <div
//         className="relative bg-gradient-to-br from-gray-800 to-black rounded-[3rem] p-2 shadow-xl"
//         style={{ width: phoneWidth, height: phoneHeight }}
//       >
//         <div className="w-full h-full bg-black rounded-[2.5rem] p-1">
//           <div className="relative w-full h-full bg-black rounded-[2.2rem] overflow-hidden">
//             {children}
//             <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
//           </div>
//         </div>
//         <div className="absolute -left-1 top-16 w-1 h-12 bg-gray-700 rounded-full" />
//         <div className="absolute -right-1 top-24 w-1 h-16 bg-gray-700 rounded-full" />
//         <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-600 rounded-full opacity-30" />
//       </div>
//     );
//   };

//   return (
//     <div ref={containerRef} className="relative">
//       <section className="h-screen bg-black flex items-center justify-center relative overflow-hidden">
//         <div className="text-center text-white z-10">
//           <h1 className="text-6xl md:text-8xl font-thin tracking-tight mb-4">
//             BRANSHA
//           </h1>
//           <p className="text-xl md:text-2xl font-light opacity-80">
//             Think Different
//           </p>
//         </div>
//       </section>
//       <section
//         ref={animationSectionRef}
//         className="relative h-[400vh] bg-gradient-to-b from-black via-gray-900 to-white"
//       >
//         <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
//           <div
//             ref={phoneRef}
//             className="relative"
//             style={{
//               transform: "translate3d(0, 0, 0) scale(8)",
//               willChange: "transform",
//               backfaceVisibility: "hidden",
//               perspective: "1000px",
//             }}
//           >
//             <CustomPhoneSVG>
//               <img
//                 src={imageSrc}
//                 alt={alt}
//                 loading="lazy"
//                 className="w-full h-full object-cover"
//                 style={{
//                   transform: "translate3d(0, 0, 0)",
//                   willChange: "transform",
//                 }}
//               />
//             </CustomPhoneSVG>
//             <div
//               className="absolute inset-0 rounded-[3rem] shadow-[0_35px_70px_rgba(0,0,0,0.3)]"
//               style={{ transform: "translate3d(0, 0, 0)" }}
//             />
//             <div
//               className="absolute inset-0 rounded-[3rem] bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-md"
//               style={{
//                 opacity: progressRef.current > 0.7 ? 0.5 : 0,
//                 transition: "opacity 0.2s ease-out",
//               }}
//             />
//           </div>
//           {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
//             {[0, 1, 2, 3].map((i) => (
//               <div
//                 key={i}
//                 className="w-2 h-2 rounded-full transition-opacity duration-300"
//                 style={{
//                   backgroundColor:
//                     progressRef.current > i * 0.25
//                       ? "white"
//                       : "rgba(255,255,255,0.3)",
//                 }}
//               />
//             ))}
//           </div>
//           <div
//             className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-white/60 text-sm font-light z-30 transition-opacity duration-300"
//             style={{ opacity: progressRef.current < 0.1 ? 1 : 0 }}
//           >
//             Scroll to reveal
//           </div> */}
//         </div>
//       </section>
//       <section className="min-h-screen bg-white flex items-center justify-center">
//         <div className="text-center max-w-4xl mx-auto px-6">
//           <h2 className="text-5xl md:text-7xl font-thin text-gray-900 mb-8">
//             Innovation
//           </h2>
//           <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed mb-8">
//             Experience the future in landscape. Every pixel crafted to
//             perfection, every interaction designed to inspire.
//           </p>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
//             <div className="text-center">
//               <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <div className="w-8 h-8 bg-blue-600 rounded-lg"></div>
//               </div>
//               <h3 className="text-xl font-medium text-gray-900 mb-2">
//                 Immersive Display
//               </h3>
//               <p className="text-gray-600">
//                 Crystal clear visuals that bring content to life
//               </p>
//             </div>
//             <div className="text-center">
//               <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <div className="w-8 h-8 bg-purple-600 rounded-lg"></div>
//               </div>
//               <h3 className="text-xl font-medium text-gray-900 mb-2">
//                 Seamless Performance
//               </h3>
//               <p className="text-gray-600">
//                 Fluid interactions powered by advanced technology
//               </p>
//             </div>
//             <div className="text-center">
//               <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <div className="w-8 h-8 bg-green-600 rounded-lg"></div>
//               </div>
//               <h3 className="text-xl font-medium text-gray-900 mb-2">
//                 Premium Design
//               </h3>
//               <p className="text-gray-600">
//                 Crafted with attention to every detail
//               </p>
//             </div>
//           </div>
//           <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-200 transform hover:scale-105">
//               Learn more
//             </button>
//             <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-200">
//               Shop now
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

import data from "../Model/data";
import { useState, useEffect, useRef, useCallback } from "react";

export default function AppleScrollHero({
  imageSrc = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  alt = "Premium Product",
  phoneSvg = data.iPhoneSVG,
  phoneWidth = 640,
  phoneHeight = 320,
  screenInset = 14,
}) {
  const containerRef = useRef(null);
  const animationSectionRef = useRef(null);
  const progressRef = useRef(0);
  const phoneRef = useRef(null);
  const rafRef = useRef(null);

  const updateScrollProgress = useCallback(() => {
    if (!animationSectionRef.current || !phoneRef.current) return;

    const rect = animationSectionRef.current.getBoundingClientRect();
    const sectionHeight = animationSectionRef.current.offsetHeight;
    const viewportHeight = window.innerHeight;
    const scrollTop = -rect.top;
    const scrollHeight = sectionHeight - viewportHeight;

    let progress = 0;
    if (scrollTop <= 0) progress = 0;
    else if (scrollTop >= scrollHeight) progress = 1;
    else progress = scrollTop / scrollHeight;

    // Smooth easing
    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
    const smoothProgress = easeOutCubic(progress);
    progressRef.current = smoothProgress;

    const deviceWidth = window.innerWidth;
    // Update phone transform directly
    // const phoneScale = 8 - smoothProgress * 7; // 8.0 to 1.0
    // const mobileScreen = deviceWidth < 540;
    // const smallScreen = deviceWidth < 768;
    // const smallMediumScreen = deviceWidth < 1024;
    // const mediumScreen = deviceWidth > 1024 && deviceWidth < 1300;
    // const bigScreen = deviceWidth > 768;

    //6 for big screen
    //6.5 for medium screen
    //6.9 for smallMedium screen
    //7.2 for small screen
    //7.6 for mobile screen

    const widthVar =
      deviceWidth < 540
        ? 7.6
        : deviceWidth < 768
        ? 7.2
        : deviceWidth < 1024
        ? 6.9
        : deviceWidth < 1300
        ? 6.5
        : 6;

    const phoneScale = 8 - smoothProgress * widthVar;

    console.log(widthVar, phoneScale);
    // const phoneRotation = smoothProgress * 1.5; // 0 to 1.5 degrees
    // phoneRef.current.style.transform = `translate3d(0, 0, 0) scale(${phoneScale}) rotate(${phoneRotation}deg)`;
    phoneRef.current.style.transform = `translate3d(0, 0, 0) scale(${phoneScale})`;
    phoneRef.current.style.willChange = "transform";
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(updateScrollProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [updateScrollProgress]);

  // Custom SVG Phone Component
  const CustomPhoneSVG = ({ children }) => {
    if (typeof phoneSvg === "string") {
      return (
        <div
          className="relative"
          style={{ width: phoneWidth, height: phoneHeight }}
        >
          <img
            src={phoneSvg}
            alt="Phone"
            className="w-full h-full"
            loading="lazy"
          />
          <div
            className="absolute rounded-[3rem] overflow-hidden"
            style={{
              top: screenInset,
              left: screenInset,
              right: screenInset,
              bottom: screenInset,
            }}
          >
            {children}
          </div>
        </div>
      );
    }
    return (
      <div
        className="relative bg-gradient-to-br from-gray-800 to-black rounded-[3rem] p-2 shadow-xl"
        style={{ width: phoneWidth, height: phoneHeight }}
      >
        <div className="w-full h-full bg-black rounded-[2.5rem] p-1">
          <div className="relative w-full h-full bg-black rounded-[2.2rem] overflow-hidden">
            {children}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
          </div>
        </div>
        <div className="absolute -left-1 top-16 w-1 h-12 bg-gray-700 rounded-full" />
        <div className="absolute -right-1 top-24 w-1 h-16 bg-gray-700 rounded-full" />
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-600 rounded-full opacity-30" />
      </div>
    );
  };

  return (
    <div ref={containerRef} className="relative">
      <section
        ref={animationSectionRef}
        className="relative h-[400vh] bg-gradient-to-b from-black via-gray-900 to-white"
      >
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          <div
            ref={phoneRef}
            className="relative"
            style={{
              transform: "translate3d(0, 0, 0)",
              willChange: "transform",
              backfaceVisibility: "hidden",
              perspective: "1000px",
            }}
          >
            <CustomPhoneSVG>
              <img
                src={imageSrc}
                alt={alt}
                loading="lazy"
                className="w-full h-full object-cover"
                style={{
                  transform: "translate3d(0, 0, 0)",
                  willChange: "transform",
                }}
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                BRANSHA x MUNN
              </div>
            </CustomPhoneSVG>
            <div
              className="absolute inset-0 rounded-[3rem] "
              style={{ transform: "translate3d(0, 0, 0)" }}
            />
            <div
              className="absolute inset-0 rounded-[3rem] bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-md"
              style={{
                opacity: progressRef.current > 0.7 ? 0.5 : 0,
                transition: "opacity 0.2s ease-out",
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
