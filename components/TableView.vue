<script lang="ts" setup>
import type { Item } from "@/types/item"

defineProps<{
  items: Item[] | null
}>()
</script>

<template>
  <table class="table w-full bg-base-100">
    <thead class="sticky top-16 lg:top-64 z-20 bg-base-200">
      <tr>
        <th class="text-base">Identification</th>
        <th class="text-base hidden lg:table-cell">Datation</th>
        <th class="text-base hidden lg:table-cell">Informations</th>
      </tr>
    </thead>
    <tbody>
      <tr v-if="!items?.length">
        <td class="font-semibold">Aucun résultat</td>
      </tr>
      <tr v-for="item in items">
        <td>
          <div class="flex items-center">
            <div v-if="!item.images?.length" class="flex-none pr-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="56"  height="56"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-clipboard-text"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" /><path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" /><path d="M9 12h6" /><path d="M9 16h6" /></svg>
            </div>
            <div v-else class="flex-none flex pr-4">
              <img v-for="image in item.images" :src="directusThumbnail(image.id, 'collection-thumb')" alt="" class="mask mask-squircle w-20 h-20"  />
            </div>
            <div class="font-bold">
              <NuxtLink :to="`/collection/${item.id}`" class="link">{{ item.title }}</NuxtLink>
              <div v-if="item.subtitle" class="text-sm">{{ item.subtitle }}</div>
            </div>
          </div>
        </td>
        <td class="w-56 hidden lg:table-cell">
          {{ item.dates }}
        </td>
        <td class="hidden lg:table-cell">
          <template v-for="information in item.informations?.flat()">
            <span v-if="information.content != ''" class="badge badge-ghost mr-2 mb-2">
              <span class="font-bold">{{ information.title }}:</span>&nbsp;{{ information.content }}
            </span>
          </template>
        </td>
      </tr>
    </tbody>
  </table>
</template>