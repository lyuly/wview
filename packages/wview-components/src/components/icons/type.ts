import { ExtractPropTypes } from 'vue'

export const IconSize = ['medium', 'small', 'mini']

export const iconProps = {
  name: {
    type: String
  },
  /**
   * @description icon color
   */
  color: {
    type: String
  },
  /**
   * @description icon size size x size
   */
  size: {
    type: [Number, String],
    validator (value: string) {
      return IconSize.includes(value)
    }
  }
}
export type IconProps = ExtractPropTypes<typeof iconProps>
