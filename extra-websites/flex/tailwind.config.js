/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        brand: {
          cyan: '#72d6ed',
          yellow: '#fcd783',
          dark: '#0a0b10',
        },
      },
    },
  },
  plugins: [],
}
