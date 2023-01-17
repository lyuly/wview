/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'
import * as pkg from './package.json'

const externals = [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.dependencies || {})]

export default defineConfig({
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
  resolve: {
    alias: {
      find: '@',
      replacement: resolve(__dirname, 'src')
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
