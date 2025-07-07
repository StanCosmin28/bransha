import { useRef, useEffect, useCallback, useMemo } from "react";
import data from "../Model/data"; // Assuming this path is correct for your images

export default function MUNNHeaderComponent({
  imageSrc = "",
  description = [
    "Controlează și optimizează tot cu un tool puternic, simplu de folosit, creat pentru profesioniști și nu numai.",
  ],
  altText = "Section image",
}) {
  const canvasRef = useRef(null);
  const animationFrameId = useRef(null);

  const windowWidth = window.innerWidth;
  const PARTICLE_COUNT = windowWidth > 1024 ? 100 : 30;
  const PARTICLE_SIZE_MIN = 1.5;
  const PARTICLE_SIZE_MAX = 3.5;
  const PARTICLE_SPEED = 4;
  const LINK_DISTANCE = 120;
  const PARTICLE_COLORS = useMemo(
    () => ["#333333", "#CCCCCC", "#8BC34A", "#F44336"],
    []
  );
  const LINE_COLOR = "#E0E0E0";

  class Particle {
    constructor(x, y, vx, vy, radius, color) {
      this.x = x;
      this.y = y;
      this.vx = vx; // velocity x
      this.vy = vy; // velocity y
      this.radius = radius;
      this.color = color;
    }

    draw(ctx) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      ctx.fillStyle = this.color;
      ctx.fill();
    }

    update(canvas) {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x - this.radius < 0) this.x = canvas.width + this.radius;
      if (this.x + this.radius > canvas.width) this.x = -this.radius;
      if (this.y - this.radius < 0) this.y = canvas.height + this.radius;
      if (this.y + this.radius > canvas.height) this.y = -this.radius;
    }
  }

  const particles = useMemo(() => {
    const pArray = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const radius =
        Math.random() * (PARTICLE_SIZE_MAX - PARTICLE_SIZE_MIN) +
        PARTICLE_SIZE_MIN;
      const x = Math.random() * window.innerWidth;
      const yAdjusted =
        window.innerHeight * 0.4 + Math.random() * window.innerHeight * 0.6;

      const vx = (Math.random() - 0.5) * PARTICLE_SPEED;
      const vy = (Math.random() - 0.5) * PARTICLE_SPEED;

      let colorIndex;
      const rand = Math.random();
      if (rand < 0.7) {
        colorIndex = Math.floor(Math.random() * 2);
      } else if (rand < 0.85) {
        colorIndex = 2;
      } else {
        colorIndex = 3;
      }
      const color = PARTICLE_COLORS[colorIndex];

      pArray.push(new Particle(x, yAdjusted, vx, vy, radius, color));
    }
    return pArray;
  }, [PARTICLE_COLORS]);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    particles.forEach((particle) => {
      particle.update(canvas);
      particle.draw(ctx);
    });

    ctx.strokeStyle = LINE_COLOR;
    ctx.lineWidth = 0.5;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const p1 = particles[i];
        const p2 = particles[j];
        const distance = Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);

        if (distance < LINK_DISTANCE) {
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }
    }

    animationFrameId.current = requestAnimationFrame(draw);
  }, [particles, LINE_COLOR, LINK_DISTANCE]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles.forEach((p) => {
        p.x = Math.random() * canvas.width;
        p.y = canvas.height * 0.4 + Math.random() * canvas.height * 0.6;
      });
    };

    resizeCanvas();

    window.addEventListener("resize", resizeCanvas);

    animationFrameId.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId.current);
    };
  }, [draw, particles]);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-evenly h-screen text-black p-4 sm:p-6 md:p-8 lg:p-12 relative z-10">
      <div className="absolute w-full h-full -z-10">
        <canvas
          ref={canvasRef}
          className="w-full h-full"
          style={{ position: "absolute", top: 0, left: 0 }}
        ></canvas>
      </div>
      <div className="w-full lg:w-3/5 p-2 sm:p-4">
        <img
          src={imageSrc}
          alt={altText}
          className="w-full h-auto max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl rounded-lg object-contain mx-auto"
        />
      </div>
      <div className="w-full lg:w-2/5 p-2 sm:p-4 space-y-4 text-left">
        <div>
          <h2 className="text-3xl sm:text-5xl md:text-4xl lg:text-4xl xl:text-6xl font-bold leading-tight mb-8">
            Orice clădire are <br /> nevoie de{" "}
            <span className="font-black text-purple-500">MUNN</span>
          </h2>
        </div>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black max-w-md mb-10">
          {description}
        </p>
        <div className="max-w-full flex flex-row gap-2">
          <img className="max-w-50 w-1/2" src={data.appStore} alt="App Store" />
          <img
            className="max-w-50 w-1/2"
            src={data.googlePlay}
            alt="Google Play"
          />
        </div>
      </div>
    </div>
  );
}
