<script setup lang="ts">
import type { ItemInformation } from "@/types/item"
import { INFORMATION_TYPE_DATES, INFORMATION_TYPE_DIVIDER, INFORMATION_TYPE_HTML, INFORMATION_TYPE_TEXT } from "@/types/constants"

defineProps<{
  informations: ItemInformation[]
}>()
</script>

<template>
  <template v-for="information in informations">
    <VDescriptionList v-if="information.type === INFORMATION_TYPE_TEXT || information.type === INFORMATION_TYPE_DATES">
      <template v-slot:term>{{ information.title }}</template>
      <template v-slot:details>{{ information.content }}</template>
    </VDescriptionList>
    <VDescriptionList v-if="information.type === INFORMATION_TYPE_HTML">
      <template v-slot:term>{{ information.title }}</template>
      <template v-slot:details><div v-html="information.content"></div></template>
    </VDescriptionList>
    <div class="divider" v-if="information.type === INFORMATION_TYPE_DIVIDER"></div>
  </template>
</template>