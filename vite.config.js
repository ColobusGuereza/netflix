// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/netflix/', 
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern' // use modern Sass API
      }
    }
  }
});
