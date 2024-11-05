import type { Filter } from "../../types/filter"
import { FILTER_TYPE_TEXT, FILTER_TYPE_SELECT, FILTER_TYPE_RANGE } from "../../types/filter"

export const filters: Filter[] = [
  {
    type: FILTER_TYPE_TEXT,
    title: "Numéro d'inventaire",
    info: "ex: CPS 1015",
    apiCriteria: "identifier"
  },
  {
    type: FILTER_TYPE_SELECT,
    title: "Entité",
    apiCriteria: "entity"
  },
  {
    type: FILTER_TYPE_RANGE,
    title: "Datation",
    info: "Utilisez des valeurs négatives pour les dates av. J.-C.",
    apiCriteria: ["date_num_from", "date_num_to"]
  },
  {
    type: FILTER_TYPE_SELECT,
    title: "Autorité émettrice",
    apiCriteria: "authority"
  },
  {
    type: FILTER_TYPE_SELECT,
    title: "Portrait",
    apiCriteria: "portrait"
  },
  {
    type: FILTER_TYPE_SELECT,
    title: "Atelier",
    apiCriteria: "mint"
  },
  {
    type: FILTER_TYPE_SELECT,
    title: "Métal",
    apiCriteria: "material"
  },
  {
    type: FILTER_TYPE_SELECT,
    title: "Dénomination",
    apiCriteria: "denomination"
  },
  {
    type: FILTER_TYPE_TEXT,
    title: "Référence bibliographique",
    info: "ex: Alexandria 47",
    apiCriteria: "reference"
  },
  {
    type: FILTER_TYPE_TEXT,
    title: "Mots-clés",
    info: "ex: sanctuaire",
    apiCriteria: "comment"
  }
]