type QueryOptions = {
  limit?: number
  page?: Ref<number>
  sort?: Ref<string[]>
  filter?: Ref<string>
}

export function useFetchCollection(query: QueryOptions) {
  const config = useAppConfig()

  const defaultTransform = (data: any) => {
    return data.data.map((apiItem: any) => dBuildItem(config.collection.item, apiItem))
  }

  const path = `/items/${config.collection.name}`

  return useFetchDefault(path, {
    query: { ...query, fields: dCollectionFields(), },
    transform: defaultTransform
  })
}