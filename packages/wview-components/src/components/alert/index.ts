import type { App } from 'vue'

import wAlert from './wAlert.vue'

wAlert.install = (app: App) => {
  app.component(wAlert.name, wAlert)
}

export default wAlert
