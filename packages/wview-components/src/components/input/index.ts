import type { App } from 'vue'

import wInput from './wInput.vue'

wInput.install = (app: App) => {
  app.component(wInput.name, wInput)
}

export default wInput
