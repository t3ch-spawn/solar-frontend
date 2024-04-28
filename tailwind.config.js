/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito", "sans"],
      },
      colors: {
        "theme-orange": "#ED5C15",
        "theme-bg": "#0C0C0F",
      },
      backgroundImage: {
        filter:
          "linear-gradient(180deg, rgba(12, 12, 15, 0.31) 30%, #0C0C0F 100%)",
        "theme-gradient":
          "linear-gradient(135deg, #FF7937 0%, #ED5C15 52%, rgba(237, 92, 21, 0.4) 100%)",
      },
      animation: {
        marquee: "marquee 15s linear infinite",
        swap: "swap 15s linear infinite",
        GFG: "GFG 5s infinite linear",
        GFGRev: "GFGRev 5s infinite linear",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        swap: {
          "0%, 50%": {
            left: "0%",
          },
          "50.01%, 100%": {
            left: "100%",
          },
        },
        GFGRev: {
          from: {
            transform: "rotate(0deg) translateY(10px) rotate(0deg)",
          },
          to: {
            transform: "rotate(-360deg) translateY(10px) rotate(360deg)",
          },
        },
        GFG: {
          from: {
            transform: "rotate(0deg) translateY(10px) rotate(0deg)",
          },
          to: {
            transform: "rotate(360deg) translateY(10px) rotate(-360deg)",
          },
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
