<script setup lang="ts">
const config = useAppConfig()

defineProps<{
  id: number
  title: string
  subtitle: string
  images?: string[]
  dates?: number[]
  informations?: { [key: string]: string }[]
}>()
</script>

<template>
  <tr>
    <td v-if="config.collection.hasImages" class="w-52">
      <div class="flex">
        <img v-for="image in images" :src="dThumbnail(image, 'collection-thumb')" alt="" class="mask mask-squircle w-20 h-20"  />
      </div>
    </td>
    <td class="lg:w-52">
      <div class="font-bold link">
        <NuxtLink :to="`/collection/${id}`">{{ title }}</NuxtLink>
      </div>
      <div v-if="subtitle" class="text-sm font-bold">{{ subtitle }}</div>
    </td>
    <td v-if="config.collection.hasDatation" class="w-56 hidden lg:table-cell">
      <GenericDates v-if="dates" :dates="dates" />
    </td>
    <td class="hidden lg:table-cell">
      <div class="">
        <template v-for="information in informations">
          <span v-if="information.value" class="badge badge-ghost mr-2 mb-2">
            <span class="font-bold">{{ information.title }}:</span>&nbsp;{{ information.value }}
          </span>
        </template>
      </div>
    </td>
  </tr>
</template>