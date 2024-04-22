import {
  INFORMATION_TYPE_DATES, INFORMATION_TYPE_DIVIDER, INFORMATION_TYPE_HTML, INFORMATION_TYPE_TEXT,
  SORTER_TYPE_LETTERS, SORTER_TYPE_NUMBERS,
  FILTER_TYPE_TEXT, FILTER_TYPE_MULTIDYN, FILTER_TYPE_RANGE
} from "@/types/constants"

export default defineAppConfig({
  apiUrl: "https://eddb.unifr.ch/nafo-admin",
  title: "NAFO",
  description: "",
  mandant: {
    name: "Prof. Cédric Brélaz",
    url: "https://www.unifr.ch/directory/fr/people/199032/23c3d"
  },
  copyright: "Université de Fribourg, Faculté des lettres et des sciences humaines, Département d’histoire / Musée d’art et d’histoire de Fribourg",
  about: {
    title_criteria: "title",
    slogan_criteria: "slogan",
    description_criteria: "description",
    image_criteria: "image"
  },
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
      { type: INFORMATION_TYPE_TEXT, title: "Portrait", criteria: ["portrait"] },
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
      { title: "Numéro d'inventaire", type: SORTER_TYPE_LETTERS, criteria: ["identifier"] },
      { title: "Date", type: SORTER_TYPE_NUMBERS, criteria: ["date_from", "identifier"] }
    ],
    filters: [
      { type: FILTER_TYPE_TEXT, title: "Numéro d'inventaire", criteria: ["identifier"], info: "ex: CPS 1015" },
      { type: FILTER_TYPE_MULTIDYN, title: "Entité", criteria: ["entity"] },
      { type: FILTER_TYPE_RANGE, title: "Datation", criteria: ["date_from", "date_to"], info: "Utilisez des valeurs négatives pour les dates av. J.-C." },
      { type: FILTER_TYPE_MULTIDYN, title: "Autorité émettrice", criteria: ["authority"] },
      { type: FILTER_TYPE_MULTIDYN, title: "Portrait", criteria: ["portrait"] },
      { type: FILTER_TYPE_MULTIDYN, title: "Atelier", criteria: ["mint"] },
      { type: FILTER_TYPE_MULTIDYN, title: "Métal", criteria: ["material"] },
      { type: FILTER_TYPE_MULTIDYN, title: "Dénomination", criteria: ["denomination"] },
      { type: FILTER_TYPE_TEXT, title: "Référence bibliographique", criteria: ["reference"], info: "ex: Alexandria 47" },
      { type: FILTER_TYPE_TEXT, title: "Mots-clés", criteria: ["comment"], info: "ex: sanctuaire" },
    ]
  }
})
