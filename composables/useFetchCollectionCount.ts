type QueryOptions = {
  filter?: Ref<string>
}

export function useFetchCollectionCount(query?: QueryOptions) {
  const config = useAppConfig()

  const defaultTransform = (data: any) => {
    return data.data?.[0]?.count || 0
  }

  const path = `/items/${config.collection.name}?aggregate[count]=*`

  return useFetchDefault(path, {
    query: query,
    transform: defaultTransform
  })
}
