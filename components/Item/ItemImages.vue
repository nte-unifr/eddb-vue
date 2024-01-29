<script setup lang="ts">
import type { ItemImage } from "@/types/item"

defineProps<{
  images?: ItemImage[]
}>()
</script>

<template>
  <div class="my-8 print:break-after-page">
    <figure v-for="image in images" class="flex flex-col lg:flex-row mb-2">
      <div class="lg:w-1/3 pr-6 cursor-zoom-in">
        <vue-photo-zoom-pro :url="dThumbnail(image.id, 'item-image')" :high-url="dThumbnail(image.id)" :width=120 class="mask mask-squircle w-64" />
      </div>
      <figcaption v-if="image.title || image.description" class="flex lg:w-2/3">
        <div class="my-auto">
          <h3 v-if="image.title" class="text-xl font-bold">{{ image.title }}</h3>
          <div v-if="image.description" class="lg:mr-32" v-html="image.description"></div>
        </div>
      </figcaption>
    </figure>
  </div>
</template>

<style scoped>
:deep(p) {
  @apply mb-2;
}
</style>