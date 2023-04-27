<script setup>
const props = defineProps({
  imageId: String,
  preset: String
})

const url = 'https://eddb9.unifr.ch/nafo/assets/'
const key = props.preset ? '?key=' + props.preset : ''
</script>

<template>
  <img v-if="imageId" :src="`${url}${imageId}${key}`" />
</template>