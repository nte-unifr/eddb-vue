<script setup>
defineProps({
  id: String
})
</script>

<template>
  <div class="text-lg breadcrumbs">
    <ul>
      <li>
        <NuxtLink to="/coins">Pièces</NuxtLink>
      </li>
      <li>#{{ id }}</li>
    </ul>
  </div>
</template>