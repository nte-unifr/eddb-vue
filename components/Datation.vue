<script setup>
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
    -
    {{ formattedDate[1] }}
  </div>
  <div v-else>Datation inconnue</div>
</template>