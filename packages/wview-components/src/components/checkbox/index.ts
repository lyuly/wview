import type { App } from 'vue'

import wCheckbox from './wCheckbox.vue'

wCheckbox.install = (app: App) => {
  app.component(wCheckbox.name, wCheckbox)
}

export default wCheckbox
