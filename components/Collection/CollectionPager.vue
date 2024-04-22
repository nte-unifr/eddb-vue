<script setup lang="ts">
const page = defineModel<number>('page', { default: 1 })
const total = defineModel<number>('total', { default: 0 })
const filtered = defineModel<number>('filtered', { default: 0 })
const limit = useAppConfig().collection.limit

const maxPage = computed(() => {
  const calculatedPages = Math.ceil(filtered.value / limit)
  return calculatedPages < 1 ? 1 : calculatedPages
})
const firstPage = computed(() => page.value === 1)
const lastPage = computed(() => page.value === maxPage.value)

watch(() => page.value, (newPage) => {
  if (newPage < 1) {
    page.value = 1
  } else if (newPage > maxPage.value) {
    page.value = maxPage.value
  }
})

watch(() => filtered.value, (newFiltered) => {
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
    <button v-if="!firstPage" class="btn btn-sm ml-2" @click="page--;scrollToTop()"><IconPrev /></button>
    <div class="mx-2">Page</div>
    <input v-model="page" @focus="($event.target as HTMLInputElement).select()" type="text" class="input input-bordered input-md input-primary text-center font-bold max-w-14" />
    <div class="font-bold mx-2">/ {{ maxPage }}</div>
    <button v-if="!lastPage" class="btn btn-sm" @click="page++;scrollToTop()" :disabled="lastPage"><IconNext /></button>
  </div>
</template>