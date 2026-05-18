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
        ink: { 950: '#050505', 900: '#111', 800: '#1a1a1a', 700: '#222', 600: '#333' },
        ceraphene: '#64748b',
        graphacrete: '#d97706',
        graffisol: '#f59e0b',
        hdgpe: '#06b6d4',
      },
    },
  },
  plugins: [],
}
