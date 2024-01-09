<script setup lang="ts">
const page = defineModel<number>('page', { default: 1 })

const rules = useState('collection-rules', () => '')
const { data: totalCount } = useFetchCollectionCount()
const { data: filterCount } = useFetchCollectionCount({ filter: rules })

const maxPage = computed(() => Math.ceil(filterCount.value / useAppConfig().collection.limit))
const firstPage = computed(() => page.value === 1)
const lastPage = computed(() => page.value === maxPage.value)

watchEffect(() => {
  if (typeof page.value != "number" || page.value < 1) {
    page.value = 1
  } else if (page.value > maxPage.value) {
    page.value = maxPage.value
  }
})
</script>

<template>
  <div class="flex items-center">
    <p class="mr-4 hidden lg:block">
      <strong>{{ filterCount }}</strong> résultats sur <strong>{{ totalCount }}</strong>
    </p>
    <div class="mx-2">Page</div>
    <input v-model="page" @focus="($event.target as HTMLInputElement).select()" type="text" class="input input-bordered input-md input-primary text-center font-bold max-w-14" />
    <div class="font-bold mx-2">/ {{ maxPage }}</div>
    <button class="btn btn-sm ml-2" @click="page--;scrollToTop()" :disabled="firstPage"><IconPrev /></button>
    <button class="btn btn-sm" @click="page++;scrollToTop()" :disabled="lastPage"><IconNext /></button>
  </div>
</template>