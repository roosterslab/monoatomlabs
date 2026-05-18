import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  publicDir: false,
  build: {
    lib: {
      entry: resolve(import.meta.dirname, 'src/entries/shell.js'),
      formats: ['es'],
      fileName: () => 'index.js',
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime', 'react-dom', 'framer-motion', 'lucide-react', 'react-router-dom', 'recharts'],
    },
    outDir: 'dist-lib/shell',
    emptyOutDir: true,
    cssCodeSplit: false,
  },
})
