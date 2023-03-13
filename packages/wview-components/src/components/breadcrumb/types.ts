import { ExtractPropTypes } from "vue"

export type breadcrumbOptions = {
  label: string,
  to: string,
  active: boolean
}

export interface breadcrumbProps {
  className: string
  options: breadcrumbOptions[]
  iconType?: string
}

export type BreadcrumbProps = ExtractPropTypes<typeof breadcrumbProps>