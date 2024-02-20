<script setup lang="ts">
import type { Item } from "@/types/item"
const config = useAppConfig().collection

defineProps<{
  items: Item[]
}>()
</script>

<template>
  <table class="table w-full bg-base-100">
    <thead class="sticky top-16 z-20 bg-base-200">
      <tr>
        <th v-if="config.item.images.length" class="text-base">Images</th>
        <th class="text-base">Identification</th>
        <th v-if="config.item.dates.length" class="text-base hidden lg:table-cell">Datation</th>
        <th class="text-base hidden lg:table-cell">Informations</th>
      </tr>
    </thead>
    <tbody>
      <tr v-if="!items?.length">
        <td class="font-semibold">{{ config.noResults }}</td>
      </tr>
      <CollectionItem v-for="item in items" :item="item" />
    </tbody>
  </table>
</template>