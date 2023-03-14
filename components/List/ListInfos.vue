<script setup>
const props = defineProps({
  coin: Object
})

const infos = computed(() => {
  return [props.coin.mint, props.coin.material, props.coin.denomination]
})
</script>

<template>
  <template v-for="info in infos">
    <span v-if="info" class="badge badge-ghost mr-2">
      {{ info }}
    </span>
  </template>
</template>