<script setup>
import { IconArrowRightBar } from '@tabler/icons-vue'

const props = defineProps({
  title: String,
  from: Number,
  to: Number
})

const formattedDate = computed(() => {
  return formatDate(props.from, props.to)
})
</script>

<template>
  <div v-if="from && to" class="table-row">
    <div class="table-cell font-bold pb-2 pr-6 w-1/3 text-right">{{ title }}</div>
    <div class="pb-2 flex">
      {{ formattedDate[0] }}
      <IconArrowRightBar v-if="formattedDate[0]" class="mx-2" />
      {{ formattedDate[1] }}
    </div>
  </div>
</template>