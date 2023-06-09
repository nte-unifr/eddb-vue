export const useSorterStore = defineStore('sorter', () => {

  const options = ref(<any>[])
  const sort = ref([''])

  async function fetch() {
    const optionsContent = await queryContent('sort').sort({ order: 1 }).find()
    options.value = optionsContent
    sort.value = optionsContent[0].criteria
  }

  function setSort(criteria: string[]) {
    sort.value = criteria
  }

  return { options, sort, setSort, fetch }
})