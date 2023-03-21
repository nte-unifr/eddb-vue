<script setup>
import { IconPhotoOff } from '@tabler/icons-vue'
defineProps({
  imageObverse: String,
  imageReverse: String
})
</script>

<template>
  <div class="flex">
    <div class="avatar">
      <div class="mask mask-squircle w-20 h-20">
        <img v-if="imageObverse" :src="`https://eddb9.unifr.ch/nafo/assets/${imageObverse}?key=list-thumbnail`" alt="" />
        <IconPhotoOff size="80" v-else />
      </div>
    </div>
    <div class="avatar">
      <div class="mask mask-squircle w-20 h-20">
        <img v-if="imageReverse" :src="`https://eddb9.unifr.ch/nafo/assets/${imageReverse}?key=list-thumbnail`" alt="" />
        <IconPhotoOff size="80" v-else />
      </div>
    </div>
  </div>
</template>