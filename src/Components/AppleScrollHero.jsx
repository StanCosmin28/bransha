// import data from "../Model/data";
// import { useEffect, useRef, useCallback } from "react";
// export default function AppleScrollHero({
//   imageSrc = "https://images.unsplash.com/photo-1720415353460-957325a7267d?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   alt = "Premium Product",
//   phoneSvg = data.iPhoneSVG,
//   phoneWidth = 640,
//   phoneHeight = 320,
//   screenInset = 14,
// }) {
//   const containerRef = useRef(null);
//   const animationSectionRef = useRef(null);
//   const progressRef = useRef(0);
//   const phoneRef = useRef(null);

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

//     const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
//     const smoothProgress = easeOutCubic(progress);
//     progressRef.current = smoothProgress;

//     const deviceWidth = window.innerWidth;

//     const maxScale =
//       deviceWidth < 540
//         ? 2.8
//         : deviceWidth < 768
//         ? 3.2
//         : deviceWidth < 1024
//         ? 3.8
//         : deviceWidth < 1300
//         ? 4.2
//         : 4.5;

//     const minScale =
//       deviceWidth < 540
//         ? 0.8
//         : deviceWidth < 768
//         ? 1.1
//         : deviceWidth < 1024
//         ? 1.4
//         : deviceWidth < 1300
//         ? 1.7
//         : 2;

//     const phoneScale = maxScale - smoothProgress * (maxScale - minScale);

//     phoneRef.current.style.transform = ` translate3d(0, 0, 0) scale(${phoneScale})`;
//   }, []);

//   useEffect(() => {
//     let ticking = false;

//     const handleScroll = () => {
//       if (!ticking) {
//         ticking = true;
//         requestAnimationFrame(() => {
//           updateScrollProgress();
//           ticking = false;
//         });
//       }
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     handleScroll(); // Initial call

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [updateScrollProgress]);

//   const CustomPhoneSVG = ({ children }) => {
//     return (
//       <div
//         className="relative"
//         style={{ width: phoneWidth, height: phoneHeight }}
//       >
//         <img
//           src={phoneSvg}
//           alt="Phone"
//           className="w-full h-full"
//           loading="lazy"
//         />
//         <div
//           className="absolute rounded-[3rem] overflow-hidden"
//           style={{
//             top: screenInset,
//             left: screenInset,
//             right: screenInset,
//             bottom: screenInset,
//           }}
//         >
//           {children}
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div ref={containerRef} className="relative">
//       <section
//         ref={animationSectionRef}
//         className="relative h-[250vh] bg-gradient-to-b from-black via-gray-900 to-white"
//       >
//         <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
//           <div
//             ref={phoneRef}
//             className="relative"
//             style={{
//               transform: "translate3d(0, 0, 0)",
//             }}
//           >
//             <CustomPhoneSVG>
//               <img
//                 src={imageSrc}
//                 alt={alt}
//                 className="w-full h-full object-cover"
//                 style={{
//                   transform: "translate3d(0, 0, 0)",
//                 }}
//               />
//             </CustomPhoneSVG>
//             <div
//               className="absolute inset-0 rounded-[3rem] bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-md"
//               style={{
//                 opacity: progressRef.current > 0.7 ? 0.5 : 0,
//                 transition: "opacity 0.2s ease-out",
//               }}
//             />
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// import data from "../Model/data";
// import { useEffect, useRef, useCallback, useMemo } from "react";

// export default function AppleScrollHero({
//   imageSrc = "https://images.unsplash.com/photo-1720415353460-957325a7267d?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   alt = "Premium Product",
//   phoneSvg = data.iPhoneSVG,
//   phoneWidth = 640,
//   phoneHeight = 320,
//   screenInset = 14,
// }) {
//   const containerRef = useRef(null);
//   const animationSectionRef = useRef(null);
//   const phoneRef = useRef(null);
//   const rafId = useRef(null);
//   const lastScrollY = useRef(0);
//   const cachedRect = useRef(null);
//   const resizeObserver = useRef(null);

//   // Memoize scale values based on device width
//   const scaleConfig = useMemo(() => {
//     const deviceWidth = window.innerWidth;

//     if (deviceWidth < 540) return { max: 2.8, min: 0.8 };
//     if (deviceWidth < 768) return { max: 3.2, min: 1.1 };
//     if (deviceWidth < 1024) return { max: 3.8, min: 1.4 };
//     if (deviceWidth < 1300) return { max: 4.2, min: 1.7 };
//     return { max: 4.5, min: 2 };
//   }, []);

