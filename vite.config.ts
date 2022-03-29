import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import pkg from './package.json'

export default defineConfig({
  plugins: [vue(), dts()],
  test: {
    environment: 'happy-dom',
  },
  build: {
    lib: {
      entry: './src/main.ts',
      formats: ['es', 'umd'],
      name: pkg.name,
      fileName: format => `main.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
