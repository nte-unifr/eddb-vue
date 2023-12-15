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
    <div class="flex justify-center min-h-screen pt-24 px-8 mb-16 print:pt-2">
      <NuxtPage />
    </div>
    <Footer />
  </div>
</template>
