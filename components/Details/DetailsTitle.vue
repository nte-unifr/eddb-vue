<script setup>
defineProps({
  title: String
})
</script>

<template>
  <h2 class="text-5xl font-normal leading-normal mt-0 mb-2">
    {{ title || 'No title' }}
  </h2>
</template>