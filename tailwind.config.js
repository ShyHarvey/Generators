/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'russo': ['Russo One', ...defaultTheme.fontFamily.sans],
      'mononoki': ['Mononoki']
    },

    extend: {
      colors: {
        'matrix': {
          light: '#00ff41',
          DEFAULT: '#008f11',
          dark: '#003b00',
          black: ' #0d0208'
        },
      },
    },
  },
  plugins: [],
}
