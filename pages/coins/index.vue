<script setup>
const store = useCoinsStore()
store.fetchCoins()
</script>

<template>
  <div class="min-h-screen bg-base-300">
    <div class="drawer drawer-mobile">
      <input id="main-drawer" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col pt-24 pb-14">
        <AlertError v-if="store.error" />
        <AlertLoading v-else-if="store.loading" />
        <div v-else="store.coins" class="w-full px-8">
          <table class="table w-full">
            <thead>
              <tr>
                <th>Images</th><th>Identification</th><th>Datation</th><th>Infos</th>
              </tr>
            </thead>
            <tbody>
              <CoinsRow v-for="coin in store.coins" :coin="coin" />
            </tbody>
            <tfoot>
              <tr>
                <th>Images</th><th>Identification</th><th>Datation</th><th>Infos</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      <div class="drawer-side">
        <label for="main-drawer" class="drawer-overlay"></label>
        <div class="menu p-4 w-80 bg-base-200 text-base-content py-28 prose">
          <div class="btn-group">
            <button @click="store.prevPage()" class="btn btn-sm">«</button>
            <button class="btn btn-sm btn-outline">Page {{ store.page }} / {{ store.maxPage }}</button>
            <button @click="store.nextPage()" class="btn btn-sm">»</button>
          </div>
          <Filters />
          <CoinsStats :count="store.coins.length" :total="store.total" />
        </div>
      </div>
    </div>
  </div>
</template>