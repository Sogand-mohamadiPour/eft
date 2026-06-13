import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    babel({ presets: [reactCompilerPreset()] }),

    VitePWA({
      registerType: 'autoUpdate',

      includeAssets: [
        'assets/*.png',
        'assets/*.svg'
      ],

      manifest: {
        name: 'EFT Reset',
        short_name: 'EFT Reset',
        description: 'EFT Reset Platform',
        theme_color: '#0f172a',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: '/assets/logoCut.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/assets/logoCut.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})
