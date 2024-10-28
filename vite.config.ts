import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import SsrBoost from '@lomray/vite-ssr-boost/plugin';
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    SsrBoost({
      /**
       * index.html file path
       */
      indexFile: 'index.html', // default: index.html
      /**
       * Server entrypoint file
       */
      serverFile: './src/server.ts', // default: server.ts
      /**
       * Client entrypoint file
       */
      clientFile: './src/client.ts', // default: client.ts
      /**
       * Add tsconfig aliases to vite config aliases
       */
      tsconfigAliases: true, // default: true
    }),
    react(),
  ],
});
