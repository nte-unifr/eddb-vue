<script setup>
definePageMeta({ layout: "table" })
const store = useCoinsStore()
store.fetchCoins()
</script>

<template>
  <div class="min-h-screen bg-base-300 pt-24 px-8">
    <div class="flex my-4">
      <Sorting />
      <div class="grow"></div>
      <Pagination />
    </div>
    <label for="main-drawer" class="btn btn-link drawer-button lg:hidden">Afficher les filtres</label>
    <table class="table w-full">
      <thead>
        <tr><th>Images</th><th>Identification</th><th>Datation</th><th>Infos</th></tr>
      </thead>
      <tbody>
        <CoinsRow v-for="coin in store.coins" :coin="coin" />
      </tbody>
      <tfoot>
        <tr><th>Images</th><th>Identification</th><th>Datation</th><th>Infos</th></tr>
      </tfoot>
    </table>
    <div class="flex my-4">
      <div class="grow"></div>
      <Pagination v-if="store.total > 10" />
    </div>
    </div>
  </template>