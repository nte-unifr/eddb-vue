<script setup>
//const store = useCoinsStore()
const store = usePagerStore()

function scrollToTop() {
  const element = document.getElementById('nuxtpage');
  if (element) {
    element.scrollIntoView();
  }
}
</script>

<template>
  <div class="btn-group">
    <button @click="store.prev()" class="btn btn-sm btn-ghost" :class="{ 'btn-disabled': store.page == 1 }">
      <IconPrev />
    </button>
    <template v-for="p in store.max">
      <button @click="store.goTo(p)" class="btn btn-sm btn-ghost" :class="{ 'btn-active': p == store.page }">{{ p }}</button>
    </template>
    <button @click="store.next()" class="btn btn-sm btn-ghost" :class="{ 'btn-disabled': store.page == store.max }">
      <IconNext />
    </button>
  </div>
</template>