export const useSorterStore = defineStore('sorter', () => {

  const options = ref(<any>[])
  const sort = ref([''])

  async function fetch() {
    if(options.value.length === 0) {
      const optionsContent = await queryContent('sorter').sort({ order: 1 }).find()
      options.value = optionsContent
      sort.value = optionsContent[0].criteria
    }
  }

  function setSort(criteria: string[]) {
    sort.value = criteria
  }

  return { options, sort, setSort, fetch }
})