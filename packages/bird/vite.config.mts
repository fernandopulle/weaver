import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import pkg from './package.json';


export default defineConfig(({mode}) => {
  console.log(`Building in ${mode} mode...`);

  const __DEV__ = mode !== 'production';

  return {

    server: {
      port: pkg.dev['dev-server-port'],
      warmup: {
       clientFiles: [
        'src/root.tsx'
      ],
      },
    },

    plugins: [react()],

    build: {
      outDir: 'dist',
      rollupOptions: {
        input: 'src/entry.main.ts',
        output: {
          entryFileNames: 'entry.main.js',
          chunkFileNames: 'chunks/[name].js',
          assetFileNames: 'assets/[name].[ext]',
        },
      },
    },
    worker:{
      format: 'es'
    },
  };
});

