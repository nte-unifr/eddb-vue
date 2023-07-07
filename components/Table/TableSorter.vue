<script setup>
const store = useSorterStore()
store.fetch()
</script>

<template>
  <a v-for="option in store.options" @click="store.setSort(option.criteria)" class="btn btn-sm btn-ghost mr-4" :class="{ 'btn-link': store.sort == option.criteria }">
    <IconAscendingLetters class="inline" v-if="option.type == 'letters'" />
    <IconAscendingNumbers class="inline" v-if="option.type == 'numbers'" />
    <span class="hidden lg:inline">{{ option.title }}</span>
  </a>
</template>