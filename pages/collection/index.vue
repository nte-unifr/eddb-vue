<script setup lang="ts">
import type { Item } from "@/types/item"
import type { Filter, FilterText, FilterMultiDyn, FilterRange } from "@/types/filter"
import { FILTER_TYPE_TEXT, FILTER_TYPE_MULTIDYN, FILTER_TYPE_RANGE } from "@/types/constants"

const config = useAppConfig()
const path = `${config.apiUrl}/items/${config.collection.name}`
const countPath = `${path}?aggregate[count]=*`

const page = useState('collection-page', () => 1)
const sort = useState('collection-sort', () => config.collection.sorters[0].criteria)
const filters = useState<Filter[]>('collection-filters', () => (
config.collection.filters.map(filterConfig => initFilter(filterConfig))
))
const { filter } = useDirectusFilter(filters)

const { data: collection, error } = await useAsyncData<{ items: Item[], total: number, filtered: number }>('collection', async () => {
  const [itemsData, totalData, filteredData] = await Promise.all([
    $fetch<any>(path, { params: { limit: config.collection.limit, page: page.value, sort: sort.value, filter: filter.value } } ),
    $fetch<any>(countPath),
    $fetch<any>(countPath, { params: { filter: filter.value } })
  ])
  return {
    items: itemsData.data.map((apiItem: any) => directusItem(config.collection.item, apiItem)),
    total: totalData.data[0].count || 0,
    filtered: filteredData.data[0].count || 0
  }
}, { watch: [page, sort, filter] })

function resetFilters() {
  filters.value = filters.value.map(filter => initFilter(filter.config))
}
</script>

<template>
  <VError v-if="error" :code="error.statusCode" :message="error.statusMessage" />
  <div v-else-if="collection" class="min-h-screen justify-center flex px-8">
    <div class="max-w-screen-2xl">
      <div class="flex my-4">
        <CollectionSorter v-for="sorter in config.collection.sorters" v-model="sort" :sorter="sorter" />
        <div class="grow"></div>
        <CollectionPager v-model:page.number="page" v-model:total="collection.total" v-model:filtered="collection.filtered" />
      </div>
      <div class="my-4">
        <template v-for="filter in filters">
          <CollectionFilterText v-if="filter.config.type === FILTER_TYPE_TEXT" :config="filter.config" v-model="(filter as FilterText).model" />
          <CollectionFilterMultiDyn v-else-if="filter.config.type === FILTER_TYPE_MULTIDYN" :config="filter.config" v-model="(filter as FilterMultiDyn).model" />
          <CollectionFilterRange v-else-if="filter.config.type === FILTER_TYPE_RANGE" :config="filter.config"
          v-model:from="(filter as FilterRange).model.from" v-model:to="(filter as FilterRange).model.to" />
        </template>
        <button @click="resetFilters()" class="link ml-2">Réinitialiser les filtres</button>
      </div>
      <Collection v-if="collection.items" :items="collection.items" />
      <div class="flex my-4">
        <div class="grow"></div>
        <CollectionPager v-model:page.number="page" v-model:total="collection.total" v-model:filtered="collection.filtered" />
      </div>
    </div>
  </div>
</template>