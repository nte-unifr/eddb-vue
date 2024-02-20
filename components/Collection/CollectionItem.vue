<script setup lang="ts">
import type { Item } from "@/types/item"
const configItem = useAppConfig().collection.item

defineProps<{
  item: Item|null
}>()
</script>

<template>
  <tr v-if="item">
    <td v-if="configItem.images.length" class="w-52">
      <div class="flex">
        <img v-for="image in item.images" :src="directusThumbnail(image.id, 'collection-thumb')" alt="" class="mask mask-squircle w-20 h-20"  />
      </div>
    </td>
    <td class="lg:w-52">
      <div class="font-bold link">
        <NuxtLink :to="`/collection/${item.id}`">{{ item.title }}</NuxtLink>
      </div>
      <div v-if="item.subtitle" class="text-sm font-bold">{{ item.subtitle }}</div>
    </td>
    <td v-if="configItem.dates.length" class="w-56 hidden lg:table-cell">
      {{ item.dates }}
    </td>
    <td class="hidden lg:table-cell">
      <template v-for="information in item.informations">
        <span class="badge badge-ghost mr-2 mb-2">
          <span class="font-bold">{{ information.title }}:</span>&nbsp;{{ information.content }}
        </span>
      </template>
    </td>
  </tr>
</template>