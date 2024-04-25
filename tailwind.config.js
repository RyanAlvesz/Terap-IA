/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'standard': ['Inconsolata', 'monospace'],
        'typewriter': ['Libre Caslon Display', 'serif'],
        'handwritten': ['Liu Jian Mao Cao', 'cursive']
      },
      colors: {
        'light-gray': '#EFEBE8',
        'gray': '#67625C',
        'yellow-gray': '#9E948A',
        'gray-gradient': '#8F887E',
        'dark-gray': '#272523',
        'dark-gray-gradient': '#8D867D'
      }
    },
  },
  plugins: [],
}

