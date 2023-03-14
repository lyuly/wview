import { ExtractPropTypes } from 'vue'

export interface breadcrumbOptions {
  label?: string
  to?: string
  active?: boolean
}

export const breadcrumbProps = {
  className: String,
  options: Array<breadcrumbOptions>,
  iconType: String
}

export type BreadcrumbProps = ExtractPropTypes<typeof breadcrumbProps>
