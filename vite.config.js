import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        create: path.resolve(__dirname, 'create-account.html'),
        login: path.resolve(__dirname, 'login.html')
      }
    }
  }
});
