<script setup lang="ts">
const emit = defineEmits(['set-page'])
const props = defineProps<{
  page: number
}>()

const rules = useState('collection-rules', () => '')
const { data: totalCount } = useFetchCollectionCount()
const { data: filterCount } = useFetchCollectionCount({ filter: rules })

const maxPage = computed(() => Math.ceil(filterCount.value / useAppConfig().collection.limit))
const firstPage = computed(() => props.page === 1)
const lastPage = computed(() => props.page === maxPage.value)

const setPage = (p: number) => {
  if (p > 0 && p <= maxPage.value) {
    emit('set-page', p)
    scrollToTop()
  }
}
</script>

<template>
  <div class="flex items-center">
    <p class="mr-4 hidden lg:block">
      <strong>{{ filterCount }}</strong> résultats sur <strong>{{ totalCount }}</strong>
    </p>
    <div v-if="maxPage > 1" class="join">
      <button class="btn btn-sm join-item" @click="setPage(page - 1)" :disabled="firstPage">
        <IconPrev />
      </button>
      <template v-for="p in maxPage">
        <button class="btn btn-sm join-item" @click="setPage(p)" :class="{ 'btn-active': p === page }">
          {{ p }}
        </button>
      </template>
      <button class="btn btn-sm join-item" @click="setPage(page + 1)" :disabled="lastPage">
        <IconNext />
      </button>
    </div>
  </div>
</template>