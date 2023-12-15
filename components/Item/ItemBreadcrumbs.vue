<script setup lang="ts">
defineProps<{
  id: number
}>()
</script>

<template>
  <div class="text-lg breadcrumbs print:hidden">
    <ul>
      <li>
        <NuxtLink to="/collection">Collection</NuxtLink>
      </li>
      <li>ID#{{ id }}</li>
    </ul>
  </div>
</template>