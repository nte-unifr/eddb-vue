<script setup>
defineProps({
  id: String
})
</script>

<template>
  <div class="text-lg breadcrumbs">
    <ul>
      <li>
        <NuxtLink to="/collection">Pièces</NuxtLink>
      </li>
      <li>ID#{{ id }}</li>
    </ul>
  </div>
</template>