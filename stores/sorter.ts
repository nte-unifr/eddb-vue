export const useSorterStore = defineStore('sorter', () => {

  interface Option {
    type: string
    criteria: string[]
  }

  interface Options {
    [key: string]: Option
  }

  const options: Options = {
    identifiant: {
      type: 'letters',
      criteria: ['identifier']
    },
    date: {
      type: 'numbers',
      criteria: ['date_from', 'identifier']
    }
  }

  const sort = ref('identifiant')
  const criteria = computed(() => {
    return options[sort.value].criteria
  })


  function setSort(o: string) {
    sort.value = o
  }

  return { options, sort, criteria, setSort }
})