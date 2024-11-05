import type { Filter } from "../../types/filter"
import { FILTER_TYPE_TEXT, FILTER_TYPE_SELECT } from "../../types/filter"

export const filters: Filter[] = [
  {
    type: FILTER_TYPE_TEXT,
    title: "Titre",
    info: "ex: CPS 1015",
    apiCriteria: "title"
  },
  {
    type: FILTER_TYPE_SELECT,
    title: "Période",
    apiCriteria: "period"
  },
  {
    type: FILTER_TYPE_SELECT,
    title: "Matériau",
    apiCriteria: "material"
  },
  {
    type: FILTER_TYPE_SELECT,
    title: "Catégorie",
    apiCriteria: "category"
  },
  {
    type: FILTER_TYPE_SELECT,
    title: "Forme",
    apiCriteria: "shape"
  },
  {
    type: FILTER_TYPE_SELECT,
    title: "Sujet",
    apiCriteria: "subjects"
  }
]