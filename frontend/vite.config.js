import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  build: {
    minify: true, // Enable JS and CSS minification
    sourcemap: false, // Disable sourcemaps for production builds
    rollupOptions: {
      output: {
        // Manual chunking to split vendors and main app code
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        },
        // Define the naming pattern for chunks and assets
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]'
      }
    }
  },
  define: {
    // Define production-specific environment variables
    'process.env.NODE_ENV': JSON.stringify('production'),
    // Example: 'import.meta.env.VITE_API_URL': JSON.stringify('https://api.yourdomain.com')
  },
  // You can also specify a base public path if your app is not hosted at the root
  // base: '/my-app/',
})