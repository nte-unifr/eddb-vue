<script setup lang="ts">
const name = useAppConfig().name
const { baseURL } = useRuntimeConfig().public
</script>

<template>
  <ContentDoc :path="`/${ name }/${ $route.params.slug }`" v-slot="{ doc }">
    <div class="flex justify-center min-h-screen bg-base-300 py-24">
      <div class="max-w-7xl px-4">
        <div class="mb-16 text-center">
          <img v-if="doc.image" :src="`${ baseURL }/img/${ doc.image }`" class="max-w-xs rounded-lg mb-8 lg:shadow-lg mx-auto" />
          <h1 v-if="doc.title" class="text-5xl font-bold align-center">{{ doc.title }}</h1>
          <h2 v-if="doc.subtitle" class="text-2xl font-bold opacity-70">{{ doc.subtitle }}</h2>
        </div>
        <div class="text-justify bg-base-100 shadow-xl rounded-xl p-8">
          <ContentRenderer :value="doc" />
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