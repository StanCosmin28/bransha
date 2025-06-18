import StarsBackground from "./StarsBackground";
import ShootingStars from "./ShootingStars";

export default function BackgroundWrapper({ children }) {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <StarsBackground />
        <ShootingStars />
      </div>

      {/* Foreground (content) */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
