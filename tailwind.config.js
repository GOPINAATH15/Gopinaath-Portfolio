/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: "#000000", // pitch-black to match photo background
          soft: "#0E0E10",    // sleek dark gray elevation
          deep: "#030303",    // footer and recessed layers
        },
        accent: {
          DEFAULT: "#F8FAFC", // titanium bright white
          light: "#38BDF8",   // vibrant ice blue
          dim: "#0284C7",     // deep ice blue
        },
        signal: "#38BDF8",   // ice blue highlight
        ink: {
          DEFAULT: "#F1F5F9", // bright text for high contrast
          muted: "#94A3B8",   // muted text
          faint: "#475569",   // dark slate faint text
        },
        line: "#1F1F24",     // dark thin separator line
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(0,0,0,0.6)",
        glow: "0 0 40px rgba(56,189,248,0.20)",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: 1 },
          "50%, 100%": { opacity: 0 },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        floaty: "floaty 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
