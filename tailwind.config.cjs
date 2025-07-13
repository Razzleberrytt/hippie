const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        vapor: ['"PressStart2P"', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        neon: {
          pink: "#FF4CE1",
          cyan: "#0FF0FC",
          purple: "#B44CFF"
        }
      },
      animation: {
        float: "float 4s ease-in-out infinite"
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
