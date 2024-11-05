import { readItems } from "@directus/sdk"

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const fields = query.fields as string[] || []
  const { api } = useRuntimeConfig(event).public

  const items = await useDirectus().request(
    readItems(api.collectionName, {
      limit: -1,
      fields,
    })
  )

  const aggregation: Record<string, Set<string>> = {}

  // Loop through all items to collect distinct values
  items.forEach(item => {
    Object.entries(item).forEach(([field, value]) => {
      if (!aggregation[field]) {
        aggregation[field] = new Set()
      }
      if (value !== null && value !== undefined) {
        aggregation[field].add(value)
      }
    })
  })

  // Convert Sets to sorted arrays for response
  const result: Record<string, string[]> = {}
  Object.entries(aggregation).forEach(([field, values]) => {
    result[field] = Array.from(values).sort((a, b) => 
      a.localeCompare(b, 'fr', { sensitivity: 'base' })
    )
  })

  return result
})