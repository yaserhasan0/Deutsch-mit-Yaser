import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/Deutsch-mit-Yaser/', 
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Deutsch mit Yaser',
        short_name: 'DeutschYaser',
        description: 'Your companion for German grammar',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'pwa-192x192.png', // تأكد من وجود هذه الصور في مجلد public
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})
