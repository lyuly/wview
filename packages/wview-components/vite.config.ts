/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { defineConfig } from 'vite'
import path, { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import dts from 'vite-plugin-dts'
import * as pkg from './package.json'

const externals = [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.dependencies || {})]

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [
    vue(),
    vueJsx(),
    dts({
      cleanVueFileName: false,
      staticImport: false,
      skipDiagnostics: true,
      outputDir: 'dist',
      beforeWriteFile (filePath, content) {
        return {
          filePath: filePath.replace('packages/wview-components/src', ''),
          content
        }
      }
    })
  ],
  server: {
    port: 3000,
    open: true
  },
  css: {
    preprocessorOptions: {
      scss: {
        // eslint-disable-next-line @typescript-eslint/quotes
        additionalData: `@import "@/styles/color/color.scss";`
      }
    }
  },
  build: {
    minify: false,
    sourcemap: false,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'wview-components',
      fileName: (format: string) => `wview-components.${format}.js`
    },
    rollupOptions: {
      external: externals,
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
