import type { ItemConfig } from "../index";
import { DISPLAY_TABLE, DISPLAY_DETAILS } from "../index";
import { INFORMATION_TYPE_TEXT, INFORMATION_TYPE_HTML } from "../../types/item";

export const itemConfig: ItemConfig = {
  title: {
    apiCriteria: "identifier",
  },
  subtitle: {
    apiCriteria: "entity",
  },
  dates: {
    apiCriteriaFrom: "date_num_from",
    apiCriteriaTo: "date_num_to",
    separator: "–",
    bceLabel: "av. J.-C.",
    ceLabel: "apr. J.-C.",
  },
  images: [
    {
      title: "Avers",
      apiCriteria: "image_obverse",
      apiCriteriaCaption: "description_obverse",
    },
    {
      title: "Revers",
      apiCriteria: "image_reverse",
      apiCriteriaCaption: "description_reverse",
    },
  ],
  informations: [
    [
      {
        type: INFORMATION_TYPE_TEXT,
        title: "Entité",
        apiCriteria: "entity",
        display: [DISPLAY_DETAILS],
      },
      {
        type: INFORMATION_TYPE_TEXT,
        title: "Autorité émettrice",
        apiCriteria: "authority",
        display: [DISPLAY_DETAILS, DISPLAY_TABLE],
      },
      {
        type: INFORMATION_TYPE_TEXT,
        title: "Portrait",
        apiCriteria: "portrait",
        display: [DISPLAY_DETAILS, DISPLAY_TABLE],
      },
      {
        type: INFORMATION_TYPE_TEXT,
        title: "Atelier",
        apiCriteria: "mint",
        display: [DISPLAY_DETAILS, DISPLAY_TABLE],
      },
      {
        type: INFORMATION_TYPE_TEXT,
        title: "Métal",
        apiCriteria: "material",
        display: [DISPLAY_DETAILS, DISPLAY_TABLE],
      },
      {
        type: INFORMATION_TYPE_TEXT,
        title: "Dénomination",
        apiCriteria: "denomination",
        display: [DISPLAY_DETAILS, DISPLAY_TABLE],
      },
      {
        type: INFORMATION_TYPE_TEXT,
        title: "Poids",
        apiCriteria: "weight",
        display: [DISPLAY_DETAILS],
        suffix: 'g',
        showEmpty: true,
      },
      {
        type: INFORMATION_TYPE_TEXT,
        title: "Diamètre",
        apiCriteria: "diameter",
        display: [DISPLAY_DETAILS],
        suffix: 'mm',
        showEmpty: true,
      },
      {
        type: INFORMATION_TYPE_TEXT,
        title: "Axe",
        apiCriteria: "axis",
        display: [DISPLAY_DETAILS],
        suffix: '°',
        showEmpty: true,
      },
    ],
    [
      {
        type: INFORMATION_TYPE_HTML,
        title: "Commentaire",
        apiCriteria: ["comment", "date_explanation"],
        display: [DISPLAY_DETAILS],
      },
      {
        type: INFORMATION_TYPE_HTML,
        title: "Référence",
        apiCriteria: "reference",
        display: [DISPLAY_DETAILS],
        showEmpty: true,
      },
      {
        type: INFORMATION_TYPE_HTML,
        title: "Bibliographie",
        apiCriteria: "bibliography",
        display: [DISPLAY_DETAILS],
      }
    ]
  ],
};
