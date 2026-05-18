/** @type {import("tailwindcss").Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Outfit", "sans-serif"],
        mono: ["Space Grotesk", "monospace"],
      },
      colors: {
        ceraphene: "#64748b",
        graphacrete: "#d97706",
        graffisol: "#f59e0b",
        hdgpe: "#06b6d4",
      },
    },
  },
  plugins: [],
}
