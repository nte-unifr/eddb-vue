<script setup lang="ts">
const store = useFilterStore()
store.fetch()
</script>

<template>
  <template v-for="filter in store.filters" :key="filter.id">
    <FilterMultiSelect v-if="filter.type === 'multiselect'" :filter="filter" />
  </template>
  <button @click="store.resetAll()" class="link ml-2">Tout réinitialiser</button>
</template>