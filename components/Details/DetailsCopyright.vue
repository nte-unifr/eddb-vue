<script setup lang="ts">
const store = useSettingsStore()
</script>

<template>
  <div class="alert">
    <IconCopyright class="text-primary" />
    <span>{{ store.copyright }}</span>
  </div>
</template>