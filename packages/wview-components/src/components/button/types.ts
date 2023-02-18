import { ExtractPropTypes } from 'vue'

export const ButtonType = ['primary', 'success', 'info', 'warning', 'danger', 'default', 'text']

export const ButtonSize = ['large', 'small', 'mini']

export const buttonProps = {
  type: {
    type: String,
    validator (value: string) {
      return ButtonType.includes(value)
    }
  },
  plain: Boolean,
  round: Boolean,
  circle: Boolean,
  disabled: Boolean,
  icon: String,
  iconPosition: String,
  loading: Boolean,
  size: {
    type: String,
    validator (value: string) {
      return ButtonSize.includes(value)
    }
  }
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
