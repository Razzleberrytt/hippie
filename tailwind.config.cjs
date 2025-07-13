/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        vapor: ['"Press Start 2P"', 'monospace'],
        synth: ['"Orbitron"', 'sans-serif'],
      },
      colors: {
        neon: {
          pink: '#FF6EC7',
          cyan: '#00FFFF',
          purple: '#8A2BE2',
        },
      },
      backgroundImage: {
        'vapor-gradient': 'linear-gradient(135deg, #8A2BE2 0%, #FF6EC7 50%, #00FFFF 100%)',
      },
      boxShadow: {
        neon: '0 0 10px #FF6EC7, 0 0 20px #FF6EC7, 0 0 30px #FF6EC7',
      },
    },
  },
  plugins: [],
};
