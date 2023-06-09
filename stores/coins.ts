import { storeToRefs } from 'pinia'

export const useCoinsStore = defineStore('coins', () => {
  const sorterStore = useSorterStore()
  const pagerStore = usePagerStore()
  const filtersStore = useFiltersStore()

  const coins: Ref<any> = ref([])
  const total = ref(1)
  const { sort } = storeToRefs(sorterStore)
  const { page } = storeToRefs(pagerStore)
  const { filter } = storeToRefs(filtersStore)

  watch(
    [() => sort.value, () => page.value, () => filter.value],
    () => {
      fetchCoins()
    }
  )

  async function fetchCoins() {
    const { data } = await useAsyncGql('GetCoins', {
      limit: pagerStore.limit,
      page: pagerStore.page,
      sort: sorterStore.sort,
      filter: filtersStore.filter,
      status: filtersStore.status
    })
    total.value = data?.value?.coins_aggregated[0]?.count?.id || 0
    coins.value = data?.value?.coins || []
    pagerStore.total = data?.value?.total?.length || 0
  }

  return { coins, total, fetchCoins }
})