import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    babel({ presets: [reactCompilerPreset()] })
  ],

   server: {
    proxy: {
      "/users": {
        target:   'http://192.168.100.103:8000/users/user-count/',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})