import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})

const config = {
  build: {
    rollupOptions: {
      external: ['@fortawesome/react-fontawesome']
    }
  }
};

export default config;
