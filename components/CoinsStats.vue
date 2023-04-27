<script setup>
defineProps({
  count: Number,
  total: Number
})
</script>

<template>
  <p class="text-base font-semibold px-8 mb-2">{{ count }} / {{ total }}</p>
</template>