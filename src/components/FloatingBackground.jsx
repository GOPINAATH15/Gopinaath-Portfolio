import { useEffect, useState } from "react";

const EMOJIS = ["☕", "⚛️", "⚡", "🎨", "🌐", "</>", ""];

export default function FloatingBackground() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate 24 floating particles with randomized dimensions, offsets, animations and depth-of-field blur
    const generated = Array.from({ length: 24 }).map((_, i) => {
      const size = Math.random() * 24 + 18; // 18px to 42px
      const left = Math.random() * 100; // 0% to 100% of viewport width
      const top = Math.random() * 100; // 0% to 100% of viewport height
      const duration = Math.random() * 35 + 25; // 25s to 60s for slow, subtle drift
      const delay = Math.random() * -60; // negative delay so particles start scattered in mid-animation
      const opacity = Math.random() * 0.07 + 0.04; // subtle styling (4% to 11% opacity)
      const emoji = EMOJIS[i % EMOJIS.length];
      const isBlurred = Math.random() > 0.6; // 40% chance of depth-of-field blur

      return {
        id: i,
        emoji,
        style: {
          position: "absolute",
          left: `${left}%`,
          top: `${top}%`,
          fontSize: `${size}px`,
          opacity: opacity,
          animation: `float-around-${i % 4} ${duration}s linear infinite`,
          animationDelay: `${delay}s`,
          transformOrigin: "center",
          userSelect: "none",
        },
        className: `${isBlurred ? "blur-[1.5px]" : "blur-none"} select-none pointer-events-none transition-opacity duration-1000`,
      };
    });
    setParticles(generated);
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      <style>{`
        @keyframes float-around-0 {
          0% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(50px, -80px) rotate(120deg); }
          66% { transform: translate(-30px, -40px) rotate(240deg); }
          100% { transform: translate(0, 0) rotate(360deg); }
        }
        @keyframes float-around-1 {
          0% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-60px, 80px) rotate(-180deg); }
          100% { transform: translate(0, 0) rotate(-360deg); }
        }
        @keyframes float-around-2 {
          0% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(-40px, -60px) rotate(90deg); }
          66% { transform: translate(40px, 40px) rotate(180deg); }
          100% { transform: translate(0, 0) rotate(360deg); }
        }
        @keyframes float-around-3 {
          0% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(70px, 40px) rotate(180deg); }
          100% { transform: translate(0, 0) rotate(360deg); }
        }
      `}</style>
      {particles.map((p) => (
        <span key={p.id} style={p.style} className={p.className}>
          {p.emoji}
        </span>
      ))}
    </div>
  );
}
