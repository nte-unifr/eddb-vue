<script setup>
const { id } = useRoute().params
const { data, pending, error } = await useAsyncGql('GetCoin', { id: id })
</script>

<template>
  <div class="min-h-screen bg-base-300 py-24">
    <div class="container mx-auto max-w-5xl">
      <Breadcrumbs :id="id" />
      <AlertLoading v-if="pending" />
      <AlertError v-else-if="error" :error="error" />
      <CoinDetails v-else-if="data?.coin" :coin="data.coin" />
    </div>
  </div>
</template>