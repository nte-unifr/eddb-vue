<script setup lang="ts">
const config = useAppConfig()
const theme = useState('app-theme', () => 'light')

useHead({
  title: 'EDDB - ' + config.title,
  meta: [{ name: 'description', content: 'Educational Database' }]
})
</script>

<template>
  <div id="app" :data-theme="theme" class="bg-base-300">
    <Navbar />
    <div class="pt-24 mb-8 print:pt-2">
      <NuxtLoadingIndicator />
      <NuxtPage />
    </div>
    <Footer />
  </div>
</template>
