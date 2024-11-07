import type { AppConfig } from "@/config/index"
import { sorters } from './sorters'
import { filters } from './filters'
import { itemConfig } from './itemConfig'

export default {
  name: "nafo",
  copyright: "Université de Fribourg, Faculté des lettres et des sciences humaines, Département d’histoire / Musée d’art et d’histoire de Fribourg",
  sorters,
  filters,
  api: {
    provider: "directus",
    url: "https://eddb.unifr.ch/nafo-admin",
    collectionName: "coins",
    limit: 50
  },
  itemConfig
} as AppConfig