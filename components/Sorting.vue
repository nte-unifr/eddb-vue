<script setup>
const store = useCoinsStore()
</script>

<template>
  <div class="btn-group">
    <a @click="store.setSort(store.SORT_IDENTIFIER_KEY)" class="link link-hover mr-4" :class="{ 'link-primary': store.sortKey == store.SORT_IDENTIFIER_KEY }">
      <IconAscendingLetters class="inline" />
      Identifiant
    </a>
    <a @click="store.setSort(store.SORT_DATE_KEY)" class="link link-hover" :class="{ 'link-primary': store.sortKey == store.SORT_DATE_KEY }">
      <IconAscendingNumbers class="inline" />
      Date
    </a>
  </div>
</template>