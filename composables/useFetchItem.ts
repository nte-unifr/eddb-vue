export function useFetchItem(id: number) {
  const config = useAppConfig()

  const defaultTransform = (data: any) => {
    return dBuildItem(config.item, data.data)
  }

  const path = `/items/${config.collection.name}/${id}`

  return useFetchDefault(path, {
    transform: defaultTransform
  })
}