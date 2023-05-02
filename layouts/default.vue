<script setup>
const store = useSettingsStore()
</script>

<template>
  <div :data-theme="store.theme" class="bg-base-200">
    <Navbar />
    <slot />
    <Footer />
  </div>
</template>
