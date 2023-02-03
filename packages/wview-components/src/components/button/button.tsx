import { defineComponent } from 'vue'
import { buttonProps } from './types'

export default defineComponent({
  name: 'WButton',
  props: buttonProps,
  setup () {
    return () => <button>确 定</button>
  }
})
