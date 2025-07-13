/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        neon: {
          pink: "#FF4CE1",
          cyan: "#0FF0FC",
          purple: "#9F0FFF"
        }
      },
      fontFamily: {
        vapor: ["'Press Start 2P'", "cursive"]
      },
      animation: {
        float: "float 6s ease-in-out infinite"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        }
      }
    }
  },
  plugins: []
};
