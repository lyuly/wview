import { ExtractPropTypes } from 'vue'

export const selectProps = {
  name: {
    type: String,
    default: ''
  }
}

export type SelectProps = ExtractPropTypes<typeof selectProps>
