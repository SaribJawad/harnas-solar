/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      keyframes: {
        heroZoom: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.1)" },
        },
      },
      animation: {
        "hero-zoom": "heroZoom 5s linear",
      },
      scrollbar: {
        DEFAULT: {
          width: "8px",
          track: "transparent",
          thumb: "rounded bg-gray-400/50 hover:bg-gray-500/70",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
