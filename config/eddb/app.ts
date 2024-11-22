import type { AppConfig } from "@/config/index"

export default {
  name: "EDDB",
  copyright: "Université de Fribourg",
  sorters: [
    { apiCriteria: "" }
  ],
  filters: [],
  api: {
    provider: "",
    url: "",
    collectionName: "",
    limit: 0
  },
  itemConfig: {
    title: { apiCriteria: "" },
    subtitle: { apiCriteria: "" },
    informations: [],
  }
} as AppConfig