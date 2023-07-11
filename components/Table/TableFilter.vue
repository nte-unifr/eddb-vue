<script setup lang="ts">
import { MultiSelectFilter } from '~/types/MultiSelectFilter'
import { TextFilter } from '~/types/TextFilter'

const store = useFilterStore()
store.fetch()
</script>

<template>
  <template v-for="filter in store.filters" :key="filter.id">
    <FilterMultiSelect v-if="filter.type === 'multiselect'" :filter="(filter as MultiSelectFilter)" />
    <FilterText v-if="filter.type === 'text'" :filter="(filter as TextFilter)" />
  </template>
  <button @click="store.resetAll()" class="link ml-2">Tout réinitialiser</button>
</template>