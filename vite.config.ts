import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/devoptima-landing/',
  define: {
    'process.env.PUBLIC_URL': JSON.stringify('/devoptima-landing'),
  },
});
