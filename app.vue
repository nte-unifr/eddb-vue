<script setup lang="ts">
const config = useAppConfig()

// State management
const theme = useTheme()
const sort = useSort()
const page = usePage()
const filters = useFilters()

// Import filter initialization
const { initializeFilters } = useFilterInitialization()

// App initialization
await callOnce(async () => {
  theme.value = 'light'
  sort.value = config.sorters[0].apiCriteria
  page.value = 1
  filters.value = await initializeFilters()
})

// Head configuration
useHead({
  title: 'EDDB - ' + capitalize(config.name),
  meta: [{ name: 'description', content: 'Educational Database' }]
})
</script>

<template>
  <div id="app" :data-theme="theme" class="bg-base-300 print:bg-base-100">
    <Navbar class="print:hidden" />
    <div class="pt-24 mb-8 print:pt-2">
      <NuxtLoadingIndicator />
      <NuxtPage />
    </div>
    <Footer class="print:hidden" />
  </div>
</template>
