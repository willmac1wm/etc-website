import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@content': path.resolve(__dirname, './content'),
    },
  },
  // Make sure content files are included in the build
  assetsInclude: ['**/*.md', '**/*.json'],
  build: {
    outDir: 'dist',
    // Copy admin folder to dist
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
    },
  },
  // Serve content files during development
  publicDir: 'public',
});
