<script setup lang="ts">
const config = useAppConfig().collection

const page = useState('collection-page', () => 1)
const sort = useState('collection-sort', () => config.sorters[0].criteria)
const rules = useState('collection-rules', () => '{"_and":[]}')

// useFetchs utilize nuxt useFetch, as params are refs, the request is rerun when they change
const { data: items, error, refresh } = useFetchCollection({ limit: config.limit, page: page, sort: sort, filter: rules })

watch([sort, rules], () => {
  page.value = 1
})
</script>

<template>
  <div class="max-w-screen-2xl grow">
    <div class="flex my-4">
      <CollectionSorter :sort="sort" @set-sort="(s) => sort = s" />
      <div class="grow"></div>
      <CollectionPager v-model:page.number.trim="page" />
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
        <CollectionItem v-for="item in items" :key="item.id"
          :id="item.id" :title="item.title" :subtitle="item.subtitle"
          :images="item.images" :dates="item.dates" :informations="item.informations"
        />
      </tbody>
    </table>
    <div class="flex my-4">
      <div class="grow"></div>
      <CollectionPager v-model:page.number.trim="page" />
    </div>
  </div>
</template>