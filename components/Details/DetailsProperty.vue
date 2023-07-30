<script setup lang="ts">
defineProps<{
  property: Property
}>()
</script>

<template>
  <div v-if="property.value || property.emptyDisplay" class="table-row">
    <div class="table-cell font-bold pr-6 w-1/3 text-right">
      {{ property.title }}
    </div>
    <template v-if="property.value">
      <div v-if="property.html" v-html="property.value" class="table-cell pb-2 has-links"></div>
      <div v-else class="table-cell pb-2">{{ property.value }}</div>
    </template>
    <div v-else class="table-cell pb-2 text-gray-500">Indéterminé</div>
  </div>
</template>

<style scoped>
.has-links :deep(a) {
  color: rgb(87, 13, 248);
  text-decoration: underline;
}
:deep(p) {
  @apply mb-2;
}
</style>