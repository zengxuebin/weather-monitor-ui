import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    host: '0.0.0.0',
    proxy: {
      '/weather-monitor': {
        target: 'http://localhost:8080/weather-monitor/',
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/weather-monitor/, '')
      }
    }
  }
})
