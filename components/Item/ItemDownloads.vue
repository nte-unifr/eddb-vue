<script setup lang="ts">
import type { ItemImage } from "@/types/item"

defineProps<{
  images: ItemImage[]
  pdfTitle: string
}>()

function print() {
  window.print()
}
</script>

<template>
  <div class="print:hidden py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
    <dt class="lg:ml-8 text-sm font-medium leading-6">Téléchargements</dt>
    <dd class="mt-2 text-sm sm:col-span-2 sm:mt-0">
      <ul role="list" class="divide-y divide-gray-100 rounded-md border border-gray-200">
        <VFile v-for="image in images" type="image">
          <template v-slot:title>{{ image.title }}</template>
          <template v-slot:action>
            <a :href="dThumbnail(image.id) + '?download'" class="font-medium text-primary">Télécharger</a>
          </template>
        </VFile>
        <VFile type="pdf">
          <template v-slot:title>{{ pdfTitle }}</template>
          <template v-slot:action>
            <a @click="print()" class="font-medium text-primary cursor-pointer">Télécharger</a>
          </template>
        </VFile>
      </ul>
    </dd>
  </div>
</template>