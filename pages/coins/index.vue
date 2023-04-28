<script setup>
const currentPage = ref(1)
const coins = ref([])

watch(currentPage, () => {
  fetchData()
})

const fetchData = async () => {
  const { data, pending, error } = await useAsyncGql('GetCoins', { page: currentPage })
  coins.value = data?.value?.coins || []
}

function setPage(pageNumber) {
  currentPage.value = pageNumber
}

fetchData()
</script>

<template>
  <div class="min-h-screen bg-base-300">
    <div class="drawer drawer-mobile">
      <input id="main-drawer" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col pt-24 pb-14">
        <CoinsStats :count="coins.length" :total="coins.length" />
        <div v-if="coins" class="w-full px-8">
          <table class="table w-full">
            <thead>
              <tr>
                <th>Images</th><th>Identification</th><th>Datation</th><th>Infos</th>
              </tr>
            </thead>
            <tbody>
              <CoinsRow v-for="coin in coins" :coin="coin" />
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
          <Filters />
          <button @click="setPage(1)">Page 1</button>
          <button @click="setPage(2)">Page 2</button>
          <input v-model="page" type="text" placeholder="1" />
          Current page : {{ page }}
        </div>
      </div>
    </div>
  </div>
</template>