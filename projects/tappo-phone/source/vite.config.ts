import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
import { fileURLToPath, URL } from 'node:url'

const enablePwa = process.env.VITE_ENABLE_PWA === 'true'

export default defineConfig({
  plugins: [
    vue(),
    enablePwa &&
      VitePWA({
        registerType: 'autoUpdate',
        manifest: {
          name: 'Tappo Phone',
          short_name: 'Tappo Phone',
          theme_color: '#ff8a3d',
          background_color: '#fffbf6',
          display: 'standalone',
        },
      }),
  ].filter(Boolean),
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
