import type { App } from 'vue'

import wTab from './src/wTab.vue'

wTab.install = (app: App) => {
  app.component(wTab.name, wTab)
}

export default wTab
