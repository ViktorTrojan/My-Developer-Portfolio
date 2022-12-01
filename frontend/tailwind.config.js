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
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        lightblue: '#E3EFF2',
        whiteblue: '#F0F0FE',
        navbarwhite: 'rgb(250,250,254)',
        consolered: '#E63946',
        orange: '#FF6B35',
      }
    },
  },
  plugins: [],
});
