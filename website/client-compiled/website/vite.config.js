import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    dedupe: ['react', 'react-dom', 'react-router-dom'],
  },
  optimizeDeps: {
    include: [
      '@monoatom/backgrounds',
      '@monoatom/ui',
      '@monoatom/calculators',
      '@monoatom/sections',
      '@monoatom/pages',
      '@monoatom/shell',
      '@monoatom/primitives',
    ],
  },
})
