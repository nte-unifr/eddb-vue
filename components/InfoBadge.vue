<script setup>
defineProps({
  title: String,
  value: String
})
</script>

<template>
  <span class="badge badge-ghost mr-2">
    <span class="font-bold">{{ title }}:</span>&nbsp;{{ value }}
  </span>
</template>