import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/getTrips": {
        target: "http://localhost:3001",
        changeOrigin: true,
      },
      "/getTripInfo": {
        target: "http://localhost:3001",
        changeOrigin: true,
      },
      "/getTripCategories": {
        target: "http://localhost:3001",
        changeOrigin: true,
      },
      "/addTrip": {
        target: "http://localhost:3001",
        changeOrigin: true,
      },
      "/addCategory": {
        target: "http://localhost:3001",
        changeOrigin: true,
      },
      "/addPurchase": {
        target: "http://localhost:3001",
        changeOrigin: true,
      },
      "/deleteTrip": {
        target: "http://localhost:3001",
        changeOrigin: true,
      },
      "/deleteCategory": {
        target: "http://localhost:3001",
        changeOrigin: true,
      },
      "/deletePurchase": {
        target: "http://localhost:3001",
        changeOrigin: true,
      }
    }
  }
})
