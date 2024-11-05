export const FILTER_TYPE_TEXT = 'FiltersText'
export const FILTER_TYPE_SELECT = 'FiltersSelect'
export const FILTER_TYPE_RANGE = 'FiltersRange'
export const FILTER_TYPES = [FILTER_TYPE_TEXT, FILTER_TYPE_SELECT, FILTER_TYPE_RANGE] as const

export interface Filter {
  type: typeof FILTER_TYPES[number]
  title: string
  apiCriteria: string | string[]
  info?: string
  options?: string[]
}