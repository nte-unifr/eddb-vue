import { readField } from '@directus/sdk'

export default defineEventHandler(async (event) => {
  const field = getRouterParam(event, 'field') || ''
  
  const { api } = useRuntimeConfig(event).public

  const res = await useDirectus().request(
    readField(api.collectionName, field)
  )

  return res.meta.options.choices.map((choice: { value: string }) => choice.value)
})