import { FILTER_TYPE_TEXT, FILTER_TYPE_SELECT, FILTER_TYPE_RANGE } from "@/types/filter"

interface FilterOptions {
  [key: string]: string[]
}

export function useFilterInitialization() {
  const config = useAppConfig()
  const { provider } = useRuntimeConfig().public.api

  const initializeFilters = async () => {
    const selectFilterFields = config.filters
      .filter(filter => filter.type === FILTER_TYPE_SELECT)
      .map(filter => filter.apiCriteria)

    const { data: selectFilterOptions } = await useFetch<FilterOptions>(`api/${provider}/filters/options`, {
      query: { fields: selectFilterFields }
    })

    return config.filters.map((filterConfig) => {
      const baseFilter = {
        filter: filterConfig,
        model: (() => {
          switch (filterConfig.type) {
            case FILTER_TYPE_TEXT:
              return ''
            case FILTER_TYPE_RANGE:
              return ['', '']
            case FILTER_TYPE_SELECT:
              return []
            default:
              return []
          }
        })()
      }

      if (filterConfig.type === FILTER_TYPE_SELECT && selectFilterOptions.value) {
        baseFilter.filter = {
          ...filterConfig,
          options: selectFilterOptions.value[filterConfig.apiCriteria] || []
        }
      }

      return baseFilter
    })
  }

  return {
    initializeFilters
  }
}