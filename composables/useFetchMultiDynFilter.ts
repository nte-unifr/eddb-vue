export function useFetchMultiDynFilter(criteria: string) {
  type DataItem = { [key: string]: unknown }
  const config = useAppConfig()

  const defaultTransform = (data: { data: DataItem[] }) => {
    const extractedValues = data.data
      .map((item: DataItem) => item[criteria])
      .filter((value): value is string => typeof value === 'string')
      .map(value => value.trim())

    const uniqueSortedValues = Array.from(new Set(extractedValues))
      .sort((a, b) => a.localeCompare(b, 'fr', { sensitivity: 'base' }))
    return uniqueSortedValues
  }

  const path = `/items/${config.collection.name}?limit=-1`

  return useFetchDefault(path, {
    query: {
      fields: criteria
    },
    transform: defaultTransform
  })
}