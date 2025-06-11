// import React, { useState } from "react";
// import {
//   Lightbulb,
//   Palette,
//   Activity,
//   Wind,
//   Eye,
//   Sun,
//   Plus,
//   Minus,
//   Power,
// } from "lucide-react";

// export default function SmartHomePanel() {
//   const [isPanelOpen, setIsPanelOpen] = useState(false);
//   const [temperature, setTemperature] = useState(23.0);

//   const togglePanel = () => {
//     setIsPanelOpen(!isPanelOpen);
//   };

//   const increaseTemp = () => {
//     setTemperature((prev) => Math.min(prev + 0.5, 30.0));
//   };

//   const decreaseTemp = () => {
//     setTemperature((prev) => Math.max(prev - 0.5, 15.0));
//   };

//   const toggleFeature = (id) => {
//     smartFeatures[id - 1].active = !smartFeatures[id - 1].active;
//   };

//   const smartFeatures = [
//     {
//       id: 1,
//       name: "Illuminat artificial",
//       icon: <Lightbulb className="w-6 h-6" />,
//       active: true,
//     },
//     {
//       id: 2,
//       name: "RGB",
//       icon: <Palette className="w-6 h-6" />,
//       active: false,
//     },
//     {
//       id: 3,
//       name: "Senzoare miscare",
//       icon: <Activity className="w-6 h-6" />,
//       active: true,
//     },
//     { id: 4, name: "HVAC", icon: <Wind className="w-6 h-6" />, active: true },
//     {
//       id: 5,
//       name: "Senzoare ferestre",
//       icon: <Eye className="w-6 h-6" />,
//       active: false,
//     },
//     {
//       id: 6,
//       name: "Illuminat natural",
//       icon: <Sun className="w-6 h-6" />,
//       active: true,
//     },
//   ];

//   return (
//     <div className="relative w-full h-screen overflow-hidden">
//       {/* Background Image from Web */}
//       <div
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//         style={{
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80')",
//         }}
//       >
//         <div className="absolute inset-0 bg-black bg-opacity-40"></div>
//       </div>

//       {/* Glassmorphism Panel */}
//       <div
//         className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out ${
//           isPanelOpen ? "opacity-100 visible" : "opacity-0 invisible"
//         }`}
//       >
//         <div className="bg-white/20 backdrop-blur-md border-2 border-yellow-400/50 rounded-2xl p-6 md:p-8 w-11/12 max-w-2xl mx-4 shadow-lg">
//           {/* Temperature Display */}
//           <div className="flex items-center justify-center mb-8">
//             <div className="flex items-center space-x-4 bg-white/10 rounded-full px-6 py-3 backdrop-blur-sm">
//               <button
//                 onClick={decreaseTemp}
//                 className="p-2 rounded-full bg-white/20 hover:bg-yellow-400/30 transition-colors text-white"
//               >
//                 <Minus className="w-5 h-5" />
//               </button>
//               <span className="text-3xl font-bold text-yellow-300">
//                 {temperature.toFixed(1)}°C
//               </span>
//               <button
//                 onClick={increaseTemp}
//                 className="p-2 rounded-full bg-white/20 hover:bg-yellow-400/30 transition-colors text-white"
//               >
//                 <Plus className="w-5 h-5" />
//               </button>
//             </div>
//           </div>

//           {/* Smart Features Grid with Interactive Buttons */}
//           <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
//             {smartFeatures.map((feature) => (
//               <button
//                 key={feature.id}
//                 onClick={() => toggleFeature(feature.id)}
//                 className={`flex flex-col items-center p-4 rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
//                   feature.active
//                     ? "bg-yellow-400/20 border border-yellow-400/50 text-yellow-300"
//                     : "bg-white/10 border border-white/20 text-white/80"
//                 }`}
//               >
//                 <div
//                   className={`p-3 rounded-full mb-3 ${
//                     feature.active ? "bg-yellow-400/20" : "bg-white/10"
//                   }`}
//                 >
//                   {React.cloneElement(feature.icon, {
//                     className: `w-6 h-6 ${
//                       feature.active ? "text-yellow-300" : "text-white/70"
//                     }`,
//                   })}
//                 </div>
//                 <span
//                   className={`text-sm md:text-base font-medium text-center ${
//                     feature.active ? "text-yellow-300" : "text-white/90"
//                   }`}
//                 >
//                   {feature.name}
//                 </span>
//               </button>
//             ))}
//           </div>

//           {/* Close Button */}
//           <button
//             onClick={togglePanel}
//             className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-yellow-400/30 transition-colors text-white"
//           >
//             <Power className="w-6 h-6" />
//           </button>
//         </div>
//       </div>

