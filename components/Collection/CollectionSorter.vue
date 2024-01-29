<script setup lang="ts">
import type { SorterConfig } from "@/types/index"
import { SORTER_TYPE_LETTERS, SORTER_TYPE_NUMBERS } from "@/types/constants"

const model = defineModel<string[]>()

const props = defineProps<{
  sorter: SorterConfig
}>()

function update() {
  model.value = props.sorter.criteria
}
</script>

<template>
  <a @click="update" :class="{ 'link-primary': model === sorter.criteria }" class="link mr-4">
    <IconAscendingLetters v-if="sorter.type === SORTER_TYPE_LETTERS" class="inline" />
    <IconAscendingNumbers v-if="sorter.type === SORTER_TYPE_NUMBERS" class="inline" />
    <span class="lg:inline">{{ sorter.title }}</span>
  </a>
</template>