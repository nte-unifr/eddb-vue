<script setup lang="ts">
const name = useAppConfig().name
const { baseURL } = useRuntimeConfig().public
</script>

<template>
  <ContentDoc :path="`/${ name }/about`" v-slot="{ doc }">
    <div class="hero min-h-screen">
      <div class="hero-content max-w-5xl flex-col lg:flex-row-reverse">
        <img :src="`${ baseURL }/img/${ doc.image }`" class="max-w-sm rounded-lg mb-8 lg:shadow-2xl lg:mb-0" />
        <div class="px-4">
          <h1 class="text-5xl font-bold">{{ doc.title }}</h1>
          <h2 v-if="doc.subtitle" class="text-2xl font-bold opacity-70">{{ doc.subtitle }}</h2>
          <div class="py-6 text-justify">
            <ContentRenderer :value="doc" :excerpt="true" />
          </div>
          <NuxtLink to="/collection" class="btn btn-primary">
            <IconSquareArrowRightFilled /> Découvrir la collection
          </NuxtLink>
        </div>
      </div>
    </div>
  </ContentDoc>
</template>

<style scoped>
.content :deep(a) {
  color: rgb(87, 13, 248);
  text-decoration: underline;
}
.content :deep(p) {
  @apply mb-2;
}
</style>