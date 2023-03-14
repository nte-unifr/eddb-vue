<script setup>
import { IconArrowRightBar } from '@tabler/icons-vue'

const props = defineProps({
  dateFrom: Number,
  dateTo: Number
})

const fromInfo = computed(() => {
  return checkSameSign(props.dateFrom, props.dateTo) ? '' : checkJc(props.dateFrom)
})
const toInfo = computed(() => {
  return checkJc(props.dateTo)
})

function checkSameSign(a, b) {
  return ((a > 0 && b > 0) || (a < 0 && b < 0))
}
function checkJc(a) {
  return a < 0 ? 'av. J.-C.' : 'apr. J.-C.'
}
</script>

<template>
  <div v-if="dateFrom && dateTo" class="flex">
    {{ Math.abs(dateFrom) }} {{ fromInfo }}
    <IconArrowRightBar class="mx-2" />
    {{ Math.abs(dateTo) }} {{ toInfo }}
  </div>
  <span v-else>Datation inconnue</span>
</template>