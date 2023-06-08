<script setup>
const store = useCoinsStore()
const filters =  useFiltersStore()
store.fetchCoins()
filters.fetch()
</script>

<template>
  <div class="min-h-screen max-w-screen-2xl bg-base-300 pt-24 px-8">
    <div class="flex my-4">
      <Sorting />
      <div class="grow"></div>
      <Pagination />
    </div>
    <div class="flex items-center my-4">
      <Filterbis title="Autorité émettrice" slug="authority" />
      <Filterbis title="Portrait" slug="portrait" />
      <Filterbis title="Atelier" slug="mint" />
      <Filterbis title="Métal" slug="material" />
      <p class="ml-2"><strong>{{ store.totalFiltered }}</strong>&nbsp;résultats sur&nbsp;<strong>{{ store.total }}</strong></p>
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