//   // Pre-calculate easing function values for common progress values
//   const easingLookup = useMemo(() => {
//     const lookup = new Map();
//     for (let i = 0; i <= 100; i++) {
//       const t = i / 100;
//       lookup.set(i, 1 - Math.pow(1 - t, 3));
//     }
//     return lookup;
//   }, []);

//   // Optimized easing function
//   const getEasing = useCallback(
//     (progress) => {
//       const index = Math.round(progress * 100);
//       return easingLookup.get(Math.min(100, Math.max(0, index))) || progress;
//     },
//     [easingLookup]
//   );

//   // Cache DOM rect to avoid repeated getBoundingClientRect calls
//   const updateCachedRect = useCallback(() => {
//     if (animationSectionRef.current) {
//       cachedRect.current = {
//         height: animationSectionRef.current.offsetHeight,
//         top:
//           animationSectionRef.current.getBoundingClientRect().top +
//           window.scrollY,
//       };
//     }
//   }, []);

//   const updateScrollProgress = useCallback(() => {
//     if (!phoneRef.current || !cachedRect.current) return;

//     const scrollY = window.scrollY;
//     const viewportHeight = window.innerHeight;
//     const sectionTop = cachedRect.current.top;
//     const sectionHeight = cachedRect.current.height;

//     const scrollTop = scrollY - sectionTop;
//     const scrollHeight = sectionHeight - viewportHeight;

//     // Early exit if no change
//     if (Math.abs(scrollY - lastScrollY.current) < 1) return;
//     lastScrollY.current = scrollY;

//     let progress = 0;
//     if (scrollTop <= 0) progress = 0;
//     else if (scrollTop >= scrollHeight) progress = 1;
//     else progress = scrollTop / scrollHeight;

//     const smoothProgress = getEasing(progress);
//     const phoneScale =
//       scaleConfig.max - smoothProgress * (scaleConfig.max - scaleConfig.min);

//     // Use transform3d for hardware acceleration and avoid layout triggers
//     phoneRef.current.style.transform = `translate3d(0, 0, 0) scale(${phoneScale})`;

//     // Update glow effect efficiently
//     const glowOpacity = smoothProgress > 0.7 ? 0.5 : 0;
//     const glowElement = phoneRef.current.querySelector(".glow-effect");
//     if (glowElement && glowElement.style.opacity !== glowOpacity.toString()) {
//       glowElement.style.opacity = glowOpacity;
//     }
//   }, [scaleConfig, getEasing]);

//   // Throttled scroll handler
//   const handleScroll = useCallback(() => {
//     if (rafId.current) return;

//     rafId.current = requestAnimationFrame(() => {
//       updateScrollProgress();
//       rafId.current = null;
//     });
//   }, [updateScrollProgress]);

//   // Handle resize with debouncing
//   const handleResize = useCallback(() => {
//     clearTimeout(handleResize.timeout);
//     handleResize.timeout = setTimeout(() => {
//       updateCachedRect();
//       updateScrollProgress();
//     }, 100);
//   }, [updateCachedRect, updateScrollProgress]);

//   useEffect(() => {
//     // Initial setup
//     updateCachedRect();
//     updateScrollProgress();

//     // Set up event listeners with passive option for better performance
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     window.addEventListener("resize", handleResize, { passive: true });

//     // Use ResizeObserver for more efficient element resize detection
//     if (animationSectionRef.current && "ResizeObserver" in window) {
//       resizeObserver.current = new ResizeObserver(updateCachedRect);
//       resizeObserver.current.observe(animationSectionRef.current);
//     }

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       window.removeEventListener("resize", handleResize);
//       if (rafId.current) {
//         cancelAnimationFrame(rafId.current);
//       }
//       if (resizeObserver.current) {
//         resizeObserver.current.disconnect();
//       }
//       clearTimeout(handleResize.timeout);
//     };
//   }, [handleScroll, handleResize, updateCachedRect, updateScrollProgress]);

