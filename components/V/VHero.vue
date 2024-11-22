<script setup lang="ts">
defineProps<{
  image_url: string
  title?: string
  subtitle?: string
}>()
</script>

<template>
  <div class="hero min-h-screen">
    <div class="hero-content max-w-6xl flex-col lg:flex-row-reverse">
      <img :src="`/img/${ image_url }`" class="max-w-sm rounded-lg mb-8 lg:shadow-2xl lg:mb-0" />
      <div class="px-4">
        <h1 v-if="title" class="text-5xl font-bold">{{ title }}</h1>
        <h2 v-if="subtitle" class="text-2xl font-bold opacity-70">{{ subtitle }}</h2>
        <slot></slot>
      </div>
    </div>
  </div>
</template>