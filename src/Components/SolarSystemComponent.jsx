import {
  Power,
  BarChart3,
  Settings,
  Rocket,
  Star,
  Moon,
  Globe,
} from "lucide-react";

const SolarSystemComponent = () => {
  // Define the orbital rings with their items - 3 rings with 8 total planets
  const orbitalRings = [
    {
      radius: 100,
      items: [
        { icon: Power, angle: 0 },
        { icon: BarChart3, angle: 120 },
        { icon: Settings, angle: 240 },
      ],
      duration: 20, // seconds for full rotation
    },
    {
      radius: 160,
      items: [
        { icon: Rocket, angle: 0 },
        { icon: Star, angle: 120 },
        { icon: Moon, angle: 240 },
      ],
      duration: 30,
    },
    {
      radius: 220,
      items: [
        { icon: Globe, angle: 0 },
        { icon: Power, angle: 180 }, // Reusing Power to meet 8-item requirement
      ],
      duration: 40,
    },
  ];

  const OrbitItem = ({ icon: Icon, radius, angle, duration }) => {
    return (
      <div
        className="absolute w-12 h-12 flex items-center justify-center"
        style={{
          left: "50%",
          top: "50%",
          transform: `translate(-50%, -50%) rotate(${angle}deg) translateX(${radius}px) rotate(-${angle}deg)`,
          animation: `orbit-${radius} ${duration}s linear infinite`,
        }}
      >
        <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border border-gray-200 hover:shadow-xl transition-shadow">
          <Icon size={20} className="text-gray-700" />
        </div>
      </div>
    );
  };

  const OrbitRing = ({ radius }) => (
    <div
      className="absolute border-2 border-gray-300 rounded-full"
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
    <div className="relative w-full h-screen flex items-center justify-center  overflow-hidden">
      {/* Add custom CSS for animations */}
      <style jsx>{`
        @keyframes orbit-100 {
          from {
            transform: translate(-50%, -50%) rotate(0deg) translateX(100px)
              rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg) translateX(100px)
              rotate(-360deg);
          }
        }
        @keyframes orbit-160 {
          from {
            transform: translate(-50%, -50%) rotate(0deg) translateX(160px)
              rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg) translateX(160px)
              rotate(-360deg);
          }
        }
        @keyframes orbit-220 {
          from {
            transform: translate(-50%, -50%) rotate(0deg) translateX(220px)
              rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg) translateX(220px)
              rotate(-360deg);
          }
        }
      `}</style>

      {/* Solar System Container */}
      <div className="relative w-full h-full max-w-4xl max-h-4xl">
        {/* Orbital Ring Guides */}
        {orbitalRings.map((ring, index) => (
          <OrbitRing key={index} radius={ring.radius} />
        ))}

        {/* Central Sun/Logo */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="w-20 h-20 bg-gradient-to-br from-lime-400 to-lime-500 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer">
            <Rocket size={32} className="text-black" />
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
            />
          ))
        )}
      </div>
    </div>
  );
};

export default SolarSystemComponent;
