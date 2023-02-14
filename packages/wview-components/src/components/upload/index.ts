import type { App } from 'vue'

import wUpload from './wUpload.vue'

wUpload.install = (app: App) => {
  app.component(wUpload.name, wUpload)
}

export default wUpload
