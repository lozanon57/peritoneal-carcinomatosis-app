import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/peritoneal-carcinomatosis-app/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['icons/*.png', 'icons/*.svg'],
      manifest: {
        name: 'Peritoneal Carcinomatosis & CRS+HIPEC Academy',
        short_name: 'PC Academy',
        description: 'Evidence-based CRS+HIPEC, PIPAC & peritoneal surface oncology academy — Beijing Tsinghua Changgung Hospital · HGUGM · MSKCC',
        theme_color: '#6a0f8e',
        background_color: '#26063a',
        display: 'standalone',
        orientation: 'portrait',
        scope: '/peritoneal-carcinomatosis-app/',
        start_url: '/peritoneal-carcinomatosis-app/',
        icons: [
          { src: 'icons/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'icons/icon-512.png', sizes: '512x512', type: 'image/png' },
          { src: 'icons/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' }
        ],
        shortcuts: [
          {
            name: 'Disease Search',
            url: '/peritoneal-carcinomatosis-app/#/search',
            description: 'Search PC histologies and entities'
          },
          {
            name: 'E-Learning Quiz',
            url: '/peritoneal-carcinomatosis-app/#/quiz',
            description: 'Board-level quiz on CRS+HIPEC'
          },
          {
            name: 'Clinical Algorithms',
            url: '/peritoneal-carcinomatosis-app/#/algorithms',
            description: 'CRS+HIPEC patient selection algorithms'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,json}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: { cacheName: 'google-fonts-cache', expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 } }
          }
        ]
      }
    })
  ]
})
