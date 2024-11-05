<script setup lang="ts">
defineProps<{
  id: string
  title?: string
  caption?: string
}>()
</script>

<template>
  <div class="flex flex-col lg:flex-row print:flex-row">
    <div class="text-center lg:w-1/3 print:w-1/2 p-4">
      <vue-photo-zoom-pro 
        :url="directusThumbnail(id, 'item-image')"
        :high-url="directusThumbnail(id)"
        :width=120
        class="mask mask-squircle w-64 cursor-zoom-in"
      />
    </div>
    <div class="flex-1 p-4 content-center">
      <h3 v-if="title" class="text-xl font-bold">{{ title }}</h3>
      <div v-if="caption" v-html="caption"></div>
    </div>
  </div>
</template>

<style scoped>
:deep(p) {
  @apply mb-2;
}
</style>