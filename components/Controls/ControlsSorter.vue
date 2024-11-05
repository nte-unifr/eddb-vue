<script setup lang="ts">
import type { Sorter } from "@/types/sorter"
import { SORTER_TYPE_LETTERS, SORTER_TYPE_NUMBERS } from "@/types/sorter"

const sorters: Sorter[] = useAppConfig().sorters
const sort = useSort()
</script>


<template>
  <div>
    <a @click="sort = sorter.apiCriteria" v-for="sorter in sorters" :class="{ 'link-primary': sort === sorter.apiCriteria }" class="link mr-4">
      <IconAscendingLetters v-if="sorter.type === SORTER_TYPE_LETTERS" class="inline" />
      <IconAscendingNumbers v-if="sorter.type === SORTER_TYPE_NUMBERS" class="inline" />
      <span class="lg:inline">{{ sorter.title }}</span>
    </a>
  </div>
</template>