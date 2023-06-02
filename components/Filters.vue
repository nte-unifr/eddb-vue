<script setup>
const coinsStore = useCoinsStore()
const store = useFiltersStore()
store.fetchFilters()
</script>

<template>
  <h2 class="font-bold text-xl pb-4">{{ coinsStore.total }} Pièces</h2>
  <div class="collapse collapse-plus border border-base-300 bg-base-100 mb-2">
    <input type="checkbox" />
    <div class="collapse-title font-medium">
      Autorité émettrice ({{ store.filters.authorities.active.length }})
    </div>
    <div class="collapse-content">
      <div>
        <a @click="store.removeAuthority(filter)" v-for="filter in store.filters.authorities.active" class="badge badge-primary mr-2 cursor-pointer">
          <IconX />
          {{ filter }}
        </a>
      </div>
      <div>
        <a @click="store.addAuthority(authority)" v-for="authority in store.filters.authorities.inactive" class="badge badge-outline mr-2 cursor-pointer">{{ authority }}</a>
      </div>
    </div>
  </div>
  <div class="collapse collapse-plus border border-base-300 bg-base-100">
    <input type="checkbox" />
    <div class="collapse-title font-medium">
      Atelier ({{ store.filters.mints.active.length }})
    </div>
    <div class="collapse-content">
      <div>
        <a @click="store.removeMint(filter)" v-for="filter in store.filters.mints.active" class="badge badge-primary mr-2 cursor-pointer">
          <IconX />
          {{ filter }}
        </a>
      </div>
      <div>
        <a @click="store.addMint(mint)" v-for="mint in store.filters.mints.inactive" class="badge badge-outline mr-2 cursor-pointer">{{ mint }}</a>
      </div>
    </div>
  </div>
</template>