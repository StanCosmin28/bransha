import { useState, useEffect, useRef } from "react";

export default function LoadingWrapper({ children, timeoutMs = 3000 }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef(0);
  const rafRef = useRef(null);
  const startTimeRef = useRef(Date.now());
  const contentRef = useRef(null);

  useEffect(() => {
    let timeoutId;

    const updateProgress = () => {
      if (isLoading && !isExiting) {
        const elapsed = Date.now() - startTimeRef.current;
        const targetProgress = Math.min((elapsed / timeoutMs) * 100, 100);

        // Smooth easing function
        const easeOutQuad = (t) => t * (2 - t);
        progressRef.current +=
          (targetProgress - progressRef.current) * easeOutQuad(0.1);
        setProgress(progressRef.current);

        if (progressRef.current < 99.9) {
          rafRef.current = requestAnimationFrame(updateProgress);
        } else {
          setProgress(100);
          setTimeout(() => {
            setIsExiting(true);
            setTimeout(() => setIsLoading(false), 1200); // Sync with burst animation
          }, 300);
        }
      }
    };

    const handleLoad = () => {
      const elapsed = Date.now() - startTimeRef.current;
      const remainingTime = Math.max(0, timeoutMs - elapsed);
      timeoutId = setTimeout(() => {
        if (progressRef.current < 100) {
          progressRef.current = 100;
          setProgress(100);
        }
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(() => setIsLoading(false), 1200);
        }, 300);
      }, remainingTime);
    };

    // Prefetch critical resources
    const prefetchResources = () => {
      const images = document.querySelectorAll("img");
      images.forEach((img) => {
        const src = img.getAttribute("data-src") || img.src;
        if (src) new Image().src = src;
      });
      // Add font preloading if needed
      const font = new FontFace("Inter", "url(/fonts/inter.woff2)");
      font.load().catch(() => {});
    };
    prefetchResources();

    rafRef.current = requestAnimationFrame(updateProgress);
    if (document.readyState === "complete") handleLoad();
    else window.addEventListener("load", handleLoad, { once: true });
    timeoutId = setTimeout(handleLoad, timeoutMs);

    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(timeoutId);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [timeoutMs]);

  if (isLoading) {
    return (
      <>
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-black via-gray-950 to-black transition-all duration-1000 ${
            isExiting ? "opacity-0 scale-110" : "opacity-100 scale-100"
          }`}
          role="alert"
          aria-live="polite"
          aria-label="Loading BRANSHA application, please wait"
        >
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px)`,
                backgroundSize: "40px 40px",
                animation: "grid-float 15s linear infinite",
              }}
            />
          </div>

          {/* Main Content */}
          <div
            className={`relative z-10 text-center transition-all duration-1000 ${
              isExiting ? "scale-110 opacity-0" : "scale-100 opacity-100"
            }`}
          >
            {/* Glitchy BRANSHA Logo */}
            <div className="relative mb-12">
              <h1
                className="text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600/80 via-purple-600/80 to-pink-600/80 animate-glitch"
                style={{
                  textShadow:
                    progress > 90 ? "0 0 20px rgba(59, 130, 246, 0.6)" : "none",
                }}
              >
                BRANSHA
              </h1>
              <h1
                className="absolute inset-0 text-6xl md:text-8xl font-extrabold text-red-500/30 opacity-0 animate-glitch-overlay"
                style={{
                  transform: `translate(${(Math.random() - 0.5) * 3}px, ${
                    (Math.random() - 0.5) * 3
                  }px)`,
                  clipPath: "inset(0 0 70% 0)",
                }}
              >
                BRANSHA
              </h1>
            </div>

            {/* Sleek Progress Bar */}
            <div className="relative w-80 md:w-96 mx-auto">
              <div className="h-2 bg-gray-900/60 rounded-full overflow-hidden border border-gray-800/50 backdrop-blur-sm">
                <div
                  className="h-full bg-gradient-to-r from-blue-600/70 via-purple-600/70 to-pink-600/70 transition-all duration-300 ease-out relative overflow-hidden"
                  style={{ width: `${progress}%` }}
                >
                  {/* Holographic Shimmer */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer-holo" />
                </div>
              </div>
            </div>

            {/* Radial Burst on Exit */}
            {isExiting && (
              <div className="absolute inset-0 pointer-events-none">
                <div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-pink-600/30 animate-radial-burst"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(59,130,246,0.3) 0%, rgba(147,51,234,0.3) 70%, transparent 100%)",
                  }}
                />
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-3 h-3 bg-gradient-to-r from-blue-600/50 to-purple-600/50 rounded-full animate-particle-burst"
                    style={{
                      left: "50%",
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                      animationDelay: `${i * 0.05}s`,
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Hidden Content Preload */}
        <div
          ref={contentRef}
          className="fixed inset-0 z-40 visibility-hidden"
          style={{ visibility: "hidden" }}
        >
          {children}
        </div>
      </>
    );
  }

  return <>{children}</>;
}
