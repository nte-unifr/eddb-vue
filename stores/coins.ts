import { nextTick } from 'vue'
import { useFiltersStore } from './filters'
import { useSorterStore } from './sorter'
import { storeToRefs } from 'pinia'

export const useCoinsStore = defineStore('coins', () => {
  const STATUS = "pending"
  const LIMIT = 50

  const coins: Ref<any> = ref([])
  const page = ref(1)
  const total = ref(1)
  const totalFiltered = ref(1)

  const filtersStore = useFiltersStore()
  const sorterStore = useSorterStore()
  const { sort } = storeToRefs(sorterStore)

  const maxPage = computed(() => Math.ceil(totalFiltered.value / LIMIT))

  function prevPage() {
    if (page.value > 1) {
      page.value--
      return fetchCoins()
    }
  }

  function nextPage() {
    if (page.value < maxPage.value) {
      page.value++
      return fetchCoins()
    }
  }

  function goToPage(p: number) {
    page.value = p
    return fetchCoins()
  }

  // watch(sorterStore.currentSort, (newSort) => {
  //   fetchCoins()
  // })
  watch(
    () => sort.value,
    () => {
      fetchCoins()
    }
  )

  async function fetchCoins() {
    console.log(filtersStore.filterQuery)
    const { data } = await useAsyncGql('GetCoins', { limit: LIMIT, page: page.value, sort: sorterStore.criteria, filter: filtersStore.filterQuery, status: STATUS })
    total.value = data?.value?.coins_aggregated[0]?.count?.id || 0
    totalFiltered.value = data?.value?.totalFiltered?.length || 0
    coins.value = data?.value?.coins || []

    return nextTick() // return a promise resolved at next DOM update
  }

  return { coins, page, maxPage, total, totalFiltered, prevPage, nextPage, goToPage, fetchCoins }
})