import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  publicDir: false,
  build: {
    lib: {
      entry: resolve(import.meta.dirname, 'src/entries/pages.js'),
      formats: ['es'],
      fileName: () => 'index.js',
    },
    rollupOptions: {
      external: [
        'react',
        'react/jsx-runtime',
        'react-dom',
        'framer-motion',
        'lucide-react',
        'react-router-dom',
        'recharts',
        '@monoatom/primitives',
        '@monoatom/sections',
      ],
    },
    outDir: 'dist-lib/pages',
    emptyOutDir: true,
    cssCodeSplit: false,
  },
})
