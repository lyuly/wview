import { resolve } from 'path'
import { defineConfig } from 'vitepress'
import MarkitDownInclude from 'markdown-it-include'

export default defineConfig({
  // vue配置
  vue: {
    reactivityTransform: true
  },

  // vite配置
  vite: {
    optimizeDeps: {
      exclude: [],
      include: ['wview-components'],
      force: true
    },
    server: {
      host: true,
      fs: {
        allow: ['../..']
      }
    },
    resolve: {
      alias: [
        { find: '@wview', replacement: resolve(__dirname, '../../../wview-components') },
        { find: '@', replacement: resolve(__dirname, '../../../wview-components/src') }
      ]
    },
    json: {
      stringify: true
    },
    build: {
      sourcemap: false,
      chunkSizeWarningLimit: 16000
    },
    ssr: {
      noExternal: ['wview-components']
    }
  },

  // vitepress配置
  srcDir: './src',
  base: '/',
  title: 'Wview Components',
  description: 'A Lightweight, flexible & customizable UI library for Vue3',
  head: [['meta', { name: 'author', content: '什么队' }]],

  // 插件配置
  markdown: {
    config(md) {
      md.use(MarkitDownInclude)
    }
  },

  themeConfig: {
    nav: [
      {
        text: 'Overview',
        link: 'index',
        activeMatch: 'index'
      }
    ]
  }
})
