import { INFORMATION_TYPES } from "@/types/constants"

export interface Item {
  id: string
  title: string
  subtitle?: string
  dates?: string
  images?: ItemImage[]
  informations?: ItemInformation[]
}

export interface ItemImage {
  id: string
  title?: string
  description?: string
}

export interface ItemInformation {
  type: typeof INFORMATION_TYPES[number]
  title: string
  content: string
}