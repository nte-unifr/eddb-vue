import type { Filter } from "@/types/filter"

export interface FilterState {
  filter: Filter
  model: string|string[]
}

export const useTheme = () => useState<string>('theme')
export const useSort = () => useState<string>('sort')
export const usePage = () => useState<number>('page')
export const useFilters = () => useState<FilterState[]>('filter')