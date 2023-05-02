<script setup>
const store = useSettingsStore()
</script>

<template>
  <button v-if="store.theme == 'light'" @click="store.setDarkTheme" class="btn btn-circle btn-ghost">
    <IconSun />
  </button>
  <button v-if="store.theme == 'dark'" @click="store.setLightTheme" class="btn btn-circle btn-ghost">
    <IconMoon />
  </button>
</template>