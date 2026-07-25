import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server:{
    proxy : {
      '/api' : 'https://react-node-3944.vercel.app/'
    },
  },
  plugins: [react()],
})
