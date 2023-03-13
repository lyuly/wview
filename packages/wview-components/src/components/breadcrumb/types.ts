import { ExtractPropTypes } from 'vue'

export interface breadcrumbOptions {
  label: String
  to: String
  active: Boolean
}

export const breadcrumbProps = {
  className: String,
  options: Array<breadcrumbOptions>,
  iconType: String
}

export type BreadcrumbProps = ExtractPropTypes<typeof breadcrumbProps>
