import { ExtractPropTypes } from 'vue'

export const IconSize = ['large', 'small', 'mini']

export const iconProps = {
  name: {
    type: String
  },
  dot: {
    type: Boolean
  },
  badge: {
    type: String
  },
  loading: {
    type: Boolean
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
    validator(value: string) {
      return IconSize.includes(value)
    }
  }
}
export type IconProps = ExtractPropTypes<typeof iconProps>
