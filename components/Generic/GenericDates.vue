<script setup lang="ts">
defineProps<{
  dates: number[]
}>()
</script>

<template>
  {{ formatDate(dates[0]) }}
  <span v-if="dates[0] != dates[1]">
    &#8211; {{ formatDate(dates[1]) }}
  </span>
</template>