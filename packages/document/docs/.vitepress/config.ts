import { resolve } from 'path'
import { defineConfig } from 'vitepress'
import MarkitDownInclude from 'markdown-it-include'
import DefineOptions from 'unplugin-vue-define-options/vite'

const production = process.env.NODE_ENV === 'production'
const site = production ? 'https://wview-wiki.vercel.app' : 'http://localhost:3000'
const title = 'wview组件库'
const description = '轻量，灵活，可定制化，采用中国色的Vue3组件库'

const navQuickStart = [
  { text: '介绍', link: '/guide/introduction' },
  { text: '安装', link: '/guide/install' },
  { text: '配置', link: '/guide/configuration' },
  { text: '快速开始', link: '/guide/quick-start' },
  { text: '共享', link: '/guide/props' }
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
      include: ['wview'],
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
        { find: '@', replacement: resolve(__dirname, '../src') }
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
      noExternal: ['wview']
    }
  },

  // vitepress配置
  srcDir: './src',
  base: '/',
  title: 'wview组件库',
  description: '轻量，灵活，定制化的Vue3组件库',
  lastUpdated: true,
  head: [
    ['meta', { name: 'author', content: '什么队' }],
    ['meta', { name: '关键字', content: '组件, vue' }],
    ['meta', { rel: 'icon', type: 'image/svg+xml' }],
    [
      'meta',
      { name: 'keywords', content: 'components, vue, headless-ui, variantjs, datatables, tailwind' }
    ],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/symbol.svg' }],
    ['meta', { name: 'HandheldFriendly', content: 'True' }],
    ['meta', { name: 'MobileOptimized', content: '320' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:site', content: site }],
    ['meta', { name: 'twitter:title', value: title }],
    ['meta', { name: 'twitter:description', value: description }],
    ['meta', { name: 'twitter:image', content: '/seo.png' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }],
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
    },
    // 行号
    lineNumbers: true
  },

  themeConfig: {
    algolia: {
      appId: 'IBOC4FAP6F',
      apiKey: 'f595e263806c5ab65669d66b89b7825d',
      indexName: 'wview-wiki'
    },
    lastUpdatedText: '最后更新于',
    logo: '/symbol.svg',
    nav: [
      { text: '概览', items: navQuickStart },
      {
        text: '指南',
        link: '/guide/quick-start',
        activeMatch: '/guide/quick-start'
      },
      { text: '组件', link: '/guide/components-list', activeMatch: '/guide/components-list' },
      { text: 'v0.0.0', link: 'https://github.com/lyuly/wview' }
    ],

    sidebar: {
      '/': [
        {
          text: '开始',
          collapsible: true,
          items: navQuickStart
        },
        {
          text: '基础组件',
          collapsible: true,
          items: [
            { text: 'Button 按钮', link: '/components/basic/button' },
            { text: 'Color 颜色', link: '/components/basic/color' },
            { text: 'Icon 图标', link: '/components/basic/icon' },
            { text: 'Input 输入框', link: '/components/basic/input' },
            { text: 'Progress 进度条', link: '/components/basic/progress' }
          ]
        },
        {
          text: 'Form 表单组件',
          collapsible: true,
          items: [
            { text: 'Form 表单', link: '/components/Form/form' },
            { text: 'Select 选择器UI', link: '/components/Form/select' },
            { text: 'Upload 上传', link: '/components/Form/upload' }
          ]
        },
        {
          text: 'interaction 交互组件',
          collapsible: true,
          items: [{ text: 'modal 弹窗', link: '/components/interaction/modal' }]
        },
        {
          text: 'Navigation 导航组件',
          collapsible: true,
          items: [{ text: 'tab 标签页', link: '/components/navigation/tab/tab' }]
        }
      ]
    }
  }
})
