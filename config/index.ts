import type { Information } from "@/types/item"

export const DISPLAY_TABLE = 'TABLE'
export const DISPLAY_DETAILS = 'DETAILS'
export const DISPLAYS = [DISPLAY_TABLE, DISPLAY_DETAILS] as const
export type Display = typeof DISPLAYS[number]

export interface AppConfig {
  name: string
  baseURL: string
  copyright?: string
  api: {
    provider: string
    url: string
    collectionName: string
    limit: number
  }
  sorters: any[]
  filters: any[]
  itemConfig: ItemConfig
}

export interface ItemConfig {
  title: {
    apiCriteria: string
    prefix?: string
    suffix?: string
  }
  subtitle: {
    apiCriteria: string
    prefix?: string
    suffix?: string
  }
  dates?: {
    apiCriteriaFrom: string
    apiCriteriaTo: string
    separator: string
    bceLabel: string
    ceLabel: string
  }
  images?: {
    title: string
    apiCriteria: string
    apiCriteriaCaption: string
  }[]
  informations: {
    type: Information
    title: string
    apiCriteria: string | string[]
    prefix?: string
    suffix?: string
    display: Display[]
    showEmpty?: boolean
  }[][]
}