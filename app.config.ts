import config from "./config/nafo/app"

export default defineAppConfig({
  name: config.name,
  copyright: config.copyright,
  sorters: config.sorters,
  filters: config.filters
})
