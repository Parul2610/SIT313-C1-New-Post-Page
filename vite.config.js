import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Semantic UI's CSS contains selectors that lightningcss rejects during minification
    cssMinify: false,
  },
})
