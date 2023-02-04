import { defineComponent } from 'vue'

export default defineComponent({
  name: 'WButton',
  props: {
    type: {
      type: String
    },
    disabled: {
      type: String,
      default: 'false'
    }
  },
  setup (props, { slots }) {
    return () => {
      const { type, disabled } = props
      let className = ''
      switch (type) {
        case 'primary': {
          className = 'primary'
          break
        }
        case 'warn': {
          className = 'warn'
          break
        }
        case 'error': {
          className = 'error'
          break
        }
        default: {
          className = 'default'
          break
        }
      }
      if (disabled === 'true') {
        className = 'disabled'
      }

      return (
        <button class={className} disabled={Boolean(disabled)}>
          {slots.default !== undefined ? slots.default() : '确 定'}
        </button>
      )
    }
  }
})
