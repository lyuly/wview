import type { App } from 'vue'

import wSwitch from './wSwitch.vue'

wSwitch.install = function (app: App) {
  app.component(wSwitch.name, wSwitch)
}

export default wSwitch
