import { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Aurora from "./Aurora";
import data from "../Model/data";
import Particles from "./Particles";

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
      className="h-[60rem] md:h-[80rem] flex items-center justify-center relative p-2 md:p-20"
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
    <div className="flex flex-col min-h-screen bg-gradient-to-bl from-black via-gray-900 to-black overflow-hidden relative">
      <Aurora
        // colorStops={["#DCFC00", "#DCFC00", "#DCFC00"]}
        colorStops={["#9747FF", "#9747FF", "#9747FF"]}
        blend={1}
        amplitude={1}
        speed={0.5}
      />
      {/* Styles Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-2 h-2 bg-purple-400 rounded-full animate-pulse-slow opacity-50 top-1/4 left-1/4"></div>
        <div className="absolute w-1 h-1 bg-lime-300 rounded-full animate-pulse-fast opacity-30 top-3/4 right-1/3"></div>
        <div className="absolute w-3 h-3 bg-white rounded-full animate-pulse-slow opacity-20 bottom-1/3 left-2/3"></div>
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              {/* Unleash the power of <br /> */}
              {"Control total".toUpperCase()} <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                {/* Scroll Animations  */}
                {/* MUNN Smart Home */}
                {"Direct din Palmă".toUpperCase()}
              </span>
            </h1>
          </>
        }
      >
        <img
          src={data.tabletImg}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-top z-100"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}

<style jsx>{`
  @keyframes pulse-slow {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
  }
  .animate-pulse-slow {
    animation: pulse-slow 4s infinite;
  }
  @keyframes pulse-fast {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.5);
    }
  }
  .animate-pulse-fast {
    animation: pulse-fast 2s infinite;
  }
`}</style>;

// import { useRef, useState, useEffect } from "react";
// import { useScroll, useTransform, motion } from "framer-motion";

// function ContainerScroll({ titleComponent, children }) {
//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//   });
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };
//     checkMobile();
//     window.addEventListener("resize", checkMobile);
//     return () => {
//       window.removeEventListener("resize", checkMobile);
//     };
//   }, []);

//   const scaleDimensions = () => {
//     return isMobile ? [0.7, 0.9] : [1.05, 1];
//   };

//   const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
//   const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
//   const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

//   return (
//     <div
//       className="h-[60rem] md:h-[80rem] flex items-center justify-center relative p-2 md:p-20"
//       ref={containerRef}
//     >
//       <div
//         className="py-10 md:py-40 w-full relative"
//         style={{
//           perspective: "1000px",
//         }}
//       >
//         <Header translate={translate} titleComponent={titleComponent} />
//         <Card rotate={rotate} translate={translate} scale={scale}>
//           {children}
//         </Card>
//       </div>
//     </div>
//   );
// }

// function Header({ translate, titleComponent }) {
//   return (
//     <motion.div
//       style={{
//         translateY: translate,
//       }}
//       className="max-w-5xl mx-auto text-center"
//     >
//       {titleComponent}
//     </motion.div>
//   );
// }

// function Card({ rotate, scale, translate, children }) {
//   return (
//     <motion.div
//       style={{
//         rotateX: rotate,
//         scale,
//         translateY: translate,
//         boxShadow:
//           "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
//       }}
//       className="max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full border-4 border-[#6C6C6C] p-2 md:p-6 bg-[#222222] rounded-[30px] shadow-2xl"
//     >
//       <div className="h-full w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900 md:rounded-2xl md:p-4">
//         {children}
//       </div>
//     </motion.div>
//   );
// }

// export default function HeroScrollDemo() {
//   return (
//     <div className="flex flex-col overflow-hidden bg-gray-50 dark:bg-gray-900 min-h-screen">
//       <ContainerScroll
//         titleComponent={
//           <div className="text-center">
//             <h1 className="text-4xl font-semibold text-black dark:text-white">
//               Unleash the power of <br />
//               <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
//                 Scroll Animations
//               </span>
//             </h1>
//           </div>
//         }
//       >
//         <img
//           src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=3520&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           alt="hero"
//           height={720}
//           width={1400}
//           className="mx-auto rounded-2xl object-cover h-full w-full object-left-top"
//           draggable={false}
//         />
//       </ContainerScroll>
//     </div>
//   );
// }
