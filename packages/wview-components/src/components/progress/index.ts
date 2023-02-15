import type { App } from 'vue'

import WProgress from './wProgress.vue'

WProgress.install = (app: App) => {
  app.component(WProgress.name, WProgress)
}

export default WProgress
