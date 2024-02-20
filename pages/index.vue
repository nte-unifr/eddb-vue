<script setup lang="ts">
import type { About } from "@/types/about"

const config = useAppConfig()
const path = `${config.apiUrl}/items/about`

const { data: about, error, pending } = useLazyFetch<About>(path, {
  transform: (response: any) => directusAbout(config.apiUrl, config.about, response.data)
})
</script>

<template>
  <VLoader v-if="pending" />
  <VError v-else-if="error" :code="error.statusCode" :message="error.statusMessage" />
  <About v-else-if="about" :about="about" />
</template>