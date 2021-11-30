const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      blue: colors.blue,
      red: colors.red,
      pastel: {
        blue: '#93B5C6',
        gray: '#C9CCD5',
        pink: '#E4D8DC',
        cream: '#FFE3E3'
      },
      night: {
        black: '#151515',
        purple: '#301B3F',
        gray: '#3C415C',
        light: '#B4A5A5'
      },
      dark: {
        primary: '#D4ECDD',
        secondary: '#345B63',
      },
      light: {
        primary: '#152D35',
        secondary: '#112031'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
