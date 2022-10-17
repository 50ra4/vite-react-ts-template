import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: '@/components', replacement: '/src/presentation/components' },
      { find: 'src', replacement: '/src' },
    ],
  },
  plugins: [react()],
});
