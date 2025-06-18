import {
  Power,
  BarChart3,
  Settings,
  Rocket,
  Star,
  Moon,
  Globe,
} from "lucide-react";
import data from "../Model/data";
import "../App.css";

export default function SolarSystemComponent() {
  const orbitalRings = [
    {
      radius: 100,
      items: [
        { icon: Power, angle: 0, text: "Power test" },
        { icon: BarChart3, angle: 180, text: "Analytics test" },
      ],
      duration: 20,
    },
    {
      radius: 160,
      items: [
        { icon: Settings, angle: 0, text: "Settings test" },
        { icon: Rocket, angle: 120, text: "Launch test" },
        { icon: Star, angle: 240, text: "Star test" },
      ],
      duration: 30,
    },
    {
      radius: 220,
      items: [
        { icon: Moon, angle: 0, text: "Moon test" },
        { icon: Globe, angle: 180, text: "Globe test" },
        { icon: BarChart3, angle: 280, text: "Analytics test" },
      ],
      duration: 40,
    },
  ];

  // const OrbitItem = ({ icon: Icon, radius, angle, duration, text }) => {
  //   return (
  //     <div
  //       className="absolute w-12 h-12 flex items-center justify-center border-4 border-white rounded-full overflow-hidden"
  //       style={{
  //         transform: `translate(-50%, -50%)`,
  //         left: "50%",
  //         top: "50%",
  //         animation: `orbit-${radius}-${angle} ${duration}s linear infinite`,
  //       }}
  //     >
  //       <div className="w-12 h-12 bg-[#DCFC00] rounded-full shadow-lg flex items-center justify-center border border-gray-200 hover:shadow-xl transition-shadow cursor-pointer gap-2">
  //         <Icon className="w-5 h-5 text-gray-700" />
  //         {/* <p className="text-xs text-gray-700 font-medium">{text}</p> */}
  //       </div>
  //     </div>
  //   );
  // };
  const OrbitItem = ({ icon: Icon, radius, angle, duration, text }) => {
    return (
      <div
        className="absolute flex items-center border-4 border-white rounded-full overflow-hidden transition-all duration-300 ease-in-out w-12 h-12 hover:w-fit group"
        style={{
          transform: `translate(-50%, -50%)`,
          transformOrigin: "left",
          left: "50%",
          top: "50%",
          animation: `orbit-${radius}-${angle} ${duration}s linear infinite`,
        }}
      >
        <div
          className="orbit-item-class h-full bg-[#DCFC00] rounded-full shadow-lg flex items-center border border-gray-200 hover:shadow-xl cursor-pointer transition-all duration-300 ease-in-out"
          style={{
            width: "48px",
            transitionProperty: "width, box-shadow",
          }}
        >
          <div className="orbit-item-class flex items-center w-full h-full">
            {/* Icon container: Always centered (justify-center, items-center), smooth transition */}
            <div className="orbit-item-class flex-shrink-0 w-10 h-10 flex items-center justify-center">
              <Icon className="w-5 h-5 text-gray-700 " />
            </div>
            {/* Text: Initially hidden, appears on hover to the right */}
            <p className="text-xs text-gray-700 font-medium hidden group-hover:block whitespace-nowrap pr-2">
              {text}
            </p>
          </div>
        </div>
        {/* Hover width extension */}
        <style jsx="true">{`
          .group:hover > .orbit-item-class {
            width: 135px !important; /* Fixed width for text + icon + padding */
          }
        `}</style>
      </div>
    );
  };

  const OrbitRing = ({ radius }) => (
    <div
      className="absolute border-2 border-gray-300 rounded-full opacity-30"
      style={{
        width: `${radius * 2}px`,
        height: `${radius * 2}px`,
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        // background: RGBA(174, 119, 247, 0),
        // background: radial-gradient(circle,rgba(174, 119, 247, 1) 1%, rgba(174, 119, 247, 0.5) 50%, rgba(0, 1, 71, 0.42) 100%)
      }}
    />
  );

  return (
    <div className="relative w-full flex items-center justify-center bg-transparent h-100 sm:h-100 md:h-150 scale-60 sm:scale-80 lg:scale-90 xl:scale-100 bg-test">
      <style>{`
        ${orbitalRings
          .map((ring) =>
            ring.items
              .map(
                (item) => `
          @keyframes orbit-${ring.radius}-${item.angle} {
            from {
              transform: translate(-50%, -50%) rotate(${
                item.angle
              }deg) translateX(${ring.radius}px) rotate(-${item.angle}deg);
            }
            to {
              transform: translate(-50%, -50%) rotate(${
                item.angle + 360
              }deg) translateX(${ring.radius}px) rotate(-${
                  item.angle + 360
                }deg);
            }
          }
        `
              )
              .join("")
          )
          .join("")}
      `}</style>
      <div className="relative w-full h-full max-w-6xl max-h-6xl">
        {/* Orbital Ring Guides */}
        {orbitalRings.map((ring, index) => (
          <OrbitRing key={index} radius={ring.radius} />
        ))}

        {/* Central Sun/Logo */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="w-24 h-24 bg-gradient-to-br  rounded-full shadow-2xl flex items-center justify-center">
            {/* from-lime-400 to-lime-500 */}
            {/* <Rocket size={36} className="text-white" /> */}
            <img src={data.munn} className="w-25 h-25 text-white" alt="MUNN" />
          </div>
        </div>

        {/* Orbiting Items */}
        {orbitalRings.map((ring, ringIndex) =>
          ring.items.map((item, itemIndex) => (
            <OrbitItem
              key={`${ringIndex}-${itemIndex}`}
              icon={item.icon}
              radius={ring.radius}
              angle={item.angle}
              duration={ring.duration}
              text={item.text}
            />
          ))
        )}
      </div>
    </div>
  );
}
