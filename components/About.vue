<script setup lang="ts">
import type { About } from "@/types/about"

defineProps<{
  about: About
}>()
</script>

<template>
  <div class="hero min-h-screen">
    <div class="hero-content max-w-5xl flex-col lg:flex-row-reverse">
      <img v-if="about.image" :src="about.image" class="max-w-sm rounded-lg shadow-2xl" />
      <div>
        <h1 class="text-5xl font-bold">{{ about.title }}</h1>
        <h2 v-if="about.slogan" class="text-2xl font-bold opacity-70">{{ about.slogan }}</h2>
        <div v-if="about.description" v-html="about.description" class="py-6"></div>
        <NuxtLink to="/collection" class="btn btn-primary"><IconSquareArrowRightFilled /> Découvrir la collection</NuxtLink>
      </div>
    </div>
  </div>
</template>