<script setup>
const store = useCoinsStore()
</script>

<template>
  <a @click="store.setSort(store.SORT_IDENTIFIER_KEY)" class="btn btn-sm btn-ghost mr-4" :class="{ 'btn-link': store.sortKey == store.SORT_IDENTIFIER_KEY }">
    <IconAscendingLetters class="inline" />
    Identifiant
  </a>
  <a @click="store.setSort(store.SORT_DATE_KEY)" class="btn btn-sm btn-ghost" :class="{ 'btn-link': store.sortKey == store.SORT_DATE_KEY }">
    <IconAscendingNumbers class="inline" />
    Date
  </a>
</template>