import DefaultTheme from 'vitepress/theme'
import './custom.css'
import 'wviewui/dist/styles.css'
import { EnhanceAppContext } from 'vitepress'
import vitepressMusic from 'vitepress-plugin-music'
import 'vitepress-plugin-music/lib/css/index.css'

const playlist = [
  {
    name: '群青',
    author: 'YOASOBI',
    file: '/群青.mp3',
  }
]

export default {
  ...DefaultTheme,
  enhanceApp(ctx: EnhanceAppContext) {
    vitepressMusic(playlist)
  }
}
