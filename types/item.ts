export const INFORMATION_TYPE_TEXT = 'TEXT'
export const INFORMATION_TYPE_HTML = 'HTML'
export const INFORMATION_TYPES = [INFORMATION_TYPE_TEXT, INFORMATION_TYPE_HTML] as const
export type Information = typeof INFORMATION_TYPES[number]

export interface Item {
  id: number
  title: string
  subtitle?: string
  dates: string|false
  images?: ItemImage[]
  informations?: ItemInformation[][]
}

interface ItemImage {
  id: string
  title?: string
  caption?: string
}

interface ItemInformation {
  type: typeof INFORMATION_TYPES[number]
  title: string
  content: string
  prefix?: string
  suffix?: string
}