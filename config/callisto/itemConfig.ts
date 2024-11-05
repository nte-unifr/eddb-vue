import type { ItemConfig } from "../index";
import { DISPLAY_TABLE, DISPLAY_DETAILS } from "../index";
import { INFORMATION_TYPE_TEXT, INFORMATION_TYPE_HTML } from "../../types/item";

export const itemConfig: ItemConfig = {
  title: {
    apiCriteria: "title",
  },
  subtitle: {
    apiCriteria: "id",
    prefix: "Fiche N°",
  },
  dates: {
    apiCriteriaFrom: "date_from",
    apiCriteriaTo: "date_to",
    separator: "–",
    bceLabel: "av. J.-C.",
    ceLabel: "apr. J.-C.",
  },
  images: [],
  informations: [
    [
      {
        type: INFORMATION_TYPE_HTML,
        title: "Description",
        apiCriteria: "description",
        display: [DISPLAY_DETAILS],
      },
    ],
    [
      {
        type: INFORMATION_TYPE_TEXT,
        title: "Période",
        apiCriteria: "period",
        display: [DISPLAY_TABLE, DISPLAY_DETAILS],
      },
      {
        type: INFORMATION_TYPE_TEXT,
        title: "Matériau",
        apiCriteria: "material",
        display: [DISPLAY_TABLE, DISPLAY_DETAILS],
      },
      {
        type: INFORMATION_TYPE_TEXT,
        title: "Catégorie",
        apiCriteria: "category",
        display: [DISPLAY_TABLE, DISPLAY_DETAILS],
      },
      {
        type: INFORMATION_TYPE_TEXT,
        title: "Forme",
        apiCriteria: "shape",
        display: [DISPLAY_TABLE, DISPLAY_DETAILS],
      },
      {
        type: INFORMATION_TYPE_TEXT,
        title: "Dimensions",
        apiCriteria: "dimensions",
        display: [DISPLAY_DETAILS],
      },
      {
        type: INFORMATION_TYPE_TEXT,
        title: "Lieu de découverte",
        apiCriteria: "place_of_discovery",
        display: [DISPLAY_DETAILS],
      },
      {
        type: INFORMATION_TYPE_TEXT,
        title: "Lieu de conservation",
        apiCriteria: "place_of_storage",
        display: [DISPLAY_DETAILS],
      },
      {
        type: INFORMATION_TYPE_TEXT,
        title: "Centre producteur",
        apiCriteria: "mint",
        display: [DISPLAY_DETAILS],
      },
    ],
    [
      {
        type: INFORMATION_TYPE_HTML,
        title: "Sources",
        apiCriteria: "sources",
        display: [DISPLAY_DETAILS],
      },
      {
        type: INFORMATION_TYPE_HTML,
        title: "Bibliographie",
        apiCriteria: "bibliography",
        display: [DISPLAY_DETAILS],
      },
    ],
  ],
};
