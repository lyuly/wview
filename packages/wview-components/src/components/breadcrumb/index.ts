import type { App } from 'vue'

import wBreadcrumb from './wBreadcrumb.vue'

wBreadcrumb.install = (app: App) => {
  app.component(wBreadcrumb.name, wBreadcrumb)
}

export default wBreadcrumb
