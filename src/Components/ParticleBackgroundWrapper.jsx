// import Particles from "./Particles";

// export default function ParticleBackgroundWrapper({ children }) {
//   return (
//     <div className="min-h-screen bg-gradient-to-bl from-black via-gray-900 to-black overflow-hidden relative">
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute w-2 h-2 bg-purple-400 rounded-full animate-pulse-slow opacity-50 top-1/4 left-1/4"></div>
//         <div className="absolute w-1 h-1 bg-lime-300 rounded-full animate-pulse-fast opacity-30 top-3/4 right-1/3"></div>
//         <div className="absolute w-3 h-3 bg-white rounded-full animate-pulse-slow opacity-20 bottom-1/3 left-2/3"></div>
//         <Particles
//           particleColors={["#ffffff", "#ffffff"]}
//           particleCount={200}
//           particleSpread={10}
//           speed={0.1}
//           particleBaseSize={100}
//           moveParticlesOnHover={true}
//           alphaParticles={false}
//           disableRotation={false}
//         />
//       </div>
//       {children}
//     </div>
//   );
// }

// <style jsx>{`
//   @keyframes pulse-slow {
//     0%,
//     100% {
//       transform: scale(1);
//     }
//     50% {
//       transform: scale(1.2);
//     }
//   }
//   .animate-pulse-slow {
//     animation: pulse-slow 4s infinite;
//   }
//   @keyframes pulse-fast {
//     0%,
//     100% {
//       transform: scale(1);
//     }
//     50% {
//       transform: scale(1.5);
//     }
//   }
//   .animate-pulse-fast {
//     animation: pulse-fast 2s infinite;
//   }
// `}</style>;
