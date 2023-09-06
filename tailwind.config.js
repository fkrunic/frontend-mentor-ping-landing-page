/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    screens: {
      desktop: '1440px'
    },
    fontFamily: {
      'libre-franklin': 'Libre Franklin, sans-serif'
    },
    colors: {
      'blue': 'hsl(223, 87%, 63%)',
      'pale-blue': 'hsl(223, 100%, 88%)',
      'light-red': 'hsl(354, 100%, 66%)',
      'gray': 'hsl(0, 0%, 59%)',
      'very-dark-blue': 'hsl(209, 33%, 12%)',
      'black': 'hsl(0, 0%, 0%)',
      'white': 'hsl(0, 0%, 100%)'
    },
    extend: {},
  },
  plugins: [],
}

