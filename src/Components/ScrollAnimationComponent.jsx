import { useState, useEffect, useRef } from "react";

export default function ScrollAnimationComponent() {
  const [visibleRectangles, setVisibleRectangles] = useState(new Set());
  const [isLeftFixed, setIsLeftFixed] = useState(false);
  const sectionRef = useRef(null);
  const leftZoneRef = useRef(null);
  const rightRectRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -20% 0px",
      threshold: [0, 0.25, 0.5, 0.75, 1],
    };

    // Observer for the main section to control left zone fixing
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsLeftFixed(entry.isIntersecting && entry.intersectionRatio > 0.1);
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: [0, 0.1, 0.9, 1],
      }
    );

    // Observer for right rectangles
    const rectangleObserver = new IntersectionObserver((entries) => {
      setVisibleRectangles((prev) => {
        const newVisible = new Set(prev);
        entries.forEach((entry) => {
          const index = parseInt(entry.target.dataset.index);
          if (entry.isIntersecting) {
            newVisible.add(index);
          } else {
            newVisible.delete(index);
          }
        });
        return newVisible;
      });
    }, observerOptions);

    // Observe section
    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }

    // Observe right rectangles
    rightRectRefs.current.forEach((ref) => {
      if (ref) {
        rectangleObserver.observe(ref);
      }
    });

    return () => {
      sectionObserver.disconnect();
      rectangleObserver.disconnect();
    };
  }, []);

  const rectangleData = [
    {
      title: "DESCRIPTION",
      description: "Cutting-edge solutions for modern challenges",
      color: "bg-black",
    },
    {
      title: "Innovation",
      description: "Cutting-edge solutions for modern challenges",
      color: "bg-blue-500",
    },
    {
      title: "Design",
      description: "Beautiful and functional user experiences",
      color: "bg-purple-500",
    },
    {
      title: "Development",
      description: "Robust and scalable applications",
      color: "bg-green-500",
    },
    {
      title: "Success",
      description: "Delivering results that exceed expectations",
      color: "bg-orange-500",
    },
  ];

  return (
    <div className="scroll-snap-container">
      {/* Spacer before section */}
      {/* <div className="h-screen bg-gray-100 flex items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
          Scroll Down to Begin
        </h1>
      </div> */}

      {/* Main animated section */}
      <section
        ref={sectionRef}
        className="min-h-[200vh] relative scroll-snap-start bg-white"
      >
        {/* Left Zone - Fixed Rectangle */}
        <div
          className={`
                            ${isLeftFixed ? "fixed" : "absolute"} 
                            top-1/2 left-4 md:left-8 lg:left-16 
                            transform -translate-y-1/2 
                            w-72 md:w-80 lg:w-96 h-64 md:h-72 lg:h-80
                            transition-all duration-700 ease-out
                            ${
                              isLeftFixed
                                ? "opacity-100 scale-100"
                                : "opacity-0 scale-95"
                            }
                            z-10
                        `}
        >
          <div className="w-full h-full bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl shadow-2xl p-6 md:p-8 flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              Our Journey
            </h2>
            <p className="text-indigo-100 text-sm md:text-base lg:text-lg leading-relaxed">
              Experience the evolution of our story through interactive elements
              that come alive as you explore our timeline.
            </p>
            <div className="mt-6 w-12 h-1 bg-white rounded-full"></div>
          </div>
        </div>

        {/* Right Zone - Animated Rectangles */}
        <div className="absolute right-4 md:right-8 lg:right-16 top-0 w-72 md:w-80 lg:w-96 h-full flex flex-col justify-center space-y-8 md:space-y-12">
          {rectangleData.map((item, index) => (
            <div
              key={index}
              ref={(el) => (rightRectRefs.current[index] = el)}
              data-index={index}
              className={`
                                        w-full h-48 md:h-56 lg:h-64 rounded-2xl shadow-xl p-6 md:p-8
                                        transition-all duration-700 ease-out transform
                                        ${
                                          visibleRectangles.has(index)
                                            ? "opacity-100 translate-x-0 scale-100"
                                            : "opacity-0 translate-x-8 scale-95"
                                        }
                                        ${item.color} text-white
                                        hover:scale-105 hover:shadow-2xl
                                        cursor-pointer
                                    `}
              style={{
                transitionDelay: visibleRectangles.has(index)
                  ? `${index * 100}ms`
                  : "0ms",
              }}
            >
              <div className="h-full flex flex-col justify-center">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base opacity-90 leading-relaxed">
                  {item.description}
                </p>
                <div className="mt-4 md:mt-6 flex items-center">
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold">{index + 1}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Progress indicator */}
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex space-x-2">
            {rectangleData.map((_, index) => (
              <div
                key={index}
                className={`
                                            w-2 h-2 rounded-full transition-all duration-300
                                            ${
                                              visibleRectangles.has(index)
                                                ? "bg-indigo-600 scale-125"
                                                : "bg-gray-300"
                                            }
                                        `}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Spacer after section */}
      {/* <div className="h-screen bg-gray-100 flex items-center justify-center scroll-snap-end">
        <h2 className="text-4xl md:text-6xl font-bold text-gray-800">
          End of Journey
        </h2>
      </div> */}
    </div>
  );
}
