import type { AppConfig } from "@/config/index"
import { sorters } from './sorters'
import { filters } from './filters'
import { itemConfig } from './itemConfig'

export default {
  name: "callisto",
  baseURL: "/callisto/",
  sorters,
  filters,
  api: {
    provider: "directus",
    url: "https://eddb.unifr.ch/callisto-admin",
    collectionName: "collection",
    limit: 50
  },
  itemConfig
} as AppConfig