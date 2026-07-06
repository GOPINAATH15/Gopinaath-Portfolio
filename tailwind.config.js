/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: "#0F172A", // deep navy, requested background
          soft: "#141E33",    // panel elevation
          deep: "#0A1122",    // recessed / footer
        },
        accent: {
          DEFAULT: "#2563EB", // requested primary accent
          light: "#60A5FA",
          dim: "#1D4ED8",
        },
        signal: "#22D3AA", // secondary accent: terminal-green/teal, used sparingly for "online/active" cues
        ink: {
          DEFAULT: "#E2E8F0",
          muted: "#94A3B8",
          faint: "#64748B",
        },
        line: "#1E293B",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(148,163,184,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.06) 1px, transparent 1px)",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(0,0,0,0.35)",
        glow: "0 0 40px rgba(37,99,235,0.25)",
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
