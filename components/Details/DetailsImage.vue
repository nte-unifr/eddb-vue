<script setup>
defineProps({
  image: String,
  description: String
})
</script>

<template>
  <div class="card bg-base-100 shadow-xl">
    <figure>
      <img v-if="image" :src="`https://eddb9.unifr.ch/nafo/assets/${image}`" alt="" />
      <IconPhotoOff v-else />
    </figure>
    <div class="card-body">
      <h2 class="card-title">Avers</h2>
      <div v-html="description.replace(/(\r\n|\r|\n)/g, '<br>')"></div>
    </div>
  </div>
</template>