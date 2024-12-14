import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        rerender: resolve(__dirname, 'src/rerender/index.html'),
      },
    },
    minify: false,
  },
  plugins: [react()],
});
