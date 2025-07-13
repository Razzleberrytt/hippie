
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./src/**/*.{astro,html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        vapor: ['"Press Start 2P"', ...defaultTheme.fontFamily.sans],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      colors: {
        neon: {
          pink: "#ff4ecd",
          purple: "#9c27b0",
          cyan: "#00e5ff",
        },
      },
    },
  },
  plugins: [],
};
