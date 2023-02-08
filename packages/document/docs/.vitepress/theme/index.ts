import DefaultTheme from 'vitepress/theme'
import './custom.css'
import 'wview/dist/styles.css'
import wv from 'wview'
import { EnhanceAppContext } from 'vitepress'

export default {
  ...DefaultTheme,
  enhanceApp(ctx: EnhanceAppContext) {
    DefaultTheme.enhanceApp(ctx)
    ctx.app.use(wv as any)
  }
}
