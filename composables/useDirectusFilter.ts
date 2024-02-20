import type { Filter, FilterText, FilterMultiDyn, FilterRange } from "@/types/filter"
import { FILTER_TYPE_TEXT, FILTER_TYPE_MULTIDYN, FILTER_TYPE_RANGE } from "@/types/constants"

export function useDirectusFilter(filters: Filter[]|Ref<Filter[]>) {
  const filter = ref("{}")

  const buildRules = () => {
    filter.value = "{}"

    const activeRules = toValue(filters).map(filter => {
      switch (filter.config.type) {
        case FILTER_TYPE_TEXT:
          const textFilter = filter as FilterText
          return directusFilterTextRule(textFilter.config.criteria[0], textFilter.model)
        case FILTER_TYPE_MULTIDYN:
          const multiDynFilter = filter as FilterMultiDyn
          return directusFilterMultiDynRule(multiDynFilter.config.criteria[0], multiDynFilter.model)
        case FILTER_TYPE_RANGE:
          const rangeFilter = filter as FilterRange
          return directusFilterRangeRule(rangeFilter.config.criteria[0], rangeFilter.config.criteria[1], rangeFilter.model.from, rangeFilter.model.to)
        default:
          return {}
      }
    }).filter(r => Object.keys(r).length > 0)

    if (activeRules.length > 0) {
      filter.value = JSON.stringify({ "_and": activeRules })
    } else {
      filter.value = "{}"
    }
  }

  watchEffect(() => {
    buildRules()
  })

  return { filter }
}

const directusFilterTextRule = (criteria: string, value: string): object => {
  return value ? { [criteria]: { "_contains": value } } : {}
}

const directusFilterMultiDynRule = (criteria: string, value: string[]): object => {
  return value.length ? { [criteria]: { "_in": value } } : {}
}

const directusFilterRangeRule = (criteria_from: string, criteria_to: string, from: string, to: string): object => {
  let fromInt = parseInt(from) || NaN
  let toInt = parseInt(to) || NaN
  const defaultMin = -9000
  const defaultMax = 9000

  fromInt = Number.isFinite(fromInt) ? fromInt : defaultMin
  toInt = Number.isFinite(toInt) ? toInt : defaultMax

  if (fromInt !== defaultMin || toInt !== defaultMax) {
    return {
      "_or": [
        { "_and": [{ [criteria_from]: { "_gte": fromInt } }, { [criteria_from]: { "_lte": toInt } }] },
        { "_and": [{ [criteria_to]: { "_gte": fromInt } }, { [criteria_to]: { "_lte": toInt } }] }
      ]
    }
  }
  return {}
}