<script setup lang="ts">
const config = useAppConfig()

defineProps<{
  code?: number
  message?: string
}>()
</script>

<template>
  <div class="hero min-h-screen">
    <div class="hero-content flex-col lg:flex-row">
      <img src="~/assets/img/error.png" class="max-w-sm rounded-lg shadow-2xl mr-4" />
      <div>
        <h1 class="text-5xl font-bold">Database error</h1>
        <div class="py-4">
          <p>{{ code }} {{ message }}</p>
          <p>Please contact <em>nte@unifr.ch</em></p>
        </div>
      </div>
    </div>
  </div>
</template>