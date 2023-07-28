<script setup lang="ts">
defineProps<{
  item: Item
}>()
</script>

<template>
  <tr>
    <td class="w-52">
      <div class="flex">
        <img v-for="image in item.images" :src="image.url.thumb" :alt="image.title" class="mask mask-squircle w-20 h-20"  />
      </div>
    </td>
    <td class="lg:w-52">
      <div class="font-bold link">
        <NuxtLink :to="`/collection/${item.id}`">{{ item.title }}</NuxtLink>
      </div>
      <div v-if="item.subtitle" class="text-sm font-bold">{{ item.subtitle }}</div>
    </td>
    <td class="w-52 hidden lg:table-cell">
      <MiscDates :from="item.dates[0]" :to="item.dates[1]" />
    </td>
    <td class="hidden lg:table-cell">
      <div class="">
        <template v-for="tag in item.tags">
          <span v-if="tag.value" class="badge badge-ghost mr-2 mb-2">
            <span class="font-bold">{{ tag.title }}:</span>&nbsp;{{ tag.value }}
          </span>
        </template>
      </div>
    </td>
  </tr>
</template>