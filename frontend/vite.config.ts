import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePluginFonts } from 'vite-plugin-fonts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // ...
    VitePluginFonts({
      google: {
        families: [
          {
            name: 'Montserrat',
            styles: 'wght@400;700'
          },
          {
            name: 'Playfair Display',
            styles: 'wght@400;700'
          }
        ]
      }
    }),
    // ...
    react()
  ]
})
