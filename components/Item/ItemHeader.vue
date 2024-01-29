<script setup lang="ts">
defineProps<{
  title: string
  subtitle: string
}>()
</script>

<template>
  <div class="my-2">
    <h2 class="text-4xl font-bold leading-normal">{{ title }}</h2>
    <h3 v-if="subtitle" class="text-3xl">{{ subtitle }}</h3>
  </div>
</template>