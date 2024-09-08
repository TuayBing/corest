import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:4500', // URL ของแบ็กเอนด์
        changeOrigin: true,
        secure: false, // ตั้งเป็น true ถ้าแบ็กเอนด์ของคุณใช้ HTTPS
      },
    },
  },
});