//       {/* Toggle Switch Button with Surprise Animation */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
//         <button
//           onClick={togglePanel}
//           className={`relative w-20 h-10 rounded-full transition-all duration-500 focus:outline-none focus:ring-4 focus:ring-yellow-400/50 ${
//             isPanelOpen ? "bg-yellow-500" : "bg-white/20 backdrop-blur-sm"
//           }`}
//         >
//           <div
//             className={`absolute top-1 w-8 h-8 bg-white rounded-full shadow-lg transition-all duration-500 transform ${
//               isPanelOpen ? "translate-x-11" : "translate-x-1"
//             } ${isPanelOpen ? "rotate-180" : ""}`}
//           />
//         </button>
//         <p
//           className={`text-white text-sm mt-2 text-center font-medium transition-colors ${
//             isPanelOpen ? "text-yellow-300" : "text-white"
//           }`}
//         >
//           {isPanelOpen ? "Close Panel" : "Open Panel"}
//         </p>
//       </div>
//     </div>
//   );
// }

// import { useState } from "react";
// import {
//   Lightbulb,
//   Palette,
//   Activity,
//   Wind,
//   Eye,
//   Sun,
//   Plus,
//   Minus,
//   Power,
// } from "lucide-react";

// export default function SmartHomePanel() {
//   const [isPanelOpen, setIsPanelOpen] = useState(false);
//   const [temperature, setTemperature] = useState(23.0);

//   const togglePanel = () => {
//     setIsPanelOpen(!isPanelOpen);
//   };

//   const increaseTemp = () => {
//     setTemperature((prev) => Math.min(prev + 0.5, 30.0));
//   };

//   const decreaseTemp = () => {
//     setTemperature((prev) => Math.max(prev - 0.5, 15.0));
//   };

//   const smartFeatures = [
//     {
//       id: 1,
//       name: "Illuminat artificial",
//       icon: <Lightbulb className="w-6 h-6" />,
//       active: true,
//     },
//     {
//       id: 2,
//       name: "RGB",
//       icon: <Palette className="w-6 h-6" />,
//       active: false,
//     },
//     {
//       id: 3,
//       name: "Senzoare miscare",
//       icon: <Activity className="w-6 h-6" />,
//       active: true,
//     },
//     {
//       id: 4,
//       name: "HVAC",
//       icon: <Wind className="w-6 h-6" />,
//       active: true,
//     },
//     {
//       id: 5,
//       name: "Senzoare ferestre",
//       icon: <Eye className="w-6 h-6" />,
//       active: false,
//     },
//     {
//       id: 6,
//       name: "Illuminat natural",
//       icon: <Sun className="w-6 h-6" />,
//       active: true,
//     },
//   ];

//   return (
//     <div className="relative w-full h-screen overflow-hidden">
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat w-[100%]"
//         style={{
//           backgroundImage: `url('https://www.decorilla.com/online-decorating/wp-content/uploads/2024/11/smart-home-design-by-Decorilla-designer-Mena-H-scaled.jpeg')`,
//           backgroundPosition: "cover",
//         }}
//       >
//         {/* Dark overlay for better contrast */}
//         <div className="absolute inset-0  bg-opacity-30"></div>
//       </div>

//       {/* Glassmorphism Panel */}
//       <div
//         className={`absolute inset-0 flex items-center justify-center ${
//           isPanelOpen ? "opacity-100 visible" : "opacity-0 invisible"
//         }`}
//       >
//         <div className="relative w-11/12 max-w-4xl h-[35rem] mx-4 p-6 md:p-8 backdrop-blur-xl bg-white/10 border-1 rounded-2xl shadow-2xl ">
//           {/* Temperature Display */}
//           <div className="flex items-center justify-center mb-8">
//             <div className="flex items-center space-x-4 bg-white/20 rounded-full px-6 py-3 backdrop-blur-sm">
//               <button
//                 onClick={decreaseTemp}
//                 className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
//               >
//                 <Minus className="w-4 h-4 text-white" />
//               </button>
//               <span className="text-2xl md:text-3xl font-bold text-white min-w-[100px] text-center">
//                 {temperature.toFixed(1)}°C
//               </span>
//               <button
//                 onClick={increaseTemp}
//                 className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
//               >
//                 <Plus className="w-4 h-4 text-white" />
//               </button>
//             </div>
//           </div>

