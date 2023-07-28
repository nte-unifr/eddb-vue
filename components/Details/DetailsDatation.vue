<script setup lang="ts">
defineProps<{
  dates: number[]
}>()
</script>

<template>
  <div v-if="dates[0]" class="table-row">
    <div class="table-cell font-bold pr-6 w-1/3 text-right">
      Datation
    </div>
    <div class="table-cell pb-2">
      {{ formatDate(dates[0]) }}
      <span v-if="dates[0] != dates[1]">
        &#8211; {{ formatDate(dates[1]) }}
      </span>
    </div>
  </div>
</template>