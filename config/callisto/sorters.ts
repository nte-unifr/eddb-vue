import type { Sorter } from "../../types/sorter"
import { SORTER_TYPE_LETTERS, SORTER_TYPE_NUMBERS } from "../../types/sorter"

export const sorters: Sorter[] = [
  {
    type: SORTER_TYPE_LETTERS,
    title: "Titre",
    apiCriteria: "title"
  },
  {
    type: SORTER_TYPE_NUMBERS,
    title: "ID",
    apiCriteria: "id"
  }
]