//           {/* Smart Features Grid */}
//           <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
//             {smartFeatures.map((feature) => (
//               <div
//                 key={feature.id}
//                 className={`flex flex-col items-center p-4 rounded-xl backdrop-blur-sm transition-all duration-300 cursor-pointer hover:scale-105 ${
//                   feature.active
//                     ? "bg-yellow-400/20 border border-yellow-400/50"
//                     : "bg-white/10 border border-white/20"
//                 }`}
//               >
//                 <div
//                   className={`p-3 rounded-full mb-3 ${
//                     feature.active ? "text-yellow-400" : "text-white/70"
//                   }`}
//                 >
//                   {feature.icon}
//                 </div>
//                 <span
//                   className={`text-sm md:text-base font-medium text-center leading-tight ${
//                     feature.active ? "text-yellow-400" : "text-white/90"
//                   }`}
//                 >
//                   {feature.name}
//                 </span>
//               </div>
//             ))}
//           </div>

//           {/* Close button */}
//           <button
//             onClick={togglePanel}
//             className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
//           >
//             <Power className="w-5 h-5 text-white" />
//           </button>
//         </div>
//       </div>

//       {/* Toggle Switch Button */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
//         <button
//           onClick={togglePanel}
//           className={`relative w-16 h-8 rounded-full transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-yellow-400/50 ${
//             isPanelOpen ? "bg-yellow-400" : "bg-white/30 backdrop-blur-sm"
//           }`}
//         >
//           <div
//             className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-lg transition-transform duration-300 ${
//               isPanelOpen ? "translate-x-9" : "translate-x-1"
//             }`}
//           />
//         </button>
//         <p className="text-white text-sm mt-2 text-center font-medium">
//           {isPanelOpen ? "Close Panel" : "Open Panel"}
//         </p>
//       </div>
//     </div>
//   );
// }

