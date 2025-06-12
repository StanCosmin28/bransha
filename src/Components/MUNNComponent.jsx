// import SolarSystemComponent from "./SolarSystemComponent";

// export default function BuildingAutomation() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex flex-col lg:flex-row items-center justify-between p-4 sm:p-6 md:p-8 lg:p-12 overflow-hidden relative ">
//       <div className="max-w-7xl flex flex-row flex-1 justify-center items-center mx-auto">
//         {/* Animated Background Particles */}
//         <div className="absolute inset-0 pointer-events-none">
//           <div className="absolute w-2 h-2 bg-purple-400 rounded-full animate-pulse-slow opacity-50 top-1/4 left-1/4"></div>
//           <div className="absolute w-1 h-1 bg-lime-300 rounded-full animate-pulse-fast opacity-30 top-3/4 right-1/3"></div>
//           <div className="absolute w-3 h-3 bg-white rounded-full animate-pulse-slow opacity-20 bottom-1/3 left-2/3"></div>
//         </div>

//         {/* Left Text Section */}
//         <div className="text-white text-left max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg space-y-5 mb-6 md:mb-0 z-10">
//           <div className="flex flex-row justify-center items-center gap-4 h-30 ">
//             <svg
//               //   width="100"
//               height="43"
//               viewBox="0 0 100 23"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M12.1733 10.8582C12.1733 8.96312 11.9232 7.62081 11.4232 6.83121C10.9494 6.04161 10.1203 5.64681 8.93593 5.64681C8.56745 5.64681 8.18581 5.67313 7.79101 5.72577C7.39621 5.75209 7.01457 5.79157 6.6461 5.84421V21.873H0.763592V1.81726C1.26367 1.68567 1.84271 1.55407 2.50071 1.42247C3.18503 1.26455 3.89566 1.13295 4.63262 1.02767C5.3959 0.896067 6.17234 0.803946 6.96193 0.751307C7.75153 0.672347 8.52797 0.632867 9.29125 0.632867C10.7915 0.632867 12.0022 0.830267 12.9234 1.22507C13.8709 1.59355 14.6474 2.04098 15.2527 2.56738C16.0949 1.96202 17.0556 1.48827 18.1347 1.14611C19.2402 0.803946 20.2535 0.632867 21.1747 0.632867C22.8328 0.632867 24.1883 0.869746 25.2411 1.34351C26.3202 1.79094 27.1756 2.43578 27.8073 3.27802C28.439 4.12026 28.8733 5.12042 29.1102 6.27849C29.347 7.43657 29.4655 8.72624 29.4655 10.1475V21.873H23.583V10.8582C23.583 8.96312 23.3329 7.62081 22.8328 6.83121C22.3591 6.04161 21.53 5.64681 20.3456 5.64681C20.0298 5.64681 19.5823 5.72577 19.0033 5.88369C18.4506 6.04161 17.99 6.23901 17.6215 6.47589C17.8057 7.08125 17.9242 7.72609 17.9768 8.41041C18.0295 9.0684 18.0558 9.77904 18.0558 10.5423V21.873H12.1733V10.8582ZM52.5338 21.1624C51.5336 21.4519 50.2439 21.7151 48.6647 21.952C47.0855 22.2152 45.4274 22.3468 43.6903 22.3468C41.9268 22.3468 40.4529 22.1099 39.2685 21.6362C38.1104 21.1624 37.1892 20.5044 36.5049 19.6622C35.8206 18.7936 35.3337 17.7671 35.0442 16.5827C34.7546 15.3983 34.6099 14.0955 34.6099 12.6742V1.10663H40.4924V11.9636C40.4924 13.8586 40.7424 15.2273 41.2425 16.0695C41.7426 16.9117 42.6769 17.3329 44.0456 17.3329C44.4667 17.3329 44.9141 17.3197 45.3879 17.2934C45.8617 17.2407 46.2828 17.1881 46.6512 17.1355V1.10663H52.5338V21.1624ZM58.0557 1.81726C59.0558 1.52774 60.3455 1.26455 61.9247 1.02767C63.5039 0.764467 65.1621 0.632867 66.8992 0.632867C68.6626 0.632867 70.1234 0.869746 71.2815 1.34351C72.4658 1.79094 73.4002 2.43578 74.0845 3.27802C74.7688 4.12026 75.2558 5.12042 75.5453 6.27849C75.8348 7.43657 75.9796 8.72624 75.9796 10.1475V21.873H70.0971V10.8582C70.0971 8.96312 69.847 7.62081 69.3469 6.83121C68.8469 6.04161 67.9125 5.64681 66.5439 5.64681C66.1227 5.64681 65.6753 5.67313 65.2016 5.72577C64.7278 5.75209 64.3067 5.79157 63.9382 5.84421V21.873H58.0557V1.81726ZM81.3041 1.81726C82.3043 1.52774 83.5939 1.26455 85.1731 1.02767C86.7523 0.764467 88.4105 0.632867 90.1476 0.632867C91.911 0.632867 93.3718 0.869746 94.5299 1.34351C95.7143 1.79094 96.6486 2.43578 97.3329 3.27802C98.0173 4.12026 98.5042 5.12042 98.7937 6.27849C99.0832 7.43657 99.228 8.72624 99.228 10.1475V21.873H93.3455V10.8582C93.3455 8.96312 93.0954 7.62081 92.5954 6.83121C92.0953 6.04161 91.1609 5.64681 89.7923 5.64681C89.3712 5.64681 88.9237 5.67313 88.45 5.72577C87.9762 5.75209 87.5551 5.79157 87.1866 5.84421V21.873H81.3041V1.81726Z"
//                 fill="#9747FF"
//               />
//             </svg>
//             <div class="h-[80%] w-1 bg-purple-400"></div>
//             <h1 className="h-auto w-180 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-purple-400 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text animate-fade-in">
//               Asistentul tău personal în lumea BMS
//             </h1>
//           </div>
//           <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
//             Totul sub control, dintr-un singur loc. Munn îți conectează clădirea
//             printr-o interfață intuitivă, ușor de folosit, ordonată și de
//             încredere.
//           </p>
//           <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
//             Disponibil și în versiuni speciale pentru hoteluri și complexe
//             rezidențiale.
//           </p>
//           <button className="mt-4 px-6 py-2 bg-white text-black rounded-full text-xs sm:text-sm md:text-base lg:text-lg font-medium hover:bg-gray-100 hover:shadow-lg hover:scale-105 transition-all duration-300 transform-gpu">
//             Află mai multe
//           </button>
//         </div>

