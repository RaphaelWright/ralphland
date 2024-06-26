// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // or your custom output directory
  },
  // Ensure the fallback routing for SPA
  server: {
    historyApiFallback: true,
  }
});
