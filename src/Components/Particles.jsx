import { useEffect, useRef } from "react";
import { Renderer, Camera, Geometry, Program, Mesh } from "ogl";

const defaultColors = ["#ffffff", "#ffffff", "#ffffff"];

const hexToRgb = (hex) => {
  hex = hex.replace(/^#/, "");
  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((c) => c + c)
      .join("");
  }
  const int = parseInt(hex, 16);
  const r = ((int >> 16) & 255) / 255;
  const g = ((int >> 8) & 255) / 255;
  const b = (int & 255) / 255;
  return [r, g, b];
};

const vertex = /* glsl */ `
  attribute vec3 position;
  attribute vec4 random;
  attribute vec3 color;

  uniform mat4 modelMatrix;
  uniform mat4 viewMatrix;
  uniform mat4 projectionMatrix;
  uniform float uTime;
  uniform float uSpread;
  uniform float uBaseSize;
  uniform float uSizeRandomness;

  varying vec4 vRandom;
  varying vec3 vColor;

  void main() {
    vRandom = random;
    vColor = color;

    vec3 pos = position * uSpread;
    pos.z *= 10.0;

    vec4 mPos = modelMatrix * vec4(pos, 1.0);
    float t = uTime;
    mPos.x += sin(t * random.z + 6.28 * random.w) * mix(0.1, 1.5, random.x);
    mPos.y += sin(t * random.y + 6.28 * random.x) * mix(0.1, 1.5, random.w);
    mPos.z += sin(t * random.w + 6.28 * random.y) * mix(0.1, 1.5, random.z);

    vec4 mvPos = viewMatrix * mPos;
    gl_PointSize = (uBaseSize * (1.0 + uSizeRandomness * (random.x - 0.5))) / length(mvPos.xyz);
    gl_Position = projectionMatrix * mvPos;
  }
`;

const fragment = /* glsl */ `
  precision highp float;

  uniform float uTime;
  uniform float uAlphaParticles;
  varying vec4 vRandom;
  varying vec3 vColor;

  void main() {
    vec2 uv = gl_PointCoord.xy;
    float d = length(uv - vec2(0.5));

    if(uAlphaParticles < 0.5) {
      if(d > 0.5) {
        discard;
      }
      gl_FragColor = vec4(vColor + 0.2 * sin(uv.yxx + uTime + vRandom.y * 6.28), 1.0);
    } else {
      float circle = smoothstep(0.5, 0.4, d) * 0.8;
      gl_FragColor = vec4(vColor + 0.2 * sin(uv.yxx + uTime + vRandom.y * 6.28), circle);
    }
  }
`;

