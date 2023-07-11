import { MultiSelectFilter } from '~/types/MultiSelectFilter'
import { TextFilter } from '~/types/TextFilter'

export const useFilterStore = defineStore('filter', () => {
  const filters: Ref<(TextFilter | MultiSelectFilter)[]> = ref([])

  // Generate the filter object based on active filters
  const filter = computed(() => {
    return {
      _and: filters.value.map(filter => filter.getFilterValue())
    }
  })

  async function fetch() {
    if(filters.value.length === 0) {
      const multiSelectOptions = await fetchOptions('GetMultiSelect')
      const data = await queryContent('filter').sort({ id: 1 }).find()

      filters.value = data.map((filterData: any) => {
        if (filterData.type === 'multiselect') {
          let list = sanitizeAndSort(multiSelectOptions.map((option: any) => option[filterData.criteria]))
          return new MultiSelectFilter(filterData.id, filterData.title, filterData.type, filterData.criteria, list)
        } else if (filterData.type === 'text') {
          return new TextFilter(filterData.id, filterData.title, filterData.type, filterData.criteria, filterData.placeholder)
        }
      }).filter(isDefined)
    }
  }

  // MultiSelectFilter functions

  function getInactiveList(filter: MultiSelectFilter) {
    return filter.list.filter(item => !filter.activeList.includes(item))
  }

  function setActive(filter: MultiSelectFilter, option: string) {
    let list = filter.activeList
    if (!list.includes(option)) {
      list.push(option)
      sortAlpha(list)
    }
  }

  function removeActive(filter: MultiSelectFilter, option: string) {
    filter.activeList = filter.activeList.filter(el => el !== option)
  }

  // General functions

  function reset(filter: (TextFilter | MultiSelectFilter)) {
    if (filter.type === 'multiselect') {
      (filter as MultiSelectFilter).activeList = []

    } else if (filter.type === 'text') {
      (filter as TextFilter).search = ''
    }
  }

  function resetAll() {
    filters.value.forEach(filter => {
      reset(filter)
    })
  }

  return {
    filter, filters, getInactiveList, fetch, setActive, removeActive, reset, resetAll
  }
})

function isDefined<T>(arg: T | undefined): arg is T {
  return arg !== undefined;
}

async function fetchOptions(type: string) {
  const { data } = await useAsyncGql('GetMultiSelect')
  return data?.value?.filters || []
}