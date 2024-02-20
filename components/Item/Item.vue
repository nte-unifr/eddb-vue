<script setup lang="ts">
import type { Item } from "@/types/item"

defineProps<{
  item: Item
}>()
</script>

<template>
  <div class="my-2">
    <h2 class="text-4xl font-bold leading-normal">{{ item.title }}</h2>
    <h3 v-if="item.subtitle" class="text-3xl">{{ item.subtitle }}</h3>
  </div>
  <div class="lg:mx-12">
    <ItemImages v-if="item.images?.length" :images="item.images" />
    <div class="divider print:hidden"></div>
    <ItemInformations v-if="item.informations?.length" :informations="item.informations" />
    <div class="divider print:hidden"></div>
    <ItemDownloads v-if="item.images?.length" :images="item.images" :pdf-title="item.title" />
  </div>
  <div class="my-4">
    <div class="alert"><VCopyright /></div>
  </div>
</template>