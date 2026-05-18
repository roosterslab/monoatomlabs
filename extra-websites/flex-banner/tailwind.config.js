/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Rajdhani', 'sans-serif'],
        ui: ['Outfit', 'sans-serif'],
      },
      colors: {
        ceraphene: '#64748b',
        graphacrete: '#d97706',
        graffisol: '#f59e0b',
        hdgpe: '#06b6d4',
        'ink-950': '#050505',
      },
    },
  },
  plugins: [],
}