//         {/* Right Solar System Section */}
//         <div className="w-full md:w-1/2 flex justify-center z-10">
//           <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto">
//             {/* <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-lime-400/20 rounded-full blur-xl animate-pulse-slow opacity-50"></div> */}
//             <SolarSystemComponent />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// <style jsx>{`
//   @keyframes fade-in {
//     from {
//       opacity: 0;
//     }
//     to {
//       opacity: 1;
//     }
//   }
//   .animate-fade-in {
//     animation: fade-in 1s ease-out forwards;
//   }
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

import SolarSystemComponent from "./SolarSystemComponent";
import Particles from "./Particles";

export default function MUNNComponent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex flex-col lg:flex-row items-center justify-between p-4 sm:p-6 md:p-8 lg:p-12 overflow-hidden relative">
      <div className="max-w-7xl flex flex-col lg:flex-row flex-1 justify-center items-center mx-auto">
        {/* Animated Background Particles */}
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

        {/* Left Text Section */}
        <div className="text-white text-left max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg space-y-5 mb-6 lg:mb-0 z-10 order-1">
          <div className="flex flex-row justify-center items-center gap-4 h-30">
            <svg
              height="43"
              viewBox="0 0 100 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.1733 10.8582C12.1733 8.96312 11.9232 7.62081 11.4232 6.83121C10.9494 6.04161 10.1203 5.64681 8.93593 5.64681C8.56745 5.64681 8.18581 5.67313 7.79101 5.72577C7.39621 5.75209 7.01457 5.79157 6.6461 5.84421V21.873H0.763592V1.81726C1.26367 1.68567 1.84271 1.55407 2.50071 1.42247C3.18503 1.26455 3.89566 1.13295 4.63262 1.02767C5.3959 0.896067 6.17234 0.803946 6.96193 0.751307C7.75153 0.672347 8.52797 0.632867 9.29125 0.632867C10.7915 0.632867 12.0022 0.830267 12.9234 1.22507C13.8709 1.59355 14.6474 2.04098 15.2527 2.56738C16.0949 1.96202 17.0556 1.48827 18.1347 1.14611C19.2402 0.803946 20.2535 0.632867 21.1747 0.632867C22.8328 0.632867 24.1883 0.869746 25.2411 1.34351C26.3202 1.79094 27.1756 2.43578 27.8073 3.27802C28.439 4.12026 28.8733 5.12042 29.1102 6.27849C29.347 7.43657 29.4655 8.72624 29.4655 10.1475V21.873H23.583V10.8582C23.583 8.96312 23.3329 7.62081 22.8328 6.83121C22.3591 6.04161 21.53 5.64681 20.3456 5.64681C20.0298 5.64681 19.5823 5.72577 19.0033 5.88369C18.4506 6.04161 17.99 6.23901 17.6215 6.47589C17.8057 7.08125 17.9242 7.72609 17.9768 8.41041C18.0295 9.0684 18.0558 9.77904 18.0558 10.5423V21.873H12.1733V10.8582ZM52.5338 21.1624C51.5336 21.4519 50.2439 21.7151 48.6647 21.952C47.0855 22.2152 45.4274 22.3468 43.6903 22.3468C41.9268 22.3468 40.4529 22.1099 39.2685 21.6362C38.1104 21.1624 37.1892 20.5044 36.5049 19.6622C35.8206 18.7936 35.3337 17.7671 35.0442 16.5827C34.7546 15.3983 34.6099 14.0955 34.6099 12.6742V1.10663H40.4924V11.9636C40.4924 13.8586 40.7424 15.2273 41.2425 16.0695C41.7426 16.9117 42.6769 17.3329 44.0456 17.3329C44.4667 17.3329 44.9141 17.3197 45.3879 17.2934C45.8617 17.2407 46.2828 17.1881 46.6512 17.1355V1.10663H52.5338V21.1624ZM58.0557 1.81726C59.0558 1.52774 60.3455 1.26455 61.9247 1.02767C63.5039 0.764467 65.1621 0.632867 66.8992 0.632867C68.6626 0.632867 70.1234 0.869746 71.2815 1.34351C72.4658 1.79094 73.4002 2.43578 74.0845 3.27802C74.7688 4.12026 75.2558 5.12042 75.5453 6.27849C75.8348 7.43657 75.9796 8.72624 75.9796 10.1475V21.873H70.0971V10.8582C70.0971 8.96312 69.847 7.62081 69.3469 6.83121C68.8469 6.04161 67.9125 5.64681 66.5439 5.64681C66.1227 5.64681 65.6753 5.67313 65.2016 5.72577C64.7278 5.75209 64.3067 5.79157 63.9382 5.84421V21.873H58.0557V1.81726ZM81.3041 1.81726C82.3043 1.52774 83.5939 1.26455 85.1731 1.02767C86.7523 0.764467 88.4105 0.632867 90.1476 0.632867C91.911 0.632867 93.3718 0.869746 94.5299 1.34351C95.7143 1.79094 96.6486 2.43578 97.3329 3.27802C98.0173 4.12026 98.5042 5.12042 98.7937 6.27849C99.0832 7.43657 99.228 8.72624 99.228 10.1475V21.873H93.3455V10.8582C93.3455 8.96312 93.0954 7.62081 92.5954 6.83121C92.0953 6.04161 91.1609 5.64681 89.7923 5.64681C89.3712 5.64681 88.9237 5.67313 88.45 5.72577C87.9762 5.75209 87.5551 5.79157 87.1866 5.84421V21.873H81.3041V1.81726Z"
                fill="#9747FF"
              />
            </svg>
            <div className="h-[70%] w-1 bg-purple-400"></div>
            <h1 className="w-180 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-purple-400 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text">
              Asistentul tău personal în lumea BMS
            </h1>
          </div>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
            Totul sub control, dintr-un singur loc. Munn îți conectează clădirea
            printr-o interfață intuitivă, ușor de folosit, ordonată și de
            încredere.
          </p>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
            Disponibil și în versiuni speciale pentru hoteluri și complexe
            rezidențiale.
          </p>
          <button className="cursor-pointer mt-4 px-6 py-2 bg-white text-black rounded-full text-xs sm:text-sm md:text-base lg:text-lg font-medium hover:bg-gray-100 hover:shadow-lg hover:scale-105 transition-all duration-300 transform-gpu">
            Află mai multe
          </button>
        </div>

        {/* Right Solar System Section */}
        <div className="w-full lg:w-1/2 flex justify-center order-2 lg:order-2 z-10">
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto">
            <SolarSystemComponent />
          </div>
        </div>
      </div>
    </div>
  );
}

<style jsx>{`
  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  .animate-fade-in {
    animation: fade-in 1s ease-out forwards;
  }
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
