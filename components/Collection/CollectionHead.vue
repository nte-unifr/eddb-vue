<script setup lang="ts">
const configItem = useAppConfig().collection.item
</script>

<template>
  <tr>
    <th v-if="configItem.images.length" class="text-base">Images</th>
    <th class="text-base">Identification</th>
    <th v-if="configItem.dates.length" class="text-base hidden lg:table-cell">Datation</th>
    <th class="text-base hidden lg:table-cell">Informations</th>
  </tr>
</template>