// 该Icon组件是由iconfont阿里巴巴组件库中以 sysbol 形式下载的
// 一个项目一个 js 文件
// 如果图标更新，那么还需要重新更新 font/js 文件
// 根据不同的 name 展示不用的图标

import type { App } from 'vue'

import IconSystem from './IconSystem.vue'
import IconArrow from './IconArrow.vue'

IconSystem.install = function (app: App) {
  app.component(IconSystem.name, IconSystem)
  return app
}

IconArrow.install = function (app: App) {
  app.component(IconArrow.name, IconArrow)
  return app
}

// TODO:将多个类型的图标作为一个整体导出----> 使用的时候只根据 name 即可展示不同的图标

export default IconSystem as typeof IconSystem & Plugin & {}
