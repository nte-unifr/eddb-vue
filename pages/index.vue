<script setup lang="ts">
const store = useGlobalStore()
</script>

<template>
  <div class="hero min-h-screen">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">{{ store.longTitle }}</h1>
        <div v-html="store.shortDescription" class="py-6"></div>
        <NuxtLink to="/collection" class="btn btn-primary">
          Parcourir la base de données
        </NuxtLink>
      </div>
    </div>
  </div>
</template>