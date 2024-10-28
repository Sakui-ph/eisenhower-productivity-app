import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import SsrBoost from '@lomray/vite-ssr-boost/plugin';
// https://vite.dev/config/
export default defineConfig({
  plugins: [SsrBoost(), react()],
});
