<script setup lang="ts">
const config = useAppConfig()
const { data: about, error, refresh } = useFetchAbout()
</script>

<template>
  <div class="hero min-h-screen">
    <div class="hero-content flex-col lg:flex-row-reverse max-w-5xl">
      <img v-if="about?.image" :src="dThumbnail(about.image)" class="max-w-sm rounded-lg shadow-2xl" />
      <div>
        <h1 class="text-5xl font-bold">{{ config.title }}</h1>
        <h2 class="text-2xl font-bold opacity-70">{{ about?.slogan}}</h2>
        <div v-html="about?.description" class="py-6"></div>
        <NuxtLink to="/collection" class="btn btn-primary"><IconSquareArrowRightFilled /> Découvrir la collection</NuxtLink>
      </div>
    </div>
  </div>
</template>