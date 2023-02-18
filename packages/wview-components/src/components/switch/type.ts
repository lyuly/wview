import { ExtractPropTypes } from 'vue'

export const SwitchSize = ['large', 'middle', 'mini']

export const switchProps = {
  disabled: {
    type: Boolean
  },
  loading: {
    type: Boolean
  },
  color: {
    type: String
  },
  size: {
    type: String,
    default: 'middle',
    validator(value: string) {
      return SwitchSize.includes(value)
    }
  }
}

export type SwitchProps = ExtractPropTypes<typeof switchProps>
