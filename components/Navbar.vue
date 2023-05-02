<script setup>
const store = useSettingsStore()
</script>

<template>
  <div class="navbar bg-base-100 fixed z-50">
    <div class="navbar-start">
      <NavbarMobile />
      <img v-if="store.theme == 'light'" class="w-12 hidden lg:block" src="~/assets/img/unifr-black-96.png" alt="Unifr logo" />
      <img v-if="store.theme == 'dark'" class="w-12 hidden lg:block" src="~/assets/img/unifr-white-96.png" alt="Unifr logo" />
      <NuxtLink to="/" class="btn btn-ghost normal-case text-xl">
        NAFO
      </NuxtLink>
      <NavbarMenu class="hidden lg:inline-flex" />
    </div>
    <div class="navbar-end">
      <NavbarTheme />
    </div>
  </div>
</template>