import { readItem } from '@directus/sdk'
import type { Item } from "@/types/item"
import { DISPLAY_DETAILS, type ItemConfig } from "@/config/index"

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id') || '1'
  
  const { api, itemConfig } = useRuntimeConfig(event).public

  const res = await useDirectus().request(
    readItem(api.collectionName, id)
  )

  return directusTransform(res, itemConfig as ItemConfig, DISPLAY_DETAILS) as Item
})