export function useFetchMultiDynFilter(criteria: string) {
  type DataItem = { [key: string]: unknown }
  const config = useAppConfig()

  const backDefaultTransform = (data: { data: DataItem[]}) => {
    const extractedValues = data.data
      .map((item: DataItem) => item[criteria])
      .filter((value): value is string => typeof value === 'string')

    const uniqueValues = Array.from(new Set(extractedValues))
    return uniqueValues.map((value: string, index: number) => ({
      id: index,
      title: value,
      active: false
    }))
  }

  const defaultTransform = (data: { data: DataItem[] }) => {
    const extractedValues = data.data
      .map((item: DataItem) => item[criteria])
      .filter((value): value is string => typeof value === 'string')

    const uniqueSortedValues = Array.from(new Set(extractedValues)).sort()
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