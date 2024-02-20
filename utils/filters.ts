import type { FilterConfig } from "@/types/index"
import { FILTER_TYPE_TEXT, FILTER_TYPE_MULTIDYN, FILTER_TYPE_RANGE } from "@/types/constants"

export function initFilter(config: FilterConfig) {
  switch (config.type) {
    case FILTER_TYPE_TEXT:
      return {
        config: config,
        model: ''
      }
    case FILTER_TYPE_MULTIDYN:
      return {
        config: config,
        model: []
      }
    case FILTER_TYPE_RANGE:
      return {
        config: config,
        model: { from: '', to: '' }
      }
    default:
      return {
        config: config,
        model: ''
      }
  }
}