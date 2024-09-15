import { defineConfig } from 'vite';

export default defineConfig({
  base: './',  // Ensures relative paths
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: '/path/to/index.html',
    },
  },
});
