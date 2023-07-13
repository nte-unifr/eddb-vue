export const useSorterStore = defineStore('sorter', () => {

  const sorters: Ref<Sorter[]> = ref([])
  const active: Ref<Sorter|null> = ref(null)

  const sort = computed(() => {
    return active.value?.criteria || 'id'
  })

  async function fetch() {
    if (sorters.value.length === 0) {
      const { data } = await useFetch('/data/sorter.json')
      sorters.value = data.value as Sorter[]
      active.value = sorters.value[0]
    }
  }

  function setActive(sorter: Sorter) {
    active.value = sorter
  }

  return { sort, sorters, active, setActive, fetch }
})