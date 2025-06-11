import { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

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
      className="max-w-5xl -mt-12 mx-auto xs:h-[15rem] sm:h-[30rem] md:h-[35rem] lg:h-[40rem] w-full border-4 border-[#6C6C6C] p-2 md:p-6 bg-[#222222] rounded-[30px] shadow-2xl"
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
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Unleash the power of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                {/* Scroll Animations  */}
                MUNN Smart Home
              </span>
            </h1>
          </>
        }
      >
        <img
          src="https://i.pinimg.com/736x/4d/36/da/4d36da974cd5440932bbfd828dabe196.jpg"
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top z-100"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}

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
