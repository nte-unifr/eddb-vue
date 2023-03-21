<script setup>
defineProps({
  title: String,
  image: String,
  description: String
})
</script>

<template>
  <div class="flex my-10">
    <figure class="pr-10 w-1/3">
      <img v-if="image" :src="`https://eddb9.unifr.ch/nafo/assets/${image}`" alt="" class="mask mask-squircle" />
    </figure>
    <div class="flex w-2/3 pr-4">
      <div class="my-auto">
        <h3 v-if="title" class="text-xl font-bold">{{ title }}</h3>
        <p>{{ description }}</p>
      </div>
    </div>
  </div>
</template>