import type { App, Plugin } from 'vue'

<<<<<<< HEAD
import Button from './button.tsx'
=======
import Button from './button'
>>>>>>> 1feb1cd636c4493ad14056a2140b1a61c77b3850

Button.install = function (app: App) {
  app.component(Button.name, Button)
  return app
}

export default Button as typeof Button & Plugin & {}