const Particles = ({
  particleCount = 200,
  particleSpread = 10,
  speed = 0.1,
  particleColors,
  moveParticlesOnHover = false,
  particleHoverFactor = 1,
  alphaParticles = false,
  particleBaseSize = 100,
  sizeRandomness = 1,
  cameraDistance = 20,
  disableRotation = false,
  className,
}) => {
  const containerRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const renderer = new Renderer({ depth: false, alpha: true });
    const gl = renderer.gl;
    container.appendChild(gl.canvas);
    gl.clearColor(0, 0, 0, 0);

    const camera = new Camera(gl, { fov: 15 });
    camera.position.set(0, 0, cameraDistance);

    const resize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      renderer.setSize(width, height);
      camera.perspective({ aspect: gl.canvas.width / gl.canvas.height });
    };
    window.addEventListener("resize", resize, false);
    resize();

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseRef.current = { x, y };
    };

    if (moveParticlesOnHover) {
      container.addEventListener("mousemove", handleMouseMove);
    }

    const count = particleCount;
    const positions = new Float32Array(count * 3);
    const randoms = new Float32Array(count * 4);
    const colors = new Float32Array(count * 3);
    const palette =
      particleColors && particleColors.length > 0
        ? particleColors
        : defaultColors;

    for (let i = 0; i < count; i++) {
      let x, y, z, len;
      do {
        x = Math.random() * 2 - 1;
        y = Math.random() * 2 - 1;
        z = Math.random() * 2 - 1;
        len = x * x + y * y + z * z;
      } while (len > 1 || len === 0);
      const r = Math.cbrt(Math.random());
      positions.set([x * r, y * r, z * r], i * 3);
      randoms.set(
        [Math.random(), Math.random(), Math.random(), Math.random()],
        i * 4
      );
      const col = hexToRgb(palette[Math.floor(Math.random() * palette.length)]);
      colors.set(col, i * 3);
    }

    const geometry = new Geometry(gl, {
      position: { size: 3, data: positions },
      random: { size: 4, data: randoms },
      color: { size: 3, data: colors },
    });

    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        uTime: { value: 0 },
        uSpread: { value: particleSpread },
        uBaseSize: { value: particleBaseSize },
        uSizeRandomness: { value: sizeRandomness },
        uAlphaParticles: { value: alphaParticles ? 1 : 0 },
      },
      transparent: true,
      depthTest: false,
    });

    const particles = new Mesh(gl, { mode: gl.POINTS, geometry, program });

    let animationFrameId;
    let lastTime = performance.now();
    let elapsed = 0;

    const update = (t) => {
      animationFrameId = requestAnimationFrame(update);
      const delta = t - lastTime;
      lastTime = t;
      elapsed += delta * speed;

      program.uniforms.uTime.value = elapsed * 0.001;

      if (moveParticlesOnHover) {
        particles.position.x = -mouseRef.current.x * particleHoverFactor;
        particles.position.y = -mouseRef.current.y * particleHoverFactor;
      } else {
        particles.position.x = 0;
        particles.position.y = 0;
      }

      if (!disableRotation) {
        particles.rotation.x = Math.sin(elapsed * 0.0002) * 0.1;
        particles.rotation.y = Math.cos(elapsed * 0.0005) * 0.15;
        particles.rotation.z += 0.01 * speed;
      }

      renderer.render({ scene: particles, camera });
    };

    animationFrameId = requestAnimationFrame(update);

    return () => {
      window.removeEventListener("resize", resize);
      if (moveParticlesOnHover) {
        container.removeEventListener("mousemove", handleMouseMove);
      }
      cancelAnimationFrame(animationFrameId);
      if (container.contains(gl.canvas)) {
        container.removeChild(gl.canvas);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    particleCount,
    particleSpread,
    speed,
    moveParticlesOnHover,
    particleHoverFactor,
    alphaParticles,
    particleBaseSize,
    sizeRandomness,
    cameraDistance,
    disableRotation,
  ]);

  return (
    <div ref={containerRef} className={`relative w-full h-full ${className}`} />
  );
};

export default Particles;

// import { useEffect, useRef, useMemo } from "react";
// import { Renderer, Camera, Geometry, Program, Mesh } from "ogl";

// const defaultColors = ["#ffffff", "#ffffff", "#ffffff"];

// const hexToRgb = (hex) => {
//   hex = hex.replace(/^#/, "");
//   if (hex.length === 3) {
//     hex = hex
//       .split("")
//       .map((c) => c + c)
//       .join("");
//   }
//   const int = parseInt(hex, 16);
//   const r = ((int >> 16) & 255) / 255;
//   const g = ((int >> 8) & 255) / 255;
//   const b = (int & 255) / 255;
//   return [r, g, b];
// };

// // Simplified vertex shader for mobile
// const vertex = /* glsl */ `
//   attribute vec3 position;
//   attribute vec2 random;
//   attribute vec3 color;

//   uniform mat4 modelMatrix;
//   uniform mat4 viewMatrix;
//   uniform mat4 projectionMatrix;
//   uniform float uTime;
//   uniform float uSpread;
//   uniform float uBaseSize;

//   varying vec2 vRandom;
//   varying vec3 vColor;

//   void main() {
//     vRandom = random;
//     vColor = color;

//     vec3 pos = position * uSpread;
//     pos.z *= 5.0; // Reduced depth

//     vec4 mPos = modelMatrix * vec4(pos, 1.0);

//     // Simplified animation - fewer sin calculations
//     float t = uTime * 0.5;
//     mPos.x += sin(t + random.x * 6.28) * 0.8;
//     mPos.y += cos(t + random.y * 6.28) * 0.8;

//     vec4 mvPos = viewMatrix * mPos;
//     gl_PointSize = uBaseSize / max(1.0, length(mvPos.xyz) * 0.1);
//     gl_Position = projectionMatrix * mvPos;
//   }
// `;

// // Simplified fragment shader for mobile
// const fragment = /* glsl */ `
//   precision mediump float; // Changed from highp to mediump for mobile

//   uniform float uAlphaParticles;
//   varying vec2 vRandom;
//   varying vec3 vColor;

//   void main() {
//     vec2 uv = gl_PointCoord.xy;
//     float d = distance(uv, vec2(0.5));

//     if(uAlphaParticles < 0.5) {
//       if(d > 0.5) discard;
//       gl_FragColor = vec4(vColor, 1.0); // Simplified color calculation
//     } else {
//       float circle = smoothstep(0.5, 0.3, d);
//       gl_FragColor = vec4(vColor, circle * 0.8);
//     }
//   }
// `;

