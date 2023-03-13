<script setup>
const { data, pending, error } = await useAsyncGql('GetCoins')
</script>

<template>
  <div class="min-h-screen bg-base-300">
    <div class="drawer drawer-mobile">
      <input id="main-drawer" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col items-center justify-center pt-28">
        <!-- Page content here -->
        <label for="main-drawer" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        <List v-if="data?.coins" :coins="data.coins" />
      </div>
      <div class="drawer-side">
        <label for="main-drawer" class="drawer-overlay"></label>
        <div class="menu p-4 w-80 bg-base-200 text-base-content py-28 prose">
          <!-- Sidebar content here -->
          <Filters />
        </div>
      </div>
    </div>
  </div>
</template>