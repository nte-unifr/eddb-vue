<script setup lang="ts">
import type { Item } from "@/types/item"

const config = useAppConfig()
const { id } = useRoute().params
const path = `${config.apiUrl}/items/${config.collection.name}/${id}`

const { data: item, error, pending } = useLazyFetch<Item>(path, {
  transform: (response: any) => directusItem(config.item, response.data)
})
</script>

<template>
  <VLoader v-if="pending" />
  <VError v-else-if="error" :code="error.statusCode" :message="error.statusMessage" />
  <div v-else-if="item" class="min-h-screen mx-auto max-w-5xl print:max-w-none">
    <ItemBreadcrumbs :id="item?.id" />
    <div class="bg-base-100 shadow-xl rounded-xl p-10 print:p-2 print:shadow-none">
      <Item :item="item" />
    </div>
  </div>
</template>