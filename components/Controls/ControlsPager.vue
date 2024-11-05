<script setup lang="ts">
const apiConfig = useRuntimeConfig().public.api
const page = usePage()
const filters = useFilters()

const { data: total } = await useFetch<number>(`/api/${apiConfig.provider}/count`)
const { data: filtered } = await useFetch<number>(`/api/${apiConfig.provider}/count`, { query: { filters } })

const maxPage = computed(() => {
  const calculatedPages = Math.ceil((filtered.value || 1) / apiConfig.limit)
  return calculatedPages < 1 ? 1 : calculatedPages
})
const isFirstPage = computed(() => page.value === 1)
const isLastPage = computed(() => page.value === maxPage.value)

// Prevent page outside range [1 - maxPage]
watch(() => page.value, (newPage) => {
  if (newPage < 1) {
    page.value = 1
  } else if (newPage > maxPage.value) {
    page.value = maxPage.value
  }
  scrollToTop()
})

// Check maxPage when filter applied
watch(() => filtered.value, (newCounts) => {
  if (page.value > maxPage.value) {
    page.value = maxPage.value
  }
})
</script>

<template>
  <div class="flex items-center">
    <p class="mr-4 hidden lg:block">
      <strong>{{ filtered }}</strong> résultats sur <strong>{{ total }}</strong> au total
    </p>
    <button v-if="!isFirstPage" class="btn btn-sm ml-2" @click="page--"><IconPrev /></button>
    <div class="mx-2">Page</div>
    <input v-model="page" @focus="($event.target as HTMLInputElement).select()" type="text" class="input input-bordered input-md input-primary text-center font-bold max-w-14" />
    <div class="font-bold mx-2">/ {{ maxPage }}</div>
    <button v-if="!isLastPage" class="btn btn-sm" @click="page++" :disabled="isLastPage"><IconNext /></button>
  </div>
</template>