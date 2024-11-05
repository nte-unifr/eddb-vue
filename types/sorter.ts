export const SORTER_TYPE_LETTERS = 'LETTERS'
export const SORTER_TYPE_NUMBERS = 'NUMBERS'
export const SORTER_TYPES = [SORTER_TYPE_LETTERS, SORTER_TYPE_NUMBERS] as const

export interface Sorter {
  type: typeof SORTER_TYPES[number]
  title: string
  apiCriteria: string
}