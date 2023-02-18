import type { App } from 'vue'

import wTab from './wTab.vue'

wTab.install = (app: App) => {
  app.component(wTab.name, wTab)
}

export default wTab
