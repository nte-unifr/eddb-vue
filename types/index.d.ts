import { INFORMATION_TYPES, SORTER_TYPES, FILTER_TYPES } from "@/types/constants"

declare module 'nuxt/schema' {
  interface AppConfigInput {
    apiUrl: string
    title: string
    description: string
    mandant: {
      name: string
      url: string
    }
    copyright: string
    about: AboutConfig
    item: ItemConfig
    collection: CollectionConfig
  }
}

export interface AboutConfig {
  title_criteria: string
  slogan_criteria: string
  description_criteria: string
  image_criteria: string
}

export interface CollectionConfig {
  name: string
  limit: number
  noResults: string
  item: ItemConfig
  sorters: SorterConfig[]
  filters: FilterConfig[]
}

export interface ItemConfig {
  id_criteria: string
  title_criteria: string
  subtitle_criteria: string
  dates?: DateConfig[]
  images?: ImageConfig[]
  informations?: InformationConfig[]
}

export interface DateConfig {
  criteria: string
}

export interface ImageConfig {
  criteria: string
  title?: string
  description_criteria?: string
}

export interface InformationConfig {
  type: typeof INFORMATION_TYPES[number]
  title?: string
  criteria?: string[]
  emptyDisplay?: boolean
  suffix?: string
}

export interface SorterConfig {
  title: string
  type: typeof SORTER_TYPES[number]
  criteria: string[]
}

export interface FilterConfig {
  title: string
  type: typeof FILTER_TYPES[number]
  criteria: string[]
  info?: string
}

// It is always important to ensure you import/export something when augmenting a type
export {}
