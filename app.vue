<script setup>
const store = useSettingsStore()
</script>

<template>
  <div :data-theme="store.theme" class="bg-base-300">
    <Navbar />
    <div class="flex justify-center min-h-screen pt-24 px-8 mb-16">
      <NuxtPage />
    </div>
    <Footer />
  </div>
</template>
