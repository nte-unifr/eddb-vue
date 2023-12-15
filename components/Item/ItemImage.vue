<script setup lang="ts">
defineProps<{
  id: string
  title: string
  description?: string
}>()
</script>

<template>
  <figure class="flex flex-col lg:flex-row mb-2">
    <div class="lg:w-1/3 pr-6 lg:ml-10 cursor-zoom-in">
      <vue-photo-zoom-pro :url="dThumbnail(id, 'item-image')" :high-url="dThumbnail(id)" :width=120 class="mask mask-squircle w-64" />
    </div>
    <figcaption v-if="title || description" class="flex lg:w-2/3">
      <div class="my-auto">
        <h3 v-if="title" class="text-xl font-bold">{{ title }}</h3>
        <div class="lg:mr-32" v-html="description"></div>
      </div>
    </figcaption>
  </figure>
</template>

<style scoped>
:deep(p) {
  @apply mb-2;
}
</style>