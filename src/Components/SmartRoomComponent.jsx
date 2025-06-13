import { useState, useEffect } from "react";
import {
  Lightbulb,
  Palette,
  Activity,
  Wind,
  Eye,
  Sun,
  Plus,
  Minus,
  Wifi,
  Battery,
  Zap,
  Home,
  Thermometer,
  Droplets,
  Gauge,
} from "lucide-react";

export default function SmartHomePanel() {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [temperature, setTemperature] = useState(23.0);
  const [targetTemp, setTargetTemp] = useState(23.0);
  const [humidity, setHumidity] = useState(45);
  const [energyUsage, setEnergyUsage] = useState(2.4);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [lightBrightness, setLightBrightness] = useState(75);
  // const [rgbColor, setRgbColor] = useState({ r: 138, g: 43, b: 226 });
  const [rgbColor, setRgbColor] = useState("Off");
  const [motionDetected, setMotionDetected] = useState(false);
  const [windowStatus, setWindowStatus] = useState("closed");
  const [hvacMode, setHvacMode] = useState("auto");
  const [naturalLight, setNaturalLight] = useState(80);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
      setEnergyUsage((prev) => prev + (Math.random() - 0.5) * 0.1);
      setHumidity((prev) =>
        parseFloat(
          Math.max(30, Math.min(70, prev + (Math.random() - 0.5) * 2)).toFixed(
            2
          )
        )
      );
      setNaturalLight((prev) =>
        parseFloat(
          Math.max(0, Math.min(100, prev + (Math.random() - 0.5) * 5)).toFixed(
            2
          )
        )
      );

      // Simulate motion detection
      if (Math.random() < 0.1) {
        setMotionDetected(true);
        setTimeout(() => setMotionDetected(false), 3000);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Temperature animation
  useEffect(() => {
    if (Math.abs(temperature - targetTemp) > 0.1) {
      const timer = setTimeout(() => {
        setTemperature((prev) => {
          const diff = targetTemp - prev;
          return prev + (diff > 0 ? 0.1 : -0.1);
        });
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [temperature, targetTemp]);

  const smartFeatures = [
    {
      id: 1,
      //   name: "Illuminat artificial",
      name: "Illuminat A.",
      icon: <Lightbulb className="w-5 h-5" />,
      active: lightBrightness > 0,
      position: "top-left",
      value: `${lightBrightness}%`,
      color: "from-amber-400 to-orange-500",
    },
    {
      id: 2,
      name: "RGB",
      icon: <Palette className="w-5 h-5" />,
      active: rgbColor === "Off" ? false : true,
      position: "left",
      // value: "Purple",
      value: rgbColor,
      color: "from-purple-400 to-pink-500",
    },
    {
      id: 3,
      //   name: "Senzor mișcare",
      name: "Mișcare",
      icon: <Activity className="w-5 h-5" />,
      active: motionDetected,
      position: "bottom-left",
      value: motionDetected ? "Detectat" : "Inactiv",
      color: "from-green-400 to-emerald-500",
    },
    {
      id: 4,
      name: "HVAC",
      icon: <Wind className="w-5 h-5" />,
      active: true,
      position: "top-right",
      value: hvacMode.toUpperCase(),
      color: "from-blue-400 to-cyan-500",
    },
    {
      id: 5,
      //   name: "Senzor fereastră",
      name: "Fereastră",
      icon: <Eye className="w-5 h-5" />,
      active: windowStatus === "open",
      position: "right",
      value: windowStatus === "open" ? "Deschis" : "Închis",
      color: "from-indigo-400 to-purple-500",
    },
    {
      id: 6,
      //   name: "Illuminat natural",
      name: "Illuminat N.",
      icon: <Sun className="w-5 h-5" />,
      active: naturalLight > 50,
      position: "bottom-right",
      value: `${naturalLight}%`,
      color: "from-yellow-400 to-amber-500",
    },
  ];

  const getPositionClasses = (position) => {
    switch (position) {
      case "top-left":
        return "left-4 top-[10rem] sm:top-[16rem] md:left-8";
      case "top-right":
        return "right-4 top-[10rem] sm:top-[16rem] md:right-8";
      case "left":
        return "top-[15.5rem] sm:top-[26rem] left-4 md:left-8";
      case "right":
        return "top-[15.5rem] sm:top-[26rem] right-4 md:right-8";
      case "bottom-left":
        return "left-4 bottom-[15.5rem] md:left-8";
      case "bottom-right":
        return "right-4 bottom-[15.5rem] md:right-8";
      default:
        return "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2";
    }
  };

  const toggleFeature = (featureId) => {
    switch (featureId) {
      case 1: // Artificial Light
        setLightBrightness((prev) => (prev > 0 ? 0 : 75));
        break;
      case 2:
        setRgbColor((prev) =>
          prev === "Off" ? "Green" : prev === "Green" ? "Red" : "Off"
        );
        break;
      case 3: // Motion Sensor
        setMotionDetected(!motionDetected);
        break;
      case 4: // HVAC
        setHvacMode((prev) =>
          prev === "auto" ? "manual" : prev === "manual" ? "eco" : "auto"
        );
        break;
      case 5: // Window Sensor
        setWindowStatus((prev) => (prev === "open" ? "closed" : "open"));
        break;
    }
  };

  const CircularProgress = ({
    value,
    max,
    size = 120,
    strokeWidth = 8,
    color = "#8b5cf6",
  }) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (value / max) * circumference;

    return (
      <div className="relative">
        <svg width={size} height={size} className="transform -rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="rgba(255,255,255,0.2)"
            strokeWidth={strokeWidth}
            fill="transparent"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={color}
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-500 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg sm:text-2xl font-bold text-white">
            {value.toFixed(1)}°C
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="relative w-full min-h-[750px] h-screen overflow-hidden bg-gradient-to-br from-amber-50 to-orange-100">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          //   backgroundImage: `url('https://www.decorilla.com/online-decorating/wp-content/uploads/2024/11/smart-home-design-by-Decorilla-designer-Mena-H-scaled.jpeg')`,
          backgroundImage: `url('https://rvainterior.com/cdn/shop/articles/2150794684_1.jpg?v=1723820272')`,
        }}
      >
        {isPanelOpen ? (
          <div className="absolute inset-0 bg-gradient-to-bl from-black/80 via-transparent to-black/30"></div>
        ) : (
          ""
        )}
      </div>

      {/* Main Container - Max 5xl width */}
      <div className="relative w-full h-full max-w-4xl mx-auto">
        {/* Floating Status Bar */}
        <div className="absolute top-6 sm:top-8 left-4 right-4 flex flex-row justify-between items-start sm:items-center z-50 gap-2 sm:gap-0">
          <div className="flex items-center space-x-2 sm:space-x-4 bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 border border-white/20">
            <Wifi className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
            <span className="text-white text-xs sm:text-sm font-medium">
              Connected
            </span>
            <Battery className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
            <span className="text-white text-xs sm:text-sm">
              {Math.round(energyUsage * 10)}%
            </span>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 border border-white/20">
            <span className="text-white text-xs sm:text-sm font-medium">
              {currentTime.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
          </div>
        </div>

        {/* Floating Feature Panels */}
        {smartFeatures.map((feature) => (
          <div
            key={feature.id}
            className={`absolute ${getPositionClasses(
              feature.position
            )} transition-all duration-500 z-40 ${
              isPanelOpen
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95 pointer-events-none"
            }`}
          >
            <div
              onClick={() => toggleFeature(feature.id)}
              className={`group cursor-pointer bg-white/15 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/30 hover:border-[#DCFC00]/40 transition-all duration-300 hover:scale-105 hover:bg-white/20 ${
                feature.active ? "ring-1 ring-[#DCFC00]/40" : ""
              }`}
            >
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div
                  className={`p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-gradient-to-r ${feature.color} text-white shadow-lg`}
                >
                  {feature.icon}
                </div>
                <div className="min-w-0">
                  <h3 className="text-white font-medium text-xs sm:text-sm truncate">
                    {feature.name}
                  </h3>
                  <p className="text-white/70 text-xs">{feature.value}</p>
                </div>
              </div>
              {feature.active && (
                <div className="absolute -top-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-pulse"></div>
              )}
            </div>
          </div>
        ))}

        {/* Central Temperature Control */}
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 z-30 ${
            isPanelOpen
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95 pointer-events-none"
          }`}
        >
          <div className="bg-white/15 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-white/30 shadow-2xl mx-4">
            <div className="flex flex-col items-center space-y-4 sm:space-y-6">
              {/* Circular Temperature Display */}
              <div className="relative">
                <CircularProgress
                  value={temperature}
                  max={35}
                  size={window.innerWidth < 640 ? 100 : 140}
                  color="#8b5cf6"
                />
                <div className="absolute -bottom-1 sm:-bottom-2 left-1/2 -translate-x-1/2">
                  <Thermometer className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                </div>
              </div>

              {/* Temperature Controls */}
              <div className="flex items-center space-x-4 sm:space-x-6">
                <button
                  onClick={() =>
                    setTargetTemp((prev) => Math.max(15, prev - 0.5))
                  }
                  className="p-2 sm:p-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:scale-110 transition-transform shadow-lg cursor-pointer"
                >
                  <Minus className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <div className="text-center">
                  <p className="text-white/70 text-xs sm:text-sm">Target</p>
                  <p className="text-white font-bold text-base sm:text-lg">
                    {targetTemp.toFixed(1)}°C
                  </p>
                </div>
                <button
                  onClick={() =>
                    setTargetTemp((prev) => Math.min(30, prev + 0.5))
                  }
                  className="p-2 sm:p-3 rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white hover:scale-110 transition-transform shadow-lg cursor-pointer"
                >
                  <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>

              {/* Additional Controls */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 w-full">
                <div className="text-center">
                  <Droplets className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 mx-auto mb-1" />
                  <p className="text-white/70 text-xs">Humidity</p>
                  <p className="text-white font-medium text-xs sm:text-sm">
                    {humidity}%
                  </p>
                </div>
                <div className="text-center">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 mx-auto mb-1" />
                  <p className="text-white/70 text-xs">Energy</p>
                  <p className="text-white font-medium text-xs sm:text-sm">
                    {energyUsage.toFixed(1)}kW
                  </p>
                </div>
                <div className="text-center">
                  <Gauge className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mx-auto mb-1" />
                  <p className="text-white/70 text-xs">Efficiency</p>
                  <p className="text-white font-medium text-xs sm:text-sm">
                    94%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Info Panel */}
        <div
          className={`absolute bottom-5 sm:bottom-8 left-1/2 -translate-x-1/2 w-full max-w-sm sm:max-w-xl px-4 transition-all duration-500 z-20 ${
            isPanelOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4 pointer-events-none"
          }`}
        >
          <div className="bg-white/15 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/30 text-center">
            <h3 className="text-white font-bold text-base sm:text-lg mb-2">
              Control complet, fără efort
            </h3>
            <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
              Un singur sistem pentru tot: iluminat, climatizare, securitate,
              acces și tot ce ai nevoie. BMS-ul tău optimizează energia, reduce
              costurile și protejează planeta.
            </p>
          </div>
        </div>

        {/* Enhanced Toggle Switch */}
        {/* <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 z-50 "> */}
        <div className="absolute z-50 left-1/2 -translate-x-1/2  bottom-44 sm:bottom-49">
          {/* <div className="absolute z-50 left-1/2 -translate-x-1/2 top-20"> */}
          <div className="flex flex-col items-center space-y-2">
            <button
              onClick={() => setIsPanelOpen(!isPanelOpen)}
              className={`cursor-pointer relative w-38 h-14 sm:w-40 sm:h-16 rounded-full transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-[#DCFC00]/40 hover:scale-105 ${
                isPanelOpen
                  ? "bg-gradient-to-r from-[#DCFC00] to-[#DCFC00] shadow-lg shadow-[#DCFC00]/25"
                  : "bg-white/20 backdrop-blur-sm border border-white/30"
              }`}
            >
              <div
                className={`absolute top-[7px] w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg transition-all duration-500 flex items-center justify-center ${
                  isPanelOpen
                    ? "translate-x-25 sm:translate-x-25"
                    : "translate-x-2"
                }`}
              >
                {/* <Home
                  className={`w-3 h-3 sm:w-4 sm:h-4 transition-colors duration-300 ${
                    isPanelOpen ? "text-purple-500" : "text-gray-400"
                  }`}
                /> */}
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfD09kj62wIXzdJ9cu7Zs-nRLG7uHi-sQ4Pw&s"
                  alt="B"
                  className={`w-10 h-10 sm:w-10 sm:h-10 rounded-full transition-colors duration-300 ${
                    isPanelOpen ? "text-purple-500" : "text-gray-400"
                  }`}
                />
              </div>
            </button>
            {/* <div className="bg-black/50 backdrop-blur-sm rounded-full px-2 sm:px-3 py-1">
               <span className="text-white text-xs font-medium">
                {isPanelOpen ? "ACTIV" : "NAH"}
              </span> 
            </div> */}
          </div>
        </div>

        {/* Floating Particles Animation */}
        {isPanelOpen && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-purple-400/30 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${2 + Math.random() * 3}s`,
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
