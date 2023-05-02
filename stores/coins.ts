import { nextTick } from 'vue'

export const useCoinsStore = defineStore('coins', () => {
  const coins: Ref<any> = ref([])
  const page = ref(1)
  const limit = 50
  const total = ref(1)

  const maxPage = computed(() => Math.ceil(total.value / limit))

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

  async function fetchCoins() {
    const { data } = await useAsyncGql('GetCoins', { limit: limit, page: page.value })
    total.value = data?.value?.coins_aggregated[0]?.count?.id || 0
    coins.value = data?.value?.coins || []

    return nextTick() // return a promise resolved at next DOM update
  }

  return { coins, page, maxPage, total, prevPage, nextPage, goToPage, fetchCoins }
})