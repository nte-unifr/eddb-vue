<script setup>
const props = defineProps({
  error: String
})
</script>

<template>
  <div v-if="true" class="alert alert-error shadow-lg mt-4">
    <div>
      <IconCircleX />
      <span>Error! {{ error }}</span>
    </div>
  </div>
</template>