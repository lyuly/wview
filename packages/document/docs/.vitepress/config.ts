import { resolve } from 'path'
import { defineConfig } from 'vitepress'
import MarkitDownInclude from 'markdown-it-include'
import DefineOptions from 'unplugin-vue-define-options/vite'

const production = process.env.NODE_ENV === 'production'
const site = production ? 'https://vanilla-components.com' : 'http://localhost:5173'
const title = 'Wview Components'
const description = 'A lightweight, flexible & customizable UI library for Vue 3, styled with SCSS'

const navQuickStart = [
  { text: 'Introduction', link: '/guide/introduction' },
  { text: 'Installation', link: '/guide/quick-start' },
  { text: 'Configuration', link: '/guide/configuration' },
  { text: 'Variants & Usage', link: '/guide/variants' },
  { text: 'Shared Props', link: '/guide/props' }
]

export default defineConfig({
  // vue配置
  vue: {
    reactivityTransform: true
  },

  // vite配置
  vite: {
    optimizeDeps: {
      exclude: [],
      include: ['@wview-components'],
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
    plugins: [DefineOptions()],
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
  head: [
    ['meta', { name: 'author', content: '什么队' }],
    ['meta', { name: '关键字', content: '组件, vue' }],
    ['meta', { rel: 'icon', type: 'image/svg+xml' }],
    ['meta', { name: 'author', content: 'Flavorly' }],
    [
      'meta',
      { name: 'keywords', content: 'components, vue, headless-ui, variantjs, datatables, tailwind' }
    ],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/symbol-gradient.svg' }],
    ['meta', { name: 'HandheldFriendly', content: 'True' }],
    ['meta', { name: 'MobileOptimized', content: '320' }],
    ['meta', { name: '_old_theme-color', content: '#d8b4fe' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:site', content: site }],
    ['meta', { name: 'twitter:title', value: title }],
    ['meta', { name: 'twitter:description', value: description }],
    ['meta', { name: 'twitter:image', content: '/seo.png' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'en_US' }],
    ['meta', { property: 'og:site', content: site }],
    ['meta', { property: 'og:site_name', content: title }],
    ['meta', { property: 'og:title', content: title }],
    ['meta', { property: 'og:image', content: '/seo.png' }],
    ['meta', { property: 'og:description', content: description }]
  ],

  // 插件配置
  markdown: {
    config(md) {
      md.use(MarkitDownInclude)
    }
  },

  themeConfig: {
    nav: [
      { text: '概览', items: navQuickStart },
      {
        text: '指南',
        link: '/guide/quick-start',
        activeMatch: '/guide/quick-start'
      },
      { text: 'Components', link: '/guide/components-list', activeMatch: '/guide/components-list' },
      { text: 'v0.0.0', link: 'https://github.com/lyuly/wview' }
    ]
  }
})
