interface Item {
  id: string
  title: string
  subtitle: string
  images?: { id: string, title: string, description: string }[]
  dates?: number[]
  informations: { title: string, content: string }[]
  addendums: { title: string, content: string }[]
}

export function useFetchItem(id: number) {
  const config = useAppConfig() // app.config.ts
  const mapping = config.item.mapping

  const defaultTransform = (data: any) => {
    const apiItem = data.data

    const result: Item = {
      id: apiItem[mapping.id],
      title: apiItem[mapping.title],
      subtitle: apiItem[mapping.subtitle],
      informations: [],
      addendums: []
    }

    // Images
    if (mapping.images && mapping.images.length) {
      result.images = mapping.images
      .map((i: any) => {
        return {
          id: apiItem[i.criteria],
          title: i.title,
          description: apiItem[i.description]
        }
      })
    }

    // Dates
    if (mapping.dates && mapping.dates.length) {
      result.dates = mapping.dates.map((key: string) => apiItem[key])
    }

    // Informations
    if (mapping.informations && mapping.informations.length) {
      result.informations = mapping.informations
      .filter((i:any) => i.emptyDisplay || (apiItem[i.criteria] !== null && apiItem[i.criteria] !== ''))
      .map((i: any) => {
        let suffix = i.suffix ? ` ${i.suffix}` : ''

        return  {
          title: i.title,
          content: apiItem[i.criteria] + suffix
        }
      })
    }

    // Addendums
    if (mapping.addendums && mapping.addendums.length) {
      result.addendums = mapping.addendums
      .filter((i:any) => i.emptyDisplay || (apiItem[i.criteria] !== null && apiItem[i.criteria] !== ''))
      .map((i: any) => {
        let content = Array.isArray(i.criteria) ? i.criteria.map((crit: string) => apiItem[crit]).join("") : apiItem[i.criteria]

        return {
          title: i.title,
          content: content
        }
      })
    }

    return result
  }

  const path = `/items/${config.collection.name}/${id}`

  return useFetchDefault(path, {
    transform: defaultTransform
  })
}