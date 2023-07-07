<script setup lang="ts">
const props = defineProps<{
  from: number,
  to: number
}>()

const BCLABEL = 'av. J.-C.'
const ADLABEL = 'apr. J.-C.'

const fromLabel = computed(() => {
  return props.from > 0 ? ADLABEL : BCLABEL
})

const toLabel = computed(() => {
  return props.to > 0 ? ADLABEL : BCLABEL
})
</script>

<template>
  <div v-if="from && to" class="">
    <span v-if="from != to">
      {{ Math.abs(from) }} <span v-if="fromLabel != toLabel">{{ fromLabel }}</span>&nbsp;&dash;&nbsp;
    </span>
    {{ Math.abs(to) }} {{ toLabel }}
  </div>
  <div v-else>Datation inconnue</div>
</template>