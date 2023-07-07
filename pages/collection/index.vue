<script setup>
const store = useCollectionStore()
store.fetch()
</script>

<template>
  <div class="max-w-screen-2xl grow">
    <div class="flex my-4">
      <TableSorter />
      <div class="grow"></div>
      <TablePager />
    </div>
    <div class="flex items-center my-4">
      <TableFilter />
    </div>
    <label for="main-drawer" class="btn btn-link drawer-button lg:hidden">Afficher les filtres</label>
    <table class="table w-full">
      <thead>
        <tr><th>Images</th><th>Identification</th><th>Datation</th><th>Infos</th></tr>
      </thead>
      <tbody>
        <TableRow v-for="item in store.items" :key="item.id" :item="item" />
      </tbody>
      <tfoot>
        <tr><th>Images</th><th>Identification</th><th>Datation</th><th>Infos</th></tr>
      </tfoot>
    </table>
    <div class="flex my-4">
      <div class="grow"></div>
      <TablePager v-if="store.total > 10" />
    </div>
  </div>
</template>