// // Device detection utility
// const getDevicePerformance = () => {
//   const canvas = document.createElement("canvas");
//   const gl =
//     canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

//   if (!gl) return "low";

//   const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
//   const renderer = debugInfo
//     ? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL)
//     : "";

//   // Detect mobile devices
//   const isMobile =
//     /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
//       navigator.userAgent
//     );
//   const isLowEnd = /Android.*Chrome\/[1-5][0-9]|Android.*Chrome\/60/i.test(
//     navigator.userAgent
//   );

//   // Check for low-end indicators
//   if (
//     isMobile ||
//     isLowEnd ||
//     (renderer.includes("Adreno") && !renderer.includes("Adreno 6"))
//   ) {
//     return "low";
//   }

//   return navigator.hardwareConcurrency > 4 ? "high" : "medium";
// };

// const Particles = ({
//   particleCount = 200,
//   particleSpread = 10,
//   speed = 0.1,
//   particleColors,
//   moveParticlesOnHover = false,
//   particleHoverFactor = 1,
//   alphaParticles = false,
//   particleBaseSize = 100,
//   sizeRandomness = 1,
//   cameraDistance = 20,
//   disableRotation = false,
//   className,
// }) => {
//   const containerRef = useRef(null);
//   const mouseRef = useRef({ x: 0, y: 0 });
//   const rafId = useRef(null);
//   const lastFrameTime = useRef(0);

//   // Memoize performance settings
//   const performanceConfig = useMemo(() => {
//     const devicePerf = getDevicePerformance();

//     switch (devicePerf) {
//       case "low":
//         return {
//           particleCount: Math.min(particleCount * 0.3, 60), // Drastically reduce particles on mobile
//           targetFPS: 30,
//           skipFrames: 2, // Skip every 2nd frame
//           simplifiedShaders: true,
//           disableRotation: true,
//           particleBaseSize: particleBaseSize * 0.7,
//         };
//       case "medium":
//         return {
//           particleCount: Math.min(particleCount * 0.6, 120),
//           targetFPS: 45,
//           skipFrames: 1,
//           simplifiedShaders: false,
//           disableRotation: false,
//           particleBaseSize: particleBaseSize * 0.85,
//         };
//       default: // high
//         return {
//           particleCount,
//           targetFPS: 60,
//           skipFrames: 0,
//           simplifiedShaders: false,
//           disableRotation,
//           particleBaseSize,
//         };
//     }
//   }, [particleCount, disableRotation, particleBaseSize]);

//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;

//     // WebGL context with mobile-optimized settings
//     const renderer = new Renderer({
//       depth: false,
//       alpha: true,
//       antialias: false, // Disable antialiasing on mobile
//       powerPreference: "high-performance",
//     });

//     const gl = renderer.gl;
//     container.appendChild(gl.canvas);
//     gl.clearColor(0, 0, 0, 0);

//     // Enable extensions for better mobile performance
//     const extVAO = gl.getExtension("OES_vertex_array_object");
//     const extInstancedArrays = gl.getExtension("ANGLE_instanced_arrays");

//     const camera = new Camera(gl, { fov: 15 });
//     camera.position.set(0, 0, cameraDistance);

//     const resize = () => {
//       const width = container.clientWidth;
//       const height = container.clientHeight;

//       // Limit resolution on mobile devices
//       const pixelRatio = Math.min(
//         window.devicePixelRatio,
//         performanceConfig.targetFPS < 60 ? 1 : 2
//       );

//       renderer.setSize(width, height);
//       gl.canvas.style.width = width + "px";
//       gl.canvas.style.height = height + "px";

//       camera.perspective({ aspect: width / height });
//     };

//     let resizeTimeout;
//     const debouncedResize = () => {
//       clearTimeout(resizeTimeout);
//       resizeTimeout = setTimeout(resize, 100);
//     };

//     window.addEventListener("resize", debouncedResize, { passive: true });
//     resize();

//     // Throttled mouse move handler
//     let mouseMoveTimeout;
//     const handleMouseMove = (e) => {
//       if (mouseMoveTimeout) return;

//       mouseMoveTimeout = setTimeout(() => {
//         const rect = container.getBoundingClientRect();
//         const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
//         const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
//         mouseRef.current = { x, y };
//         mouseMoveTimeout = null;
//       }, 16); // ~60fps throttling
//     };

//     if (moveParticlesOnHover && performanceConfig.targetFPS >= 45) {
//       container.addEventListener("mousemove", handleMouseMove, {
//         passive: true,
//       });
//     }

