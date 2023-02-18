import type { App } from 'vue'

import wModal from './wModal.vue'

wModal.install = (app: App) => {
  app.component(wModal.name, wModal)
}

export default wModal
