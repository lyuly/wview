import { ExtractPropTypes } from 'vue'
export const iconProps = {
  name: {
    type: String
  },
  dot: {
    type: Boolean
  },
  badge: {
    type: String
  }
}
export type IconProps = ExtractPropTypes<typeof iconProps>
