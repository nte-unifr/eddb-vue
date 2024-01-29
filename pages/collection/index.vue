<script setup lang="ts">
import type { Item } from "@/types/item"
const config = useAppConfig().collection

const page = useState('collection-page', () => 1)
const sort = useState('collection-sort', () => config.sorters[0].criteria)
const rules = useState('collection-rules', () => '{"_and":[]}')

// useFetchs utilize nuxt useFetch, as params are refs, the request is rerun when they change
const { data: items } = await useFetchCollection({ limit: config.limit, page: page, sort: sort, filter: rules }) as { data: Ref<(Item|null)[]> }
const { data: totalCount } = await useFetchCollectionCount()
const { data: filterCount } = await useFetchCollectionCount({ filter: rules })

watch([sort, rules], () => {
  page.value = 1
})
</script>

<template>
  <div class="max-w-screen-2xl grow">
    <div class="flex my-4">
      <CollectionSorter v-for="sorter in config.sorters" v-model="sort" :sorter="sorter" />
      <div class="grow"></div>
      <CollectionPager v-model:page.number="page" v-model:totalCount="totalCount" v-model:filterCount="filterCount" />
    </div>
    <div class="my-4">
      <CollectionFilter @set-rules="(r) => rules = r" />
    </div>
    <table class="table w-full bg-base-100">
      <thead class="sticky top-16 z-20 bg-base-200">
        <CollectionHead />
      </thead>
      <tbody>
        <tr v-if="items?.length === 0">
          <td class="font-semibold">{{ config.noResults }}</td>
        </tr>
        <template v-for="item in items">
          <CollectionItem v-if="item" :item="item" />
        </template>
      </tbody>
    </table>
    <div class="flex my-4">
      <div class="grow"></div>
      <CollectionPager v-model:page.number="page" v-model:totalCount="totalCount" v-model:filterCount="filterCount" />
    </div>
  </div>
</template>