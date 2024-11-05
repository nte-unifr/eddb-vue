import { readItems } from "@directus/sdk"
import type { Item } from "@/types/item"
import { DISPLAY_TABLE, type ItemConfig } from "@/config/index"

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const page = query.page as number || 1
  const sort = query.sort as string || 'id'
  const filters = query.filters as string[] || []

  const { api, itemConfig } = useRuntimeConfig(event).public

  const res = await useDirectus().request(
    readItems(api.collectionName, {
      limit: api.limit,
      page: page,
      sort: [sort],
      filter: directusFilter(filters)
    })
  )

  const items = res.map(e => directusTransform(e, itemConfig as ItemConfig, DISPLAY_TABLE))
  return items as Item[]
  
})