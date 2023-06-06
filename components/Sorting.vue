<script setup>
const store = useSorterStore()
</script>

<template>
  <a v-for="value, key in store.options" @click="store.setSort(key)" class="btn btn-sm btn-ghost mr-4" :class="{ 'btn-link': store.sort == key}">
    <IconAscendingLetters class="inline" v-if="value.type == 'letters'" />
    <IconAscendingNumbers class="inline" v-if="value.type == 'numbers'" />
    {{ key }}
  </a>
</template>