"use client";

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
  Volume2,
  Play,
  Pause,
  SkipForward,
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
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(65);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [lightBrightness, setLightBrightness] = useState(75);
  const [rgbColor, setRgbColor] = useState({ r: 138, g: 43, b: 226 });
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
      name: "Illuminat artificial",
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
      active: true,
      position: "left",
      value: "Purple",
      color: "from-purple-400 to-pink-500",
    },
    {
      id: 3,
      name: "Senzor mișcare",
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
      name: "Senzor fereastră",
      icon: <Eye className="w-5 h-5" />,
      active: windowStatus === "open",
      position: "right",
      value: windowStatus === "open" ? "Deschis" : "Închis",
      color: "from-indigo-400 to-purple-500",
    },
    {
      id: 6,
      name: "Illuminat natural",
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
        return "top-16 left-8 md:top-20 md:left-5";
      case "top-right":
        return "top-16 right-8 md:top-20 md:right-5";
      case "left":
        return "top-1/2 left-8 md:left-5 -translate-y-1/2";
      case "right":
        return "top-1/2 right-8 md:right-5 -translate-y-1/2";
      case "bottom-left":
        return "bottom-32 left-8 md:bottom-40 md:left-5";
      case "bottom-right":
        return "bottom-32 right-8 md:bottom-40 md:right-5";
      default:
        return "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2";
    }
  };

  const toggleFeature = (featureId) => {
    switch (featureId) {
      case 1: // Artificial Light
        setLightBrightness((prev) => (prev > 0 ? 0 : 75));
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
          <span className="text-2xl font-bold text-white">
            {value.toFixed(1)}°C
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-amber-50 to-orange-100">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://www.decorilla.com/online-decorating/wp-content/uploads/2024/11/smart-home-design-by-Decorilla-designer-Mena-H-scaled.jpeg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/30"></div>
      </div>

      {/* Floating Status Bar */}
      <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-50">
        <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20">
          <Wifi className="w-4 h-4 text-green-400" />
          <span className="text-white text-sm font-medium">Connected</span>
          <Battery className="w-4 h-4 text-blue-400" />
          <span className="text-white text-sm">
            {Math.round(energyUsage * 10)}%
          </span>
        </div>
        <div className="bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20">
          <span className="text-white text-sm font-medium">
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
          )} transition-all duration-500 ${
            isPanelOpen
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95 pointer-events-none"
          }`}
        >
          <div
            onClick={() => toggleFeature(feature.id)}
            className={`group cursor-pointer bg-white/15 backdrop-blur-md rounded-2xl p-4 border border-white/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 hover:bg-white/20 ${
              feature.active ? "ring-2 ring-purple-400/50" : ""
            }`}
          >
            <div className="flex items-center space-x-3">
              <div
                className={`p-2 rounded-xl bg-gradient-to-r ${feature.color} text-white shadow-lg`}
              >
                {feature.icon}
              </div>
              <div>
                <h3 className="text-white font-medium text-sm">
                  {feature.name}
                </h3>
                <p className="text-white/70 text-xs">{feature.value}</p>
              </div>
            </div>
            {feature.active && (
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            )}
          </div>
        </div>
      ))}

      {/* Central Temperature Control */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ${
          isPanelOpen
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div className="bg-white/15 backdrop-blur-xl rounded-3xl p-8 border border-white/30 shadow-2xl">
          <div className="flex flex-col items-center space-y-6">
            {/* Circular Temperature Display */}
            <div className="relative">
              <CircularProgress
                value={temperature}
                max={35}
                size={140}
                color="#8b5cf6"
              />
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
                <Thermometer className="w-5 h-5 text-purple-400" />
              </div>
            </div>

            {/* Temperature Controls */}
            <div className="flex items-center space-x-6">
              <button
                onClick={() =>
                  setTargetTemp((prev) => Math.max(15, prev - 0.5))
                }
                className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:scale-110 transition-transform shadow-lg"
              >
                <Minus className="w-5 h-5" />
              </button>
              <div className="text-center">
                <p className="text-white/70 text-sm">Target</p>
                <p className="text-white font-bold text-lg">
                  {targetTemp.toFixed(1)}°C
                </p>
              </div>
              <button
                onClick={() =>
                  setTargetTemp((prev) => Math.min(30, prev + 0.5))
                }
                className="p-3 rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white hover:scale-110 transition-transform shadow-lg"
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>

            {/* Additional Controls */}
            <div className="grid grid-cols-3 gap-4 w-full">
              <div className="text-center">
                <Droplets className="w-5 h-5 text-blue-400 mx-auto mb-1" />
                <p className="text-white/70 text-xs">Humidity</p>
                <p className="text-white font-medium text-sm">{humidity}%</p>
              </div>
              <div className="text-center">
                <Zap className="w-5 h-5 text-yellow-400 mx-auto mb-1" />
                <p className="text-white/70 text-xs">Energy</p>
                <p className="text-white font-medium text-sm">
                  {energyUsage.toFixed(1)}kW
                </p>
              </div>
              <div className="text-center">
                <Gauge className="w-5 h-5 text-green-400 mx-auto mb-1" />
                <p className="text-white/70 text-xs">Efficiency</p>
                <p className="text-white font-medium text-sm">94%</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Music Control Panel */}
      {/* <div
        className={`absolute bottom-20 left-8 transition-all duration-500 ${
          isPanelOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <div className="bg-white/15 backdrop-blur-md rounded-2xl p-4 border border-white/30">
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:scale-110 transition-transform"
            >
              {isPlaying ? (
                <Pause className="w-4 h-4" />
              ) : (
                <Play className="w-4 h-4" />
              )}
            </button>
            <button className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors">
              <SkipForward className="w-4 h-4" />
            </button>
            <div className="flex items-center space-x-2">
              <Volume2 className="w-4 h-4 text-white" />
              <div className="w-16 h-1 bg-white/30 rounded-full">
                <div
                  className="h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full transition-all duration-300"
                  style={{ width: `${volume}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Info Panel */}
      {/* <div
        className={`absolute bottom-6 left-1/2 -translate-x-1/2 max-w-md transition-all duration-500 w-[90vw] min-h-32 flex justify-center ${
          isPanelOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <div className="bg-white/15 backdrop-blur-md rounded-2xl p-6 border border-white/30 text-center">
          <h3 className="text-white font-bold text-lg mb-2">
            Control complet, fără efort
          </h3>
          <p className="text-white/80 text-sm leading-relaxed">
            Un singur sistem pentru tot: iluminat, climatizare, securitate,
            acces și tot ce ai nevoie. BMS-ul tău optimizează energia, reduce
            costurile și protejează planeta. Clădiri smart. Simplu conectat.
          </p>
        </div>
      </div> */}

      {/* Enhanced Toggle Switch */}
      <div className="absolute bottom-8 right-8">
        <div className="flex flex-col items-center space-y-2">
          <button
            onClick={() => setIsPanelOpen(!isPanelOpen)}
            className={`relative w-20 h-10 rounded-full transition-all duration-500 focus:outline-none focus:ring-4 focus:ring-purple-400/50 hover:scale-105 ${
              isPanelOpen
                ? "bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg shadow-purple-500/25"
                : "bg-white/20 backdrop-blur-sm border border-white/30"
            }`}
          >
            <div
              className={`absolute top-1 w-8 h-8 bg-white rounded-full shadow-lg transition-all duration-500 flex items-center justify-center ${
                isPanelOpen ? "translate-x-11" : "translate-x-1"
              }`}
            >
              <Home
                className={`w-4 h-4 transition-colors duration-300 ${
                  isPanelOpen ? "text-purple-500" : "text-gray-400"
                }`}
              />
            </div>
          </button>
          <div className="bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
            <span className="text-white text-xs font-medium">
              {isPanelOpen ? "ACTIV" : "NAH"}
            </span>
          </div>
        </div>
      </div>

      {/* Floating Particles Animation */}
      {isPanelOpen && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
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
  );
}
