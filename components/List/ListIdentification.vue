<script setup>
defineProps({
  identifier: String,
  authority: String
})
</script>

<template>
  <div class="flex items-center space-x-3">
    <div>
      <div class="font-bold">{{ identifier }}</div>
      <div class="text-sm opacity-50">{{ authority }}</div>
    </div>
  </div>
</template>