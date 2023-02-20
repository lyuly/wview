import DefaultTheme from 'vitepress/theme'
import './custom.css'
import 'wviewui/dist/styles.css'
import { EnhanceAppContext } from 'vitepress'

export default {
  ...DefaultTheme,
  enhanceApp(ctx: EnhanceAppContext) {
  }
}
