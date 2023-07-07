<script setup lang="ts">
defineProps<{
  item: Item
}>()
</script>

<template>
  <tr>
    <td>
      <div class="flex w-40">
        <img v-for="image in item.images" :src="image.url" :alt="image.title" class="mask mask-squircle w-20 h-20"  />
      </div>
    </td>
    <td>
      <div class="font-bold link">
        <NuxtLink :to="`/collection/${item.id}`">{{ item.title }}</NuxtLink>
      </div>
      <div v-if="item.subtitle" class="text-sm font-bold">{{ item.subtitle }}</div>
    </td>
    <td>
      <MiscDates :from="item.dates[0]" :to="item.dates[1]" />
    </td>
    <td>
      <template v-for="tag in item.tags">
        <div v-if="tag.value" class="badge badge-ghost mr-2 inline">
          <span class="font-bold">{{ tag.title }}:</span>&nbsp;{{ tag.value }}
        </div>
      </template>
    </td>
  </tr>
</template>