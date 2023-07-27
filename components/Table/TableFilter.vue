<script setup lang="ts">
const store = useFilterStore()
store.fetch()
</script>

<template>
  <template v-for="filter in store.filters" :key="filter.id">
    <FilterMultiSelect v-if="filter.type === 'multiselect'" :filter="(filter as FilterMultiSelect)" />
    <FilterText v-if="filter.type === 'text'" :filter="(filter as FilterText)" />
  </template>
  <button @click="store.resetAll()" class="link ml-2">Tout réinitialiser</button>
</template>