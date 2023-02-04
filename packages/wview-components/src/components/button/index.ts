import type { App } from 'vue'

import wButton from './wButton.vue'

wButton.install = (app: App) => {
  app.component(wButton.name, wButton)
}

export default wButton
