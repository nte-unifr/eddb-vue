import type { FilterState } from "@/composables/states"
import { FILTER_TYPE_TEXT, FILTER_TYPE_SELECT, FILTER_TYPE_RANGE } from "@/types/filter"

export const directusFilter = (filters: string[]): object => {
  const states = filters.map(filter => JSON.parse(filter)) as FilterState[]
  const rules = states.map(state => {
    switch (state.filter.type) {
      case FILTER_TYPE_TEXT:
        return filtersTextRule(state.filter.apiCriteria as string, state.model as string)
      case FILTER_TYPE_SELECT:
        return filtersSelectRule(state.filter.apiCriteria as string, state.model as string[])
      case FILTER_TYPE_RANGE:
        return filtersRangeRule(state.filter.apiCriteria as string[], state.model as string[])
      default:
        return {}
    }
  })

  return rules.length > 0 ? { _and: rules } : {}
}

const filtersTextRule = (criteria: string, value: string): object => {
  return value ? { [criteria]: { _contains: value } } : {}
}

const filtersSelectRule = (criteria: string, values: string[]): object => {
  return values.length ? { [criteria]: { _in: values } } : {}
}

const filtersRangeRule = (criteria: string[], values: string[]): object => {
  let fromInt = parseInt(values[0]) || NaN
  let toInt = parseInt(values[1]) || NaN
  const defaultMin = -9000
  const defaultMax = 9000
  let rule = {}

  fromInt = Number.isFinite(fromInt) ? fromInt : defaultMin
  toInt = Number.isFinite(toInt) ? toInt : defaultMax

  if (fromInt !== defaultMin || toInt !== defaultMax) {
    rule = {
      _or: [
        { _and: [{ [criteria[0]]: { _gte: fromInt } }, { [criteria[0]]: { _lte: toInt } }] },
        { _and: [{ [criteria[1]]: { _gte: fromInt } }, { [criteria[1]]: { _lte: toInt } }] }
      ]
    }
  }
  return rule
}