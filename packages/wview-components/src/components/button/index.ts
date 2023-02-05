import type { App } from 'vue'

<<<<<<< HEAD
import Button from './button'
=======
import wButton from './wButton.vue'
>>>>>>> upstream/main

wButton.install = (app: App) => {
  app.component(wButton.name, wButton)
}

export default wButton