//   const CustomPhoneSVG = ({ children }) => {
//     return (
//       <div
//         className="relative"
//         style={{ width: phoneWidth, height: phoneHeight }}
//       >
//         <img
//           src={phoneSvg}
//           alt="Phone"
//           className="w-full h-full"
//           loading="lazy"
//           decoding="async"
//         />
//         <div
//           className="absolute rounded-[3rem] overflow-hidden"
//           style={{
//             top: screenInset,
//             left: screenInset,
//             right: screenInset,
//             bottom: screenInset,
//           }}
//         >
//           {children}
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div ref={containerRef} className="relative">
//       <section
//         ref={animationSectionRef}
//         className="relative h-[250vh] bg-gradient-to-b from-black via-gray-900 to-white"
//       >
//         <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
//           <div
//             ref={phoneRef}
//             className="relative will-change-transform"
//             style={{
//               transform: "translate3d(0, 0, 0)",
//             }}
//           >
//             <CustomPhoneSVG>
//               <img
//                 src={imageSrc}
//                 alt={alt}
//                 className="w-full h-full object-cover"
//                 loading="lazy"
//                 decoding="async"
//                 style={{
//                   transform: "translate3d(0, 0, 0)",
//                 }}
//               />
//             </CustomPhoneSVG>
//             <div
//               className="glow-effect absolute inset-0 rounded-[3rem] bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-md will-change-opacity"
//               style={{
//                 opacity: 0,
//                 transition: "opacity 0.2s ease-out",
//               }}
//             />
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// import data from "../Model/data";
// import { useEffect, useRef, useCallback, useMemo } from "react";

// export default function AppleScrollHero({
//   imageSrc = "https://images.unsplash.com/photo-1720415353460-957325a7267d?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   alt = "Premium Product",
//   phoneSvg = data.iPhoneSVG,
//   phoneWidth = 640,
//   phoneHeight = 320,
//   screenInset = 14,
// }) {
//   const containerRef = useRef(null);
//   const animationSectionRef = useRef(null);
//   const phoneRef = useRef(null);
//   const rafId = useRef(null);
//   const lastScrollY = useRef(0);
//   const cachedRect = useRef(null);
//   const resizeObserver = useRef(null);

//   // Memoize scale values based on device width
//   const scaleConfig = useMemo(() => {
//     const deviceWidth = window.innerWidth;

//     if (deviceWidth < 540) return { max: 2.8, min: 0.5 };
//     if (deviceWidth < 768) return { max: 3.2, min: 0.8 };
//     if (deviceWidth < 1024) return { max: 3.8, min: 1.1 };
//     if (deviceWidth < 1300) return { max: 4.2, min: 1.5 };
//     return { max: 4.5, min: 2 };
//   }, []);

//   // Pre-calculate easing function values for common progress values
//   const easingLookup = useMemo(() => {
//     const lookup = new Map();
//     for (let i = 0; i <= 100; i++) {
//       const t = i / 100;
//       lookup.set(i, 1 - Math.pow(1 - t, 3));
//     }
//     return lookup;
//   }, []);

//   // Optimized easing function
//   const getEasing = useCallback(
//     (progress) => {
//       const index = Math.round(progress * 100);
//       return easingLookup.get(Math.min(100, Math.max(0, index))) || progress;
//     },
//     [easingLookup]
//   );

//   // Cache DOM rect to avoid repeated getBoundingClientRect calls
//   const updateCachedRect = useCallback(() => {
//     if (animationSectionRef.current) {
//       cachedRect.current = {
//         height: animationSectionRef.current.offsetHeight,
//         top:
//           animationSectionRef.current.getBoundingClientRect().top +
//           window.scrollY,
//       };
//     }
//   }, []);

//   const updateScrollProgress = useCallback(() => {
//     if (!phoneRef.current || !cachedRect.current) return;

//     const scrollY = window.scrollY;
//     const viewportHeight = window.innerHeight;
//     const sectionTop = cachedRect.current.top;
//     const sectionHeight = cachedRect.current.height;

//     const scrollTop = scrollY - sectionTop;
//     const scrollHeight = sectionHeight - viewportHeight;

//     // Early exit if no change
//     if (Math.abs(scrollY - lastScrollY.current) < 1) return;
//     lastScrollY.current = scrollY;

//     let progress = 0;
//     if (scrollTop <= 0) progress = 0;
//     else if (scrollTop >= scrollHeight) progress = 1;
//     else progress = scrollTop / scrollHeight;

//     const smoothProgress = getEasing(progress);
//     // Start at max scale (full screen) when progress = 0, scale down to min when progress = 1
//     const phoneScale =
//       scaleConfig.max - smoothProgress * (scaleConfig.max - scaleConfig.min);

//     // Use transform3d for hardware acceleration and avoid layout triggers
//     phoneRef.current.style.transform = `translate3d(0, 0, 0) scale(${phoneScale})`;

//     // Update glow effect efficiently
//     const glowOpacity = smoothProgress > 0.7 ? 0.5 : 0;
//     const glowElement = phoneRef.current.querySelector(".glow-effect");
//     if (glowElement && glowElement.style.opacity !== glowOpacity.toString()) {
//       glowElement.style.opacity = glowOpacity;
//     }
//   }, [scaleConfig, getEasing]);

//   // Throttled scroll handler
//   const handleScroll = useCallback(() => {
//     if (rafId.current) return;

//     rafId.current = requestAnimationFrame(() => {
//       updateScrollProgress();
//       rafId.current = null;
//     });
//   }, [updateScrollProgress]);

//   // Handle resize with debouncing
//   const handleResize = useCallback(() => {
//     clearTimeout(handleResize.timeout);
//     handleResize.timeout = setTimeout(() => {
//       updateCachedRect();
//       updateScrollProgress();
//     }, 100);
//   }, [updateCachedRect, updateScrollProgress]);

//   useEffect(() => {
//     // Initial setup
//     updateCachedRect();
//     // Set initial scale to maximum
//     if (phoneRef.current) {
//       phoneRef.current.style.transform = `translate3d(0, 0, 0) scale(${scaleConfig.max})`;
//     }
//     updateScrollProgress();

//     // Set up event listeners with passive option for better performance
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     window.addEventListener("resize", handleResize, { passive: true });

//     // Use ResizeObserver for more efficient element resize detection
//     if (animationSectionRef.current && "ResizeObserver" in window) {
//       resizeObserver.current = new ResizeObserver(updateCachedRect);
//       resizeObserver.current.observe(animationSectionRef.current);
//     }

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       window.removeEventListener("resize", handleResize);
//       if (rafId.current) {
//         cancelAnimationFrame(rafId.current);
//       }
//       if (resizeObserver.current) {
//         resizeObserver.current.disconnect();
//       }
//       clearTimeout(handleResize.timeout);
//     };
//   }, [handleScroll, handleResize, updateCachedRect, updateScrollProgress]);

//   const CustomPhoneSVG = ({ children }) => {
//     return (
//       <div
//         className="relative"
//         style={{ width: phoneWidth, height: phoneHeight }}
//       >
//         <img
//           src={phoneSvg}
//           alt="Phone"
//           className="w-full h-full"
//           loading="lazy"
//           decoding="async"
//         />
//         <div
//           className="absolute rounded-[3rem] overflow-hidden"
//           style={{
//             top: screenInset,
//             left: screenInset,
//             right: screenInset,
//             bottom: screenInset,
//           }}
//         >
//           {children}
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div ref={containerRef} className="relative">
//       <section
//         ref={animationSectionRef}
//         className="relative min-h-[250vh] bg-gradient-to-b from-black via-gray-900 to-white"
//       >
//         <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
//           <div
//             ref={phoneRef}
//             className="relative will-change-transform"
//             style={{
//               transform: "translate3d(0, 0, 0)",
//             }}
//           >
//             <CustomPhoneSVG>
//               <img
//                 src={imageSrc}
//                 alt={alt}
//                 className="w-full h-full object-cover"
//                 loading="lazy"
//                 decoding="async"
//                 style={{
//                   transform: "translate3d(0, 0, 0)",
//                 }}
//               />
//             </CustomPhoneSVG>
//             <div
//               className="glow-effect absolute inset-0 rounded-[3rem] bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-md will-change-opacity"
//               style={{
//                 opacity: 0,
//                 transition: "opacity 0.2s ease-out",
//               }}
//             />
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
import { useEffect, useRef, useCallback, useMemo } from "react";
import data from "../Model/data";

