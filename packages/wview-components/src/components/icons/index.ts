import type { App } from 'vue'

import wIcon from './wicon.vue'

wIcon.install = function (app: App) {
  app.component(wIcon.name, wIcon)
  return app
}

export default wIcon
