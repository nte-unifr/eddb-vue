<script setup>
const props = defineProps({
  coin: Object
})
</script>

<template>
  <tr>
    <td class="w-52">
      <div class="flex">
        <DirectusImage :imageId="coin.image_obverse?.id" preset="list-thumbnail" class="mask mask-squircle w-20 h-20" alt="Image obverse thumbnail" />
        <DirectusImage :imageId="coin.image_reverse?.id" preset="list-thumbnail" class="mask mask-squircle w-20 h-20" alt="Image reverse thumbnail" />
      </div>
    </td>
    <td>
      <div class="font-bold link">
        <NuxtLink :to="`/coins/${coin.id}`">{{ coin.identifier }}</NuxtLink>
      </div>
      <div class="text-sm font-bold">{{ coin.authority }}</div>
    </td>
    <td>
      <Datation :from="coin.date_from" :to="coin.date_to" />
    </td>
    <td>
      <InfoBadge v-if="coin.mint" title="Atelier" :value="coin.mint" />
      <InfoBadge v-if="coin.material" title="Métal" :value="coin.material" />
      <InfoBadge v-if="coin.denomination" title="Dénomination" :value="coin.denomination" />
    </td>
  </tr>
</template>