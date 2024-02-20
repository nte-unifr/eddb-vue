import type { FilterConfig } from "@/types/index"

export interface FilterBase {
  config: FilterConfig
}

export interface FilterText extends FilterBase {
  model: string
}

export interface FilterMultiDyn extends FilterBase {
  model: string[]
}

export interface FilterRange extends FilterBase {
  model: {
    from: string
    to: string
  }
}

export type Filter = FilterText | FilterMultiDyn | FilterRange