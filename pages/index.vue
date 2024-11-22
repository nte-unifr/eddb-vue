<script setup lang="ts">
const name = useAppConfig().name
</script>

<template>
  <ContentDoc v-if="name === 'EDDB'" :path="`/eddb`" v-slot="{ doc }">
    <VHero :image_url="doc.image">
      <div class="py-6 text-justify">
        <ContentRenderer :value="doc" />
      </div>
      <NuxtLink to="/projets" class="btn btn-primary">
        <IconSquareArrowRightFilled /> Découvrir les projets
      </NuxtLink>
    </VHero>
  </ContentDoc>
  <ContentDoc v-else :path="`/${ name }/about`" v-slot="{ doc }">
    <VHero :image_url="doc.image" :title="doc.title" :subtitle="doc.subtitle">
      <div class="py-6 text-justify">
        <ContentRenderer :value="doc" :excerpt="true" />
      </div>
      <NuxtLink to="/collection" class="btn btn-primary">
        <IconSquareArrowRightFilled /> Découvrir la collection
      </NuxtLink>
    </VHero>
  </ContentDoc>
</template>

<style scoped>
.content :deep(a) {
  @apply link link-primary;
}
.content :deep(p) {
  @apply mb-2;
}
</style>