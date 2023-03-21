<script setup>
const props = defineProps({
  title: String,
  info: String,
  raw: Boolean
})
</script>

<template>
  <div v-if="info" class="table-row">
    <div class="table-cell font-bold pb-2 pr-6 w-1/3 text-right">{{ title }}</div>
    <div v-if="raw" class="table-cell pb-2" v-html="info"></div>
    <div v-else class="table-cell pb-2">{{ info }}</div>
  </div>
</template>