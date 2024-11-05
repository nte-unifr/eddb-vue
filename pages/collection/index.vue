<script setup lang="ts">
import type { Item } from "@/types/item"

const { provider } = useRuntimeConfig().public.api
const page = usePage()
const sort = useSort()
const filters = useFilters()

const { data: items, error } = await useFetch<Item[]>(`api/${provider}`, {
  query: { page, sort, filters }
})
</script>

<template>
  <VError v-if="error" :code="error.statusCode" :message="error.statusMessage" />
  <div v-else-if="items" class="min-h-screen justify-center flex px-8">
    <div class="max-w-screen-2xl w-full mx-auto">
      <Controls class="my-4" />
      <TableView :items="items" />
    </div>
  </div>
</template>