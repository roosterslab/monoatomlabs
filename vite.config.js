import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Allow Layer-2 semantic authoring to import the same specifiers
      // as the client delivery package (where these are real packages).
      '@monoatom/primitives': resolve(import.meta.dirname, 'src/primitives/index.js'),
      '@monoatom/sections': resolve(import.meta.dirname, 'src/entries/sections.js'),
      '@monoatom/ui': resolve(import.meta.dirname, 'src/entries/ui.js'),
      '@monoatom/calculators': resolve(import.meta.dirname, 'src/entries/calculators.js'),
    },
  },
})
