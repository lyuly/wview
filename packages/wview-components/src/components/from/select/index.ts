import type { App } from 'vue'

import wSelect from './wSelect.vue'

wSelect.install = (app: App) => {
  app.component(wSelect.name, wSelect)
}

export default wSelect
