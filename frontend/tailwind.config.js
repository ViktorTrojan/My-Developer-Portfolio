/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  mode: 'jit',
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    screens: {
      xs: '480px',
      sm: '576px',
      md: '780px',
      lg: '976px',
      lg2: '1200px',
      xl: '1440px'
    },
    extend: {
      boxShadow: {
        shskill: '0 0 10px 0px rgba(150, 200, 255, 0.7)',
      },
      colors: {
        lightblue: '#E3EFF2',
        whiteblue: '#F0F0FE',
        navbarwhite: 'rgb(250,250,254)',
        consolered: '#E63946',
        consoleyellow: '#FFBE0B',
        consolegreen: '#A7C957',
        orange: '#FF6B35',
        blue1: '#084d93',
        darkerBlue: '#0A2864',
        grayBlue: '#EBE1FF',
      }
    },
  },
  plugins: [],
});
