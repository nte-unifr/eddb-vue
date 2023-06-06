export const usePagerStore = defineStore('pager', () => {

  const LIMIT = 50
  const page = ref(1)
  const total = ref(1) // total entities of current set (with filters applied)
  const max = computed(() => Math.ceil(total.value / LIMIT))

  function prev() {
    if (page.value > 1) {
      page.value--
    }
  }

  function next() {
    if (page.value < max.value) {
      page.value++
    }
  }

  function goTo(p: number) {
    page.value = p
  }

  return { page, prev, next, goTo }
})