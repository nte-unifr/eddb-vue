import { INFORMATION_TYPE_DATES, INFORMATION_TYPE_DIVIDER, INFORMATION_TYPE_HTML, INFORMATION_TYPE_TEXT } from "@/types/constants"

export default defineAppConfig({
  title: "NAFO",
  description: "",
  mandant: {
    name: "Prof. Cédric Brélaz",
    url: "https://www.unifr.ch/directory/fr/people/199032/23c3d"
  },
  copyright: "Université de Fribourg, Faculté des lettres et des sciences humaines, Département d’histoire / Musée d’art et d’histoire de Fribourg",
  item: {
    id_criteria: "id",
    title_criteria: "identifier",
    subtitle_criteria: "authority",
    images: [
      { criteria: "image_obverse", title: "Avers", description_criteria: "description_obverse" },
      { criteria: "image_reverse", title: "Revers", description_criteria: "description_reverse" }
    ],
    informations: [
      { type: INFORMATION_TYPE_DATES, title: "Datation", criteria: ["date_from", "date_to"] },
      { type: INFORMATION_TYPE_TEXT, title: "Entité", criteria: ["entity"] },
      { type: INFORMATION_TYPE_TEXT, title: "Autorité émettrice", criteria: ["authority"] },
      { type: INFORMATION_TYPE_TEXT, title: "Atelier", criteria: ["mint"] },
      { type: INFORMATION_TYPE_TEXT, title: "Métal", criteria: ["material"] },
      { type: INFORMATION_TYPE_TEXT, title: "Dénomination", criteria: ["denomination"] },
      { type: INFORMATION_TYPE_TEXT, title: "Poids", criteria: ["weight"], emptyDisplay: true, suffix: 'g' },
      { type: INFORMATION_TYPE_TEXT, title: "Diamètre", criteria: ["diameter"], emptyDisplay: true, suffix: 'mm' },
      { type: INFORMATION_TYPE_TEXT, title: "Axe", criteria: ["axis"], emptyDisplay: true, suffix: '°' },
      { type: INFORMATION_TYPE_DIVIDER },
      { type: INFORMATION_TYPE_HTML, title: "Commentaire", criteria: ["comment", "date_explanation"] },
      { type: INFORMATION_TYPE_HTML, title: "Référence", criteria: ["reference"], emptyDisplay: true },
      { type: INFORMATION_TYPE_HTML, title: "Bibliographie", criteria: ["bibliography"] }
    ]
  },
  collection: {
    name: "coins",
    limit: 50,
    noResults: "Aucun résultat",
    item: {
      id_criteria: "id",
      title_criteria: "identifier",
      subtitle_criteria: "entity",
      images: [
        { criteria: "image_obverse" },
        { criteria: "image_reverse" }
      ],
      dates: [
        { criteria: "date_from" },
        { criteria: "date_to" }
      ],
      informations: [
        { type: INFORMATION_TYPE_TEXT, title: "Autorité émettrice", criteria: ["authority"] },
        { type: INFORMATION_TYPE_TEXT, title: "Portrait", criteria: ["portrait"] },
        { type: INFORMATION_TYPE_TEXT, title: "Atelier", criteria: ["mint"] },
        { type: INFORMATION_TYPE_TEXT, title: "Métal", criteria: ["material"] },
        { type: INFORMATION_TYPE_TEXT, title: "Dénomination", criteria: ["denomination"] },
      ]
    },
    sorters: [
      { title: "Numéro d'inventaire", type: "letters", criteria: ["identifier"] },
      { title: "Date", type: "numbers", criteria: ["date_from", "identifier"] }
    ],
    filters: [
      {
        "criteria": "identifier",
        "type": "CollectionFilterText",
        "title": "Numéro d'inventaire",
        "placeholder": "ex: CPS 1015"
      },
      {
        "criteria": "entity",
        "type": "CollectionFilterMultiDyn",
        "title": "Entité",
      },
      {
        "criteria": "date",
        "type": "CollectionFilterRange",
        "title": "Datation",
        "criteria_from": "date_from",
        "criteria_to": "date_to",
        "info": "Utilisez des valeurs négatives pour les dates av. J.-C."
      },
      {
        "criteria": "authority",
        "type": "CollectionFilterMultiDyn",
        "title": "Autorité émettrice",
      },
      {
        "criteria": "portrait",
        "type": "CollectionFilterMultiDyn",
        "title": "Portrait",
      },
      {
        "criteria": "mint",
        "type": "CollectionFilterMultiDyn",
        "title": "Atelier",
      },
      {
        "criteria": "material",
        "type": "CollectionFilterMultiDyn",
        "title": "Métal",
      },
      {
        "criteria": "denomination",
        "type": "CollectionFilterMultiDyn",
        "title": "Dénomination",
      },
      {
        "criteria": "bibliography",
        "type": "CollectionFilterText",
        "title": "Référence bibliographique",
        "placeholder": "ex: Yarrow 2021"
      },
      {
        "criteria": "comment",
        "type": "CollectionFilterText",
        "title": "Mots-clés",
        "placeholder": "ex: sanctuaire"
      }
    ]
  }
})
