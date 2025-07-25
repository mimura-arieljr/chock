import { defineConfig } from 'vite'
import { visualizer } from 'rollup-plugin-visualizer';
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import svgr from "vite-plugin-svgr"
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), svgr(), visualizer()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          router: ['react-router-dom'],
          framer: ['framer-motion'],
          gsap: ['gsap'],
        },
      },
    },
  },
})
