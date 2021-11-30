const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  mode: 'jit',
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.blueGray,
      blue: colors.sky,
      indigo: colors.indigo,
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
