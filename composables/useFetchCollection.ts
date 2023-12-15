type QueryOptions = {
  limit?: number;
  page?: Ref<number>;
  sort?: Ref<string[]>;
  filter?: Ref<string>;
}

interface CollectionItem {
  id: string
  title: string
  subtitle: string
  images?: string[]
  dates?: string[]
  informations?: { title: string, value: string }[]
}

interface CollectionMapping {
  id: string;
  title: string;
  subtitle: string;
  images?: string[];
  dates?: string[];
  informations?: { title: string, criteria: string }[];
}

export function useFetchCollection(query: QueryOptions) {
  const config = useAppConfig() // app.config.ts
  const mapping = config.collection.mapping

  const defaultTransform = (data: any) => {
    const apiItems = data.data

    return apiItems.map((apiItem: any) => {
      const result: CollectionItem = {
        id: apiItem[mapping.id],
        title: apiItem[mapping.title],
        subtitle: apiItem [mapping.subtitle]
      }

      // Images
      if (mapping.images && mapping.images.length) {
        result.images = mapping.images.map((key: string) => apiItem[key])
      }

      // Dates
      if (mapping.dates && mapping.dates.length) {
        result.dates = mapping.dates.map((key: string) => apiItem[key])
      }

      // Informations
      if (mapping.informations && mapping.informations.length) {
        result.informations = mapping.informations
        .map((info: any) => {
          return { title: info.title, value: apiItem[info.criteria] }
        })
        .filter((info: any) => info.value !== null && info.value !== undefined)
      }

      return result
    })
  }

  const path = `/items/${config.collection.name}`

  return useFetchDefault(path, {
    query: {
      ...query,
      fields: collectionFields(mapping),
    },
    transform: defaultTransform
  })
}

const collectionFields = (mapping: CollectionMapping): string => {
  const flatValues = [
    mapping.id,
    mapping.title,
    mapping.subtitle,
    ...mapping.images || [],
    ...mapping.dates || [],
    ...(mapping.informations || []).map(info => info.criteria).filter(Boolean)
  ]
  return flatValues.join(',')
}