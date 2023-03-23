<script setup>
import { IconPhotoOff } from '@tabler/icons-vue'
defineProps({
  imageObverse: String,
  imageReverse: String
})
</script>

<template>
  <div class="flex">
    <div v-if="imageObverse" class="avatar">
      <div class="mask mask-squircle w-20 h-20">
        <img :src="`https://eddb9.unifr.ch/nafo/assets/${imageObverse}?key=list-thumbnail`" alt="" />
      </div>
    </div>
    <div v-if="imageReverse" class="avatar">
      <div class="mask mask-squircle w-20 h-20">
        <img :src="`https://eddb9.unifr.ch/nafo/assets/${imageReverse}?key=list-thumbnail`" alt="" />
      </div>
    </div>
  </div>
</template>