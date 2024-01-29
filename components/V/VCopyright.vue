<script setup lang="ts">
const config = useAppConfig()
</script>

<template>
  <IconCopyright />
  <div class="ml-2">{{ config.copyright }}</div>
</template>