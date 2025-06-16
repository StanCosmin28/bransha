import data from "../Model/data";
import { useEffect, useRef, useCallback } from "react";

export default function AppleScrollHero({
  //   imageSrc = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  imageSrc = "https://images.unsplash.com/photo-1720415353460-957325a7267d?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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

    // const widthVar =
    //   deviceWidth < 540
    //     ? 7.6
    //     : deviceWidth < 768
    //     ? 7.2
    //     : deviceWidth < 1024
    //     ? 6.9
    //     : deviceWidth < 1300
    //     ? 6.5
    //     : 6;

    // const phoneScale = 8 - smoothProgress * widthVar;
    const maxScale =
      deviceWidth < 540
        ? 3.5
        : deviceWidth < 768
        ? 4
        : deviceWidth < 1024
        ? 4.5
        : deviceWidth < 1300
        ? 5
        : 5.5;

    const scaleReduction =
      deviceWidth < 540
        ? 0.5
        : deviceWidth < 768
        ? 0.8
        : deviceWidth < 1024
        ? 1.1
        : deviceWidth < 1300
        ? 1.4
        : 1.7;

    const phoneScale = maxScale - smoothProgress * (maxScale - scaleReduction);

    // console.log(widthVar, phoneScale);
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
    // if (typeof !phoneSvg === "string") {
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
    // }
    // return (
    //   <div
    //     className="relative bg-gradient-to-br from-gray-800 to-black rounded-[3rem] p-2 shadow-xl"
    //     style={{ width: phoneWidth, height: phoneHeight }}
    //   >
    //     <div className="w-full h-full bg-black rounded-[2.5rem] p-1">
    //       <div className="relative w-full h-full bg-black rounded-[2.2rem] overflow-hidden">
    //         {children}
    //         <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
    //       </div>
    //     </div>
    //     <div className="absolute -left-1 top-16 w-1 h-12 bg-gray-700 rounded-full" />
    //     <div className="absolute -right-1 top-24 w-1 h-16 bg-gray-700 rounded-full" />
    //     <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-600 rounded-full opacity-30" />
    //   </div>
    // );
  };

  return (
    <div ref={containerRef} className="relative">
      <section
        ref={animationSectionRef}
        className="relative h-[350vh] bg-gradient-to-b from-black via-gray-900 to-white"
      >
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          <div
            ref={phoneRef}
            className="relative"
            style={{
              //   transform: "translate3d(0, 0, 0) scale(7)",
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
                // loading="lazy"
                className="w-full h-full object-cover"
                style={{
                  transform: "translate3d(0, 0, 0)",
                  willChange: "transform",
                }}
              />
            </CustomPhoneSVG>
            {/* <div className="opacity-75 text-[8px] xl:text-lg absolute top-35 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black font-black ">
              BRANSHA
            </div> */}
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
