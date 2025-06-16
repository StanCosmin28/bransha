import data from "../Model/data";
import { useEffect, useRef, useCallback } from "react";

export default function AppleScrollHero({
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

    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
    const smoothProgress = easeOutCubic(progress);
    progressRef.current = smoothProgress;

    const deviceWidth = window.innerWidth;

    const maxScale =
      deviceWidth < 540
        ? 2.8
        : deviceWidth < 768
        ? 3.2
        : deviceWidth < 1024
        ? 3.8
        : deviceWidth < 1300
        ? 4.2
        : 4.5;

    const minScale =
      deviceWidth < 540
        ? 0.8
        : deviceWidth < 768
        ? 1.1
        : deviceWidth < 1024
        ? 1.4
        : deviceWidth < 1300
        ? 1.7
        : 2;

    const phoneScale = maxScale - smoothProgress * (maxScale - minScale);

    phoneRef.current.style.transform = `translate3d(0, 0, 0) scale(${phoneScale})`;
  }, []);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          updateScrollProgress();
          ticking = false;
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [updateScrollProgress]);

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
    <div ref={containerRef} className="relative">
      <section
        ref={animationSectionRef}
        className="relative h-[250vh] bg-gradient-to-b from-black via-gray-900 to-white"
      >
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          <div
            ref={phoneRef}
            className="relative"
            style={{
              transform: "translate3d(0, 0, 0)",
            }}
          >
            <CustomPhoneSVG>
              <img
                src={imageSrc}
                alt={alt}
                className="w-full h-full object-cover"
                style={{
                  transform: "translate3d(0, 0, 0)",
                }}
              />
            </CustomPhoneSVG>
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