export const useFiltersStore = defineStore('filters', () => {
  const status = 'pending'
  const list: FilterTypes = reactive({})
  const activeList: FilterTypes = reactive({})

  // Compute the list of inactive filters by removing active ones from the main list
  const inactiveList = computed(() => {
    return Object.keys(list).reduce((acc: FilterTypes, key: keyof FilterTypes) => {
      acc[key] = list[key].filter(item => !activeList[key].includes(item))
      return acc;
    }, {})
  })

  // Generate the filter object based on active filters
  const filter = computed(() => {
    return {
      _and: [
        { status: { _eq: status } },
        // If a filter is active, include it, otherwise, include all from the main list or null
        ...Object.keys(list).map((key: keyof FilterTypes) => {
          return activeList[key]?.length > 0
            ? { [key]: { _in: activeList[key] } }
            : { "_or": [ { [key]: { _in: list[key] } }, { [key]: { _null: true } } ] }
        }),
      ],
    }
  })

  // Fetch the filter data and populate the main and active lists
  async function fetch() {
    const { data } = await useAsyncGql('GetFilters')
    const filtersData = data?.value?.filters || []

    filtersData.forEach((filter: any) => {
      for (const key in filter) {
        if (filter.hasOwnProperty(key)) {
          if (!list[key]) {
            list[key] = []
          }
          list[key].push(filter[key])
          if (!activeList[key]) {
            activeList[key] = []
          }
        }
      }
    })

    for (const key in list) {
      if (list.hasOwnProperty(key)) {
        list[key] = processFilters(list[key])
      }
    }
  }

  function setActive(slug: keyof FilterTypes, item: string) {
    if (!activeList[slug].includes(item)) {
      activeList[slug].push(item)
    }
  }

  function removeActive(slug: keyof FilterTypes, item: string) {
    activeList[slug] = activeList[slug].filter(el => el !== item)
  }

  function reset(slug: keyof FilterTypes) {
    activeList[slug] = []
  }

  return {
    fetch, list, activeList, inactiveList, setActive, removeActive, reset, filter, status
  }
})

interface FilterTypes {
  [key: string]: string[]
}

// Process filters: remove null or undefined items, create a unique set and sort it
function processFilters(data: (string | null | undefined)[]): string[] {
  const validData = data.filter(item => item !== null && item !== undefined) as string[]
  const uniqueData = [...new Set(validData)]

  // Sort the data in lexicographical order considering numeric parts as numbers (a.k.a. "natural" sorting)
  return uniqueData.sort((a: string, b: string) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }))
}
