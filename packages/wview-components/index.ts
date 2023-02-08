import components from './src/index'
import { App } from 'vue'
export * from './src/index'

export default {
  install: (app: App) => {
    components.forEach((c) => app.use(c))
  }
}
