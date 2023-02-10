const { GradientTexture } = require('@react-three/drei')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'md': '960px'
    },
    extend: {
      fontFamily: {
        noto: ["Noto Sans","sans-serif"],
        Fjalla: ["Fjalla One","sans-serif"],
      },
      colors: {
        primary: "#074031",
        menuText: "#FFFFFF",
        menu:"#074031",
        cover:"#074031",
        border:"#122132",
        red:"#ff0a65",
      },
      backgroundImage: {
        gradient:"linear-gradient(180deg, rgba(168, 255, 120, 1) 0%, rgba(120, 255, 214, 1) 100%)",
      },
      animation: {
        cover: "cover 0.5s forwards ease-out"
      },
      keyframes: {
        cover: {
          "100%": { width: "100%" },
        }
      }
    },
  },
  plugins: [],
}
