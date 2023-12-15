<script setup lang="ts">
const config = useAppConfig().collection
</script>

<template>
  <tr>
    <th v-if="config.hasImages" class="text-base">Images</th>
    <th class="text-base">Identification</th>
    <th v-if="config.hasDatation" class="text-base hidden lg:table-cell">Datation</th>
    <th class="text-base hidden lg:table-cell">Informations</th>
  </tr>
</template>