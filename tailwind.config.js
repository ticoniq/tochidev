/** @type {import('tailwindcss').Config} */
const daisyUI = require("daisyui");
// const elements = require("tw-elements/dist/plugin.cjs");
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  daisyui: {
    themes: [
      "light",
      "dark",
    ],
  },
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        newYellow: '#EEBF63',
        newbBlue: '#90C0E8',
        newGreen: '#6FC2C5',
        newDark: '#1C1C1C',
        newDarkGray: '#2F2F2F',
        newGray: '#828282',
        newLightGray: '#E1E1E1',
        newLighterGray: '#F1F1F1',
        newDarkYello: '#CD921E',
        newDarkBlue: '#486074',
        newDarkGreen: '#386163',
      },
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
      },
      maxWidth: {
        'custom': '1100px', // Add your custom max-width value here
      },
    },
  },
  plugins: [
    daisyUI,
    // elements,
  ],
}

