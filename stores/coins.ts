export const useCoinsStore = defineStore('coins', () => {
  const coins: Ref<any> = ref([])
  const page = ref(1)
  const limit = 100
  const total = ref(1)
  const loading = ref(false)
  const error = ref(false)

  const maxPage = computed(() => Math.ceil(total.value / limit))

  function prevPage() {
    if (page.value > 1) {
      page.value--
      fetchCoins()
    }
  }

  function nextPage() {
    if (page.value < maxPage.value) {
      page.value++
      fetchCoins()
    }
  }

  async function fetchCoins() {
    loading.value = true
    const { data, pending, error: gqlError } = await useAsyncGql('GetCoins', { page: page.value })
    loading.value = pending.value
    error.value = gqlError.value
    total.value = data?.value?.coins_aggregated[0]?.count?.id || 0
    coins.value = data?.value?.coins || []
  }

  return { coins, page, maxPage, total, loading, error, prevPage, nextPage, fetchCoins }
})