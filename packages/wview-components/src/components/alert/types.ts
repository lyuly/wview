import { ExtractPropTypes } from "vue";

export const alertType = ['default', 'success', 'warning', 'info', 'danger']
export const alertSize = ['large', 'small', 'mini']

export const alertProps = {
  type: {
    type: String,
    validator(value: string) {
      return alertType.includes(value)
    }
  },
  size: {
    type: String,
    validator(value: string) {
      return alertSize.includes(value)
    }
  }
}

export type AlertProps = ExtractPropTypes<typeof alertProps>