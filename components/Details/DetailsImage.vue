<script setup lang="ts">
defineProps<{
  image: Image
}>()
</script>

<template>
  <figure class="flex flex-col lg:flex-row mb-2">
    <div class="lg:w-1/3 pr-6">
      <img :src="image.url" class="mask mask-squircle w-64 lg:ml-10" alt="" />
    </div>
    <figcaption v-if="image.description" class="flex lg:w-2/3">
      <div class="my-auto">
        <h3 v-if="image.title" class="text-xl font-bold">{{ image.title }}</h3>
        <p>{{ image.description }}</p>
      </div>
    </figcaption>
  </figure>
</template>