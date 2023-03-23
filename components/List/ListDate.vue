<script setup>
import { IconArrowRightBar } from '@tabler/icons-vue'

const props = defineProps({
  from: Number,
  to: Number
})

const formattedDate = computed(() => {
  return formatDate(props.from, props.to)
})
</script>

<template>
  <div v-if="from && to" class="flex">
    {{ formattedDate[0] }}
    <IconArrowRightBar v-if="formattedDate[0]" class="mx-2" />
    {{ formattedDate[1] }}
  </div>
  <div v-else>Datation inconnue</div>
</template>