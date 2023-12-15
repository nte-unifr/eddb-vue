<script setup lang="ts">
defineProps<{
  id: string
  title: string
  type: 'pdf'|'image'
}>()
</script>

<template>
  <li class="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
    <div class="flex w-0 flex-1 items-center">
      <IconPhoto />
      <div class="ml-4 flex min-w-0 flex-1 gap-2">
        <span class="truncate font-medium">{{ title }}</span>
        <span class="flex-shrink-0 opacity-80">{{ type }}</span>
      </div>
    </div>
    <div class="ml-4 flex-shrink-0">
      <a v-if="type === 'image'" :href="dThumbnail(id) + '?download'" class="font-medium text-primary">Télécharger</a>
    </div>
  </li>
</template>