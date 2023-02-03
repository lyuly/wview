import { ExtractPropTypes } from 'vue'

export const buttonType = ['primary', 'success', 'info', 'warning', 'danger', 'text']

export const buttonProps = {
  type: {
    type: String,
    validator (value: string) {
      return buttonType.includes(value)
    }
  }
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
