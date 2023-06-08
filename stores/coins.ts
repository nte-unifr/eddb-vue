import { nextTick } from 'vue'
import { storeToRefs } from 'pinia'

export const useCoinsStore = defineStore('coins', () => {
  const filtersStore = useFiltersStore()
  const sorterStore = useSorterStore()
  const pagerStore = usePagerStore()
  const STATUS = "pending"

  const coins: Ref<any> = ref([])
  const total = ref(1)
  const { sort } = storeToRefs(sorterStore)
  const  { page } = storeToRefs(pagerStore)

  watch(
    [() => sort.value, () => page.value],
    () => {
      fetchCoins()
    }
  )

  async function fetchCoins() {
    const { data } = await useAsyncGql('GetCoins', {
      limit: pagerStore.limit,
      page: pagerStore.page,
      sort: sorterStore.criteria,
      filter: filtersStore.filterQuery,
      status: STATUS
    })
    total.value = data?.value?.coins_aggregated[0]?.count?.id || 0
    pagerStore.total = data?.value?.totalFiltered?.length || 0
    coins.value = data?.value?.coins || []

    return nextTick() // return a promise resolved at next DOM update
  }

  return { coins, total, fetchCoins }
})