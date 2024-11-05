import { aggregate } from '@directus/sdk'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const filters = query.filters as string[] || []

  const { api } = useRuntimeConfig(event).public

  const res = await useDirectus().request(
    aggregate(api.collectionName, {
      query: {
        filter: directusFilter(filters),
      },
      aggregate: { count: '*' },
    })
  )

  return parseInt(res[0].count || '0')
})
