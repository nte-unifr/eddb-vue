export default defineAppConfig({
  title: "NAFO",
  copyright: "Université de Fribourg, Faculté des lettres et des sciences humaines, Département d’histoire / Musée d’art et d’histoire de Fribourg",
  datamanager: {
    name: "Prof. Cédric Brélaz",
    url: "https://www.unifr.ch/directory/fr/people/199032/23c3d"
  },
  item: {
    mapping: {
      id: "id",
      title: "identifier",
      subtitle: "authority",
      images: [
        { title: 'Avers', criteria: "image_obverse", description: "description_obverse" },
        { title: 'Revers', criteria: "image_reverse", description: "description_reverse" }
      ],
      dates: ["date_from", "date_to"],
      informations: [
        { title: "Entité", criteria: "entity" },
        { title: "Autorité émettrice", criteria: "authority" },
        { title: "Atelier", criteria: "mint" },
        { title: "Métal", criteria: "material" },
        { title: "Dénomination", criteria: "denomination" },
        { title: "Poids", criteria: "weight", emptyDisplay: true, suffix: 'g' },
        { title: "Diamètre", criteria: "diameter", emptyDisplay: true, suffix: 'mm' },
        { title: "Axe", criteria: "axis", emptyDisplay: true, suffix: '°' }
      ],
      addendums: [
        { title: "Commentaire", criteria: ["comment", "date_explanation"] },
        { title: "Référence", criteria: "reference", emptyDisplay: true },
        { title: "Bibliographie", criteria: "bibliography" }
      ]
    }
  },
  collection: {
    name: "coins",
    limit: 50,
    noResults: "Aucun résultat",
    hasImages: true,
    hasDatation: true,
    sorters: [
      { title: "Numéro d'inventaire", type: "letters", criteria: ["identifier"] },
      { title: "Date", type: "numbers", criteria: ["date_from", "identifier"] }
    ],
    mapping: {
      id: "id",
      title: "identifier",
      subtitle: "entity",
      images: ["image_obverse", "image_reverse"],
      dates: ["date_from", "date_to"],
      informations: [
        { title: "Autorité émettrice", criteria: "authority" },
        { title: "Portrait", criteria: "portrait" },
        { title: "Atelier", criteria: "mint" },
        { title: "Métal", criteria: "material" },
        { title: "Dénomination", criteria: "denomination" }
      ]
    },
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
