import { useEffect, useRef, useCallback, useMemo } from "react";
import { StarsBackground } from "./StarsBackground";

export default function AppleScrollHero({
  // imageSrc = "https://images.unsplash.com/photo-1720415353460-957325a7267d?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  imageSrc = "/bg-phone-final2.webp",
  alt = "Premium Product",
  phoneSvg = "/iphone_16.svg",
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

    if (deviceWidth < 480) return { max: 4, min: 0.4 };
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
        {/* Product image first */}
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
        {/* Phone SVG last to appear in front */}
        <img
          src={phoneSvg}
          alt="Phone"
          className="absolute w-full h-full top-0 left-0"
          loading="lazy"
          decoding="async"
        />
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
          <StarsBackground />
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
