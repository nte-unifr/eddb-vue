<script setup lang="ts">
defineProps<{
  image: Image
}>()
</script>

<template>
  <figure class="flex flex-col lg:flex-row mb-2">
    <div class="lg:w-1/3 pr-6 lg:ml-10">
      <vue-photo-zoom-pro :url="image.url.details" :high-url="image.url.full" :width=120 class="mask mask-squircle w-64" />
    </div>
    <figcaption v-if="image.description" class="flex lg:w-2/3">
      <div class="my-auto">
        <h3 v-if="image.title" class="text-xl font-bold">{{ image.title }}</h3>
        <div v-html="image.description"></div>
        <div class="mt-4">
          <a :href="image.url.full" class="btn btn-sm" download><IconDownload /> Télécharger</a>
        </div>
      </div>
    </figcaption>
  </figure>
</template>

<style scoped>
:deep(p) {
  @apply mb-2;
}
</style>