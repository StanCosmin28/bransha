import { useState, useEffect, useRef, useCallback } from "react";
import gsap from "gsap";

export default function LoadingWrapper({ children, timeoutMs = 30000 }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef(0);
  const rafRef = useRef(null);
  const startTimeRef = useRef(Date.now());
  const transitionEndTimeoutRef = useRef(null);
  const logoRef = useRef(null);
  const progressTextRef = useRef(null);
  const bgRef = useRef(null);

  const easeInOutCubic = useCallback((t) => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }, []);

  const updateProgressAnimation = useCallback(() => {
    if (!isLoading || isExiting) return;

    const elapsed = Date.now() - startTimeRef.current;
    const rawTargetProgress = Math.min(elapsed / timeoutMs, 1);
    const easedTargetProgress = easeInOutCubic(rawTargetProgress);

    progressRef.current += (easedTargetProgress - progressRef.current) * 0.05;
    if (progressRef.current < 0.001 && rawTargetProgress > 0) {
      progressRef.current = 0.001;
    }

    setProgress(Math.min(100, progressRef.current * 100));

    if (progressRef.current < 0.999) {
      rafRef.current = requestAnimationFrame(updateProgressAnimation);
    } else {
      setProgress(100);
      setTimeout(() => setIsExiting(true), 200);
    }
  }, [isLoading, isExiting, timeoutMs, easeInOutCubic]);

  const handleLoadingCompletion = useCallback(() => {
    if (!isExiting && isLoading) {
      if (progressRef.current < 1) {
        progressRef.current = 1;
        setProgress(100);
      }
      setTimeout(() => setIsExiting(true), 200);
    }
  }, [isExiting, isLoading]);

  useEffect(() => {
    let loadTimeoutId;
    rafRef.current = requestAnimationFrame(updateProgressAnimation);

    if (document.readyState === "complete") {
      handleLoadingCompletion();
    } else {
      window.addEventListener("load", handleLoadingCompletion, { once: true });
    }

    loadTimeoutId = setTimeout(handleLoadingCompletion, timeoutMs);

    return () => {
      window.removeEventListener("load", handleLoadingCompletion);
      clearTimeout(loadTimeoutId);
      clearTimeout(transitionEndTimeoutRef.current);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [timeoutMs, updateProgressAnimation, handleLoadingCompletion]);

  useEffect(() => {
    if (isExiting) {
      gsap.to([logoRef.current, progressTextRef.current], {
        opacity: 0,
        scale: 0.95,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2,
      });
      gsap.to(bgRef.current, {
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
        onComplete: () => setIsLoading(false),
      });
    } else {
      gsap.fromTo(
        logoRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1, ease: "power2.out", delay: 0.2 }
      );
      gsap.fromTo(
        progressTextRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 0.4 }
      );
    }
  }, [isExiting]);

  useEffect(() => {
    const prefetchResources = () => {
      document.querySelectorAll("img").forEach((img) => {
        const src = img.getAttribute("data-src") || img.src;
        if (src) {
          const tempImg = new Image();
          tempImg.src = src;
        }
      });

      if (document.fonts) {
        const interFont = new FontFace("Inter", "url(/fonts/inter.woff2)");
        interFont
          .load()
          .then(() => document.fonts.add(interFont))
          .catch(() => {});
      }
    };
    prefetchResources();
  }, []);

  if (isLoading) {
    return (
      <>
        <div
          ref={bgRef}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-900 to-black transition-opacity duration-1500 ease-in-out will-change-opacity"
          role="alert"
          aria-live="polite"
          aria-label="Loading Smart Home Interface, please wait"
        >
          {/* Subtle Particle Background */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)`,
                animation: "pulse-bg 8s ease-in-out infinite",
              }}
            />
          </div>

          {/* Logo and Progress */}
          <div className="relative z-10 flex flex-col items-center">
            <h1
              ref={logoRef}
              className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600"
              style={{
                fontFamily: "'Inter', sans-serif",
              }}
            >
              BRANSHA
            </h1>
            <p
              ref={progressTextRef}
              className="mt-4 text-lg md:text-xl text-purple-400 font-medium"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Initializing... {Math.round(progress)}%
            </p>
          </div>
        </div>
        <div className="fixed inset-0 z-40" style={{ visibility: "hidden" }}>
          {children}
        </div>
        <style jsx>{`
          @keyframes pulse-bg {
            0%,
            100% {
              opacity: 0.1;
            }
            50% {
              opacity: 0.15;
            }
          }
          @keyframes pulse-slow {
            0%,
            100% {
              opacity: 0.8;
            }
            50% {
              opacity: 1;
            }
          }
        `}</style>
      </>
    );
  }

  return <>{children}</>;
}
