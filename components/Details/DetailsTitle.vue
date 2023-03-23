<script setup>
defineProps({
  title: String
})
</script>

<template>
  <h2 class="text-4xl font-bold leading-normal pt-10 pl-10">
    {{ title || 'No title' }}
  </h2>
</template>