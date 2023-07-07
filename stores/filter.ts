export const useFilterStore = defineStore('filter', () => {
  const status = 'pending'
  const filters: Ref<Filter[]> = ref([])

  // Generate the filter object based on active filters
  const filter = computed(() => {
    return {
      _and: [
        { status: { _eq: status } },
        ...filters.value.map(filter => {
          return filter.data.activeList.length > 0
            ? { [filter.criteria]: { _in: filter.data.activeList } }
            : { "_or": [ { [filter.criteria]: { _in: filter.data.list } }, { [filter.criteria]: { _null: true } } ] }
        }),
      ],
    }
  })

  async function fetch() {
    if(filters.value.length === 0) {
      const multiSelectOptions = await fetchOptions('GetMultiSelect')

      const data = await queryContent('filter').sort({ id: 1 }).find()
      filters.value = data.map((filterData: any) => {
        let list = multiSelectOptions.map((option: any) => {
          return option[filterData.criteria]
        })

        list = sanitizeAndSort(list)

        return {
          id: filterData.id,
          title: filterData.title,
          type: filterData.type,
          criteria: filterData.criteria,
          data: {
            list: list,
            activeList: []
          }
        }
      })
    }
  }

  function getInactiveList(filter: Filter) {
    return filter.data.list.filter(item => !filter.data.activeList.includes(item))
  }

  function setActive(filter: Filter, option: string) {
    let list = filter.data.activeList
    if (!list.includes(option)) {
      list.push(option)
      sortAlpha(list)
    }
  }

  function removeActive(filter: Filter, option: string) {
    filter.data.activeList = filter.data.activeList.filter(el => el !== option)
  }

  function reset(filter: Filter) {
    filter.data.activeList = []
  }

  function resetAll() {
    filters.value.forEach(filter => {
      filter.data.activeList = []
    })
  }

  async function fetchOptions(type: string) {
    const { data } = await useAsyncGql('GetMultiSelect')
    return data?.value?.filters || []
  }

  return {
    filter, filters, getInactiveList, fetch, status, setActive, removeActive, reset, resetAll
  }
})