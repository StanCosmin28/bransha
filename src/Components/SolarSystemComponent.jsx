// import {
//   Power,
//   BarChart3,
//   Settings,
//   Rocket,
//   Star,
//   Moon,
//   Globe,
// } from "lucide-react";
import data from "../Model/data";
import "../App.css";
const SVGs = { ...data.iconsSVG };

export default function SolarSystemComponent() {
  const orbitalRings = [
    {
      radius: 100,
      items: [
        {
          icon: SVGs.iluminatAutomatizat,
          angle: 0,
          text: "Iluminat Automatizat",
          widthSize: 180,
        },
        {
          icon: SVGs.analizaTimpReal,
          angle: 180,
          text: "Analiză timp real",
          widthSize: 160,
        },
      ],
      duration: 20,
    },
    {
      radius: 160,
      items: [
        {
          icon: SVGs.controlAcces,
          angle: 0,
          text: "Control Acces",
          widthSize: 145,
        },
        {
          icon: SVGs.controlHVAC,
          angle: 120,
          text: "Control HVAC",
          widthSize: 145,
        },
        {
          icon: SVGs.optimizareEnergetica,
          angle: 240,
          text: "Optimizare Energetică",
          widthSize: 185,
        },
      ],
      duration: 30,
    },
    {
      radius: 220,
      items: [
        {
          icon: SVGs.securitateSupraveghere,
          angle: 0,
          text: "Supraveghere",
          widthSize: 145,
        },
        {
          icon: SVGs.sigurantaIncendiu,
          angle: 180,
          text: "Siguranță Incendiu",
          widthSize: 170,
        },
        {
          icon: SVGs.sigurantaInundatie,
          angle: 280,
          text: "Siguranță Inundație",
          widthSize: 170,
        },
      ],
      duration: 40,
    },
  ];

  const OrbitItem = ({
    icon: Icon,
    radius,
    angle,
    duration,
    text,
    widthSize,
  }) => {
    return (
      <div
        className="group absolute flex items-center border-4 border-white rounded-full overflow-hidden transition-all duration-300 ease-in-out w-12 h-12 hover:w-[var(--width-size)]"
        style={{
          transform: `translate(-50%, -50%)`,
          transformOrigin: "left",
          left: "50%",
          top: "50%",
          animation: `orbit-${radius}-${angle} ${duration}s linear infinite`,
          "--width-size": `${widthSize}px`, // Pass widthSize as CSS custom property
        }}
      >
        <div
          className="orbit-item h-full bg-[#DCFC00] rounded-full shadow-lg flex items-center border border-gray-200 hover:shadow-xl cursor-pointer transition-all duration-300 ease-in-out"
          style={{
            width: "48px",
            transitionProperty: "width, box-shadow",
          }}
        >
          <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
            <img src={Icon} className="w-8 h-8 text-gray-700" alt={text} />
          </div>
          <p className="text-xs text-gray-700 font-medium hidden group-hover:block whitespace-nowrap pr-2">
            {text}
          </p>
        </div>
        <style jsx="true">{`
          .group {
            z-index: 10; /* Default stacking order */
          }
          .group:hover {
            z-index: 1000 !important; /* Ensure hovered item is above others */
          }
          .group:hover > .orbit-item {
            width: var(
              --width-size
            ) !important; /* Use custom property for width */
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
        {orbitalRings.map((ring, index) => (
          <OrbitRing key={index} radius={ring.radius} />
        ))}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-24 h-24 bg-gradient-to-br rounded-full shadow-2xl flex items-center justify-center">
            <img src={data.munn} className="w-25 h-25 text-white" alt="MUNN" />
          </div>
        </div>
        {orbitalRings.map((ring, ringIndex) =>
          ring.items.map((item, itemIndex) => (
            <OrbitItem
              key={`${ringIndex}-${itemIndex}`}
              icon={item.icon}
              radius={ring.radius}
              angle={item.angle}
              duration={ring.duration}
              text={item.text}
              widthSize={item.widthSize}
            />
          ))
        )}
      </div>
    </div>
  );
}