//     // Generate optimized particle data
//     const count = performanceConfig.particleCount;
//     const positions = new Float32Array(count * 3);
//     const randoms = new Float32Array(count * 2); // Reduced from 4 to 2
//     const colors = new Float32Array(count * 3);
//     const palette =
//       particleColors && particleColors.length > 0
//         ? particleColors
//         : defaultColors;

//     // Pre-calculate particle positions for better performance
//     for (let i = 0; i < count; i++) {
//       // Use more efficient distribution
//       const theta = Math.random() * Math.PI * 2;
//       const phi = Math.acos(2 * Math.random() - 1);
//       const r = Math.cbrt(Math.random());

//       const x = r * Math.sin(phi) * Math.cos(theta);
//       const y = r * Math.sin(phi) * Math.sin(theta);
//       const z = r * Math.cos(phi);

//       positions.set([x, y, z], i * 3);
//       randoms.set([Math.random(), Math.random()], i * 2);

//       const col = hexToRgb(palette[Math.floor(Math.random() * palette.length)]);
//       colors.set(col, i * 3);
//     }

//     const geometry = new Geometry(gl, {
//       position: { size: 3, data: positions },
//       random: { size: 2, data: randoms },
//       color: { size: 3, data: colors },
//     });

//     const program = new Program(gl, {
//       vertex,
//       fragment,
//       uniforms: {
//         uTime: { value: 0 },
//         uSpread: { value: particleSpread },
//         uBaseSize: { value: performanceConfig.particleBaseSize },
//         uAlphaParticles: { value: alphaParticles ? 1 : 0 },
//       },
//       transparent: true,
//       depthTest: false,
//       depthWrite: false,
//     });

//     const particles = new Mesh(gl, { mode: gl.POINTS, geometry, program });

//     let frameCount = 0;
//     let elapsed = 0;
//     const frameInterval = 1000 / performanceConfig.targetFPS;

//     const update = (currentTime) => {
//       rafId.current = requestAnimationFrame(update);

//       // Frame skipping for low-end devices
//       if (performanceConfig.skipFrames > 0) {
//         frameCount++;
//         if (frameCount % (performanceConfig.skipFrames + 1) !== 0) {
//           return;
//         }
//       }

//       // FPS limiting
//       if (currentTime - lastFrameTime.current < frameInterval) {
//         return;
//       }

//       const deltaTime = currentTime - lastFrameTime.current;
//       lastFrameTime.current = currentTime;
//       elapsed += deltaTime * speed;

//       program.uniforms.uTime.value = elapsed * 0.001;

//       // Simplified hover effect for mobile
//       if (moveParticlesOnHover && performanceConfig.targetFPS >= 45) {
//         particles.position.x = -mouseRef.current.x * particleHoverFactor * 0.5;
//         particles.position.y = -mouseRef.current.y * particleHoverFactor * 0.5;
//       }

//       // Simplified rotation for mobile
//       if (!performanceConfig.disableRotation) {
//         const rotationSpeed = speed * 0.5;
//         particles.rotation.z += 0.005 * rotationSpeed;

//         // Only add complex rotation on higher-end devices
//         if (performanceConfig.targetFPS >= 45) {
//           particles.rotation.x = Math.sin(elapsed * 0.0001) * 0.05;
//           particles.rotation.y = Math.cos(elapsed * 0.0002) * 0.075;
//         }
//       }

//       renderer.render({ scene: particles, camera });
//     };

//     rafId.current = requestAnimationFrame(update);

//     return () => {
//       window.removeEventListener("resize", debouncedResize);
//       if (moveParticlesOnHover) {
//         container.removeEventListener("mousemove", handleMouseMove);
//       }
//       if (rafId.current) {
//         cancelAnimationFrame(rafId.current);
//       }
//       clearTimeout(resizeTimeout);
//       clearTimeout(mouseMoveTimeout);

//       if (container.contains(gl.canvas)) {
//         container.removeChild(gl.canvas);
//       }

//       // Clean up WebGL resources
//       geometry.remove();
//       program.remove();
//     };
//   }, [
//     particleSpread,
//     speed,
//     moveParticlesOnHover,
//     particleHoverFactor,
//     alphaParticles,
//     cameraDistance,
//     performanceConfig,
//     particleColors,
//   ]);

//   return (
//     <div
//       ref={containerRef}
//       className={`relative w-full h-full ${className}`}
//       style={{
//         willChange: "transform",
//         transform: "translateZ(0)", // Force hardware acceleration
//       }}
//     />
//   );
// };

// export default Particles;
