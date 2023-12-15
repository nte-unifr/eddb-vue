<script setup lang="ts">
interface Sorter {
  title: string;
  type: string;
  criteria: string[];
}

const emit = defineEmits(['set-sort'])

defineProps<{
  sort: string[]
}>()
const sorters: Sorter[] = useAppConfig().collection.sorters
</script>

<template>
  <a v-for="sorter in sorters" class="link mr-4" @click="$emit('set-sort', sorter.criteria)"
    :class="{ 'link-primary': sort === sorter.criteria }">
    <IconAscendingLetters v-if="sorter.type == 'letters'" class="inline" />
    <IconAscendingNumbers v-if="sorter.type == 'numbers'" class="inline" />
    <span class="lg:inline">{{ sorter.title }}</span>
  </a>
</template>