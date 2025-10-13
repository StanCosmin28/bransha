import { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { StarsBackground } from "./StarsBackground";
// import Aurora from "./Aurora";
// import Particles from "./Particles";

export function ContainerScroll({ titleComponent, children }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      className="h-[40rem] sm:h-[50rem] md:h-[80rem] flex items-center justify-center relative p-2 md:p-20"
      ref={containerRef}
    >
      <div
        className="py-10 md:py-40 w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
}

const Header = ({ translate, titleComponent }) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

export function Card({ rotate, scale, children }) {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="max-w-5xl -mt-12 mx-auto xs:h-[15rem] sm:h-[30rem] md:h-[35rem] lg:h-[45rem] w-full border-4 border-[#6C6C6C] p-2 md:p-6 bg-[#222222] rounded-[30px] shadow-2xl"
    >
      <div className="h-full w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900 md:rounded-2xl md:p-4">
        {children}
      </div>
    </motion.div>
  );
}

// Demo component showing how to use ContainerScroll
export default function HeroScrollDemo() {
  return (
    // <div className="flex flex-col overflow-hidden relative">
    <div className="flex flex-col bg-gradient-to-bl from-black/10 via-gray-900 to-black overflow-hidden relative">
      <div className="absolute inset-0 w-full h-full z-[-10]">
        <img
          src="/aurora_bg.gif"
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
          decoding="async"
        />
      </div>
      {/* Styles Background */}
      <div className="absolute inset-0 pointer-events-none z-100">
        <div className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-50 top-1/4 left-1/4"></div>
        <div className="absolute w-1 h-1 bg-lime-300 rounded-full opacity-30 top-3/4 right-1/3"></div>
        <div className="absolute w-3 h-3 bg-white rounded-full opacity-20 bottom-1/3 left-2/3"></div>
        <StarsBackground />
      </div>
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white ">
              {/* Unleash the power of <br /> */}
              {"Control total".toUpperCase()} <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                {/* MUNN Smart Home */}
                {"Direct din Palmă".toUpperCase()}
              </span>
            </h1>
          </>
        }
      >
        <img
          src="/munn-app.jpeg"
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-top z-100"
          draggable={false}
        />
      </ContainerScroll>
      <h2 className="absolute lg:bottom-20 left-1/2 -translate-x-1/2 -translate-y-1/2 bottom-16 text-sm font-semibold w-[85%] max-w-md md:text-2xl lg:max-w-2xl xl:text-3xl xl:max-w-4xl">
        Monitorizează și gestionează toate sistemele clădirii rapid și simplu,
        oriunde te afli, totul la un singur touch.
      </h2>
    </div>
  );
}
