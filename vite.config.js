import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        button: resolve(__dirname, 'src/button/index.html'),
        children: resolve(__dirname, 'src/children/index.html'),
        form: resolve(__dirname, 'src/form/index.html'),
        fromchildtoparent: resolve(__dirname, 'src/fromchildtoparent/index.html'),
        ignore: resolve(__dirname, 'src/ignore/index.html'),
        list: resolve(__dirname, 'src/list/index.html'),
        renderprops: resolve(__dirname, 'src/renderprops/index.html'),
        rerender: resolve(__dirname, 'src/rerender/index.html'),
        usememo: resolve(__dirname, 'src/usememo/index.html'),
      },
    },
    minify: false,
  },
  plugins: [react()],
});