export default function AppleScrollHero({
  imageSrc = "https://images.unsplash.com/photo-1720415353460-957325a7267d?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  alt = "Premium Product",
  phoneSvg = data.iPhoneSVG,
  phoneWidth = 640,
  phoneHeight = 320,
  screenInset = 14,
}) {
  const animationSectionRef = useRef(null);
  const phoneRef = useRef(null);
  const rafId = useRef(null);
  const cachedRect = useRef(null);
  const resizeObserver = useRef(null);

  const scaleConfig = useMemo(() => {
    const getDeviceWidth = () => window.innerWidth;
    const deviceWidth = typeof window !== "undefined" ? getDeviceWidth() : 0;

    if (deviceWidth < 480) return { max: 2.2, min: 0.4 };
    if (deviceWidth < 768) return { max: 2.8, min: 0.7 };
    if (deviceWidth < 1024) return { max: 3.5, min: 1.0 };
    return { max: 4.0, min: 1.5 };
  }, []);

  const easingLookup = useMemo(() => {
    const lookup = new Map();
    for (let i = 0; i <= 100; i++) {
      const t = i / 100;
      lookup.set(i, 1 - Math.pow(1 - t, 3));
    }
    return lookup;
  }, []);

  const getEasing = useCallback(
    (progress) => {
      // Ensure index is within bounds [0, 100]
      const index = Math.round(progress * 100);
      return easingLookup.get(Math.min(100, Math.max(0, index))) || progress;
    },
    [easingLookup]
  );

  const updateCachedRect = useCallback(() => {
    if (animationSectionRef.current) {
      const rect = animationSectionRef.current.getBoundingClientRect();
      cachedRect.current = {
        height: animationSectionRef.current.offsetHeight,
        top: rect.top + window.scrollY,
      };
    }
  }, []);

  const updateScrollProgress = useCallback(() => {
    if (!phoneRef.current || !cachedRect.current) return;

    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;
    const sectionTop = cachedRect.current.top;
    const sectionHeight = cachedRect.current.height;

    const scrollTop = scrollY - sectionTop;

    const scrollableDistance = sectionHeight - viewportHeight;

    let progress = 0;
    if (scrollableDistance > 0) {
      progress = Math.min(1, Math.max(0, scrollTop / scrollableDistance));
    }

    const smoothProgress = getEasing(progress);

    const phoneScale =
      scaleConfig.max - smoothProgress * (scaleConfig.max - scaleConfig.min);

    phoneRef.current.style.transform = `translate3d(0, 0, 0) scale(${phoneScale})`;

    const glowElement = phoneRef.current.querySelector(".glow-effect");
    if (glowElement) {
      const newGlowOpacity = smoothProgress > 0.7 ? 0.5 : 0;

      if (parseFloat(glowElement.style.opacity) !== newGlowOpacity) {
        glowElement.style.opacity = newGlowOpacity.toString();
      }
    }
  }, [scaleConfig, getEasing]);

  const handleScroll = useCallback(() => {
    if (rafId.current === null) {
      rafId.current = requestAnimationFrame(() => {
        updateScrollProgress();
        rafId.current = null;
      });
    }
  }, [updateScrollProgress]);

  const handleResize = useCallback(() => {
    if (handleResize.timeoutId) {
      clearTimeout(handleResize.timeoutId);
    }
    handleResize.timeoutId = setTimeout(() => {
      updateCachedRect();
      updateScrollProgress();
    }, 150);
  }, [updateCachedRect, updateScrollProgress]);

  useEffect(() => {
    updateCachedRect();

    if (phoneRef.current) {
      phoneRef.current.style.transform = `translate3d(0, 0, 0) scale(${scaleConfig.max})`;
    }
    updateScrollProgress();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });

    if (
      animationSectionRef.current &&
      typeof window !== "undefined" &&
      "ResizeObserver" in window
    ) {
      resizeObserver.current = new ResizeObserver(updateCachedRect);
      resizeObserver.current.observe(animationSectionRef.current);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
      if (resizeObserver.current) {
        resizeObserver.current.disconnect();
      }
      if (handleResize.timeoutId) {
        clearTimeout(handleResize.timeoutId);
      }
    };
  }, [
    handleScroll,
    handleResize,
    updateCachedRect,
    updateScrollProgress,
    scaleConfig,
  ]);

  const CustomPhoneSVG = ({ children }) => {
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
          decoding="async"
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
  };

  return (
    <div className="relative">
      <section
        ref={animationSectionRef}
        className="relative min-h-[250vh] bg-gradient-to-b from-black via-gray-900 to-white"
        role="region"
        aria-label="Product Scroll Animation"
      >
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          <div
            ref={phoneRef}
            className="relative will-change-transform"
            style={{
              transform: `translate3d(0, 0, 0) scale(${scaleConfig.max})`,
            }}
          >
            <CustomPhoneSVG>
              <img
                src={imageSrc}
                alt={alt}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
                style={{
                  transform: "translate3d(0, 0, 0)",
                }}
              />
            </CustomPhoneSVG>
            <div
              className="glow-effect absolute inset-0 rounded-[3rem] bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-md will-change-opacity"
              style={{
                opacity: 0,
                transition: "opacity 0.2s ease-out",
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
