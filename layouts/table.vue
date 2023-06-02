<script setup>
const settings = useSettingsStore()
const coins = useCoinsStore()
const filters =  useFiltersStore()
filters.fetch()
</script>

<template>
  <div :data-theme="settings.theme">
    <Navbar />
    <div class="drawer drawer-mobile bg-base-300">
      <input id="main-drawer" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <slot />
        <Footer />
      </div>
      <div class="drawer-side">
        <label for="main-drawer" class="drawer-overlay"></label>
        <div class="p-4 w-80 bg-base-200 text-base-content py-28">
          <h2 class="font-bold text-xl pb-4">{{ coins.total }} Pièces</h2>
          <Filter title="Autorité émettrice" slug="authorities" />
          <Filter title="Atelier" slug="mints" />
        </div>
      </div>
    </div>
  </div>
</template>
