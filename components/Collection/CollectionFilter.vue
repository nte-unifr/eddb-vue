<script setup lang="ts">
const DEBUG = false
const config = useAppConfig().collection
const emit = defineEmits(['setRules'])

interface Filters {
  [criteria: string]: { value: any; rule: object }
}

const filters = useState<Filters>('collection-filters', () => {
  const initialFilters: Filters = {}
  config.filters.forEach(filter => {
    initialFilters[filter.criteria] = { value: initFilter(filter.type), rule: {} }
  })
  return initialFilters
})

const rules = computed(() => {
  const filteredRules = Object.keys(filters.value)
    .filter(criteria => Object.keys(filters.value[criteria].rule).length > 0)
    .map(criteria => filters.value[criteria].rule)
  return JSON.stringify({ _and: filteredRules })
})

function reset() {
  Object.keys(filters.value).forEach(criteria => {
    const filter = config.filters.find(filter => filter.criteria === criteria)
    if (filter) {
      filters.value[criteria].value = initFilter(filter.type)
      filters.value[criteria].rule = {}
    }
  })
}

function initFilter(type: string) {
  switch(type) {
    case 'CollectionFilterText': return ''
    case 'CollectionFilterRange': return ['', '']
    case 'CollectionFilterMultiDyn': return []
  }
}

watch([rules], () => {
  emit('setRules', rules.value)
})
</script>

<template>
  <pre v-if="DEBUG" class="my-4">{{ rules }}</pre>
  <div class="flex flex-col flex-wrap lg:flex-row">
    <template v-for="filter in config.filters">
      <CollectionFilterText v-if="filter.type === 'CollectionFilterText'"
        :criteria="filter.criteria" :title="filter.title" :placeholder="filter.placeholder || ''"
        v-model:search.trim="filters[filter.criteria].value" v-model:rule="filters[filter.criteria].rule"
      />
      <CollectionFilterRange v-if="filter.type === 'CollectionFilterRange'"
        :criteria="filter.criteria" :criteria_from="filter.criteria_from || ''" :criteria_to="filter.criteria_to || ''"
        :title="filter.title" :info="filter.info || ''" v-model:from="filters[filter.criteria].value[0]"
        v-model:to="filters[filter.criteria].value[1]" v-model:rule="filters[filter.criteria].rule"
      />
      <CollectionFilterMultiDyn v-if="filter.type === 'CollectionFilterMultiDyn'"
        :criteria="filter.criteria" :title="filter.title"
        v-model:selectedOptions="filters[filter.criteria].value" v-model:rule="filters[filter.criteria].rule"
      />
    </template>
    <button @click="reset()" class="link ml-2">Réinitialiser les filtres</button>
  </div>
</template>

<style scoped>
:deep(.btn:hover) {
  @apply bg-gray-300;
}
:deep(.btn-primary:hover) {
  @apply bg-primary;
}
</style>