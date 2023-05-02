<script setup>
const store = useCoinsStore()
</script>

<template>
  <h2 class="font-bold text-xl pb-2">{{ store.total }} Pièces</h2>
  <p>Aucun filtre configuré pour l'instant</p>
</template>