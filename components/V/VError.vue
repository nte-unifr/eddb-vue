<script setup lang="ts">
const config = useAppConfig()

defineProps<{
  code?: number
  message?: string
}>()
</script>

<template>
  <div class="hero min-h-screen">
    <div class="hero-content max-w-5xl flex-col lg:flex-row-reverse">
      <img src="~/assets/img/error.png" class="max-w-sm rounded-lg shadow-2xl ml-4" />
      <div>
        <h1 class="text-5xl font-bold">{{ config.title }}</h1>
        <h2 class="text-2xl font-bold opacity-70">Database error <span v-if="code">: {{ code }}</span></h2>
        <p v-if="message" class="py-3">{{ message }}</p>
        <p class="py-3">Please contact <em>nte@unifr.ch</em></p>
      </div>
    </div>
  </div>
</template>