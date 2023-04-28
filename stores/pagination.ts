export const usePaginationStore = defineStore('pagination', () => {
  const page = ref(1)
  const total = ref(2)
  const doubleTotal = computed(() => total.value * 2)

  function increment() {
    page.value++
  }

  function decrement() {
    page.value--
  }

  return { page, total, doubleTotal, increment, decrement }
})