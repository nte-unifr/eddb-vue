<script setup lang="ts">
const store = useSettingsStore()
</script>

<template>
  <div class="navbar bg-base-100 fixed z-50">
    <div class="navbar-start">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          <li><NuxtLink to="/collection"><IconCollection /> Collection</NuxtLink></li>
          <li><NuxtLink to="/about"><IconInfo /> A propos</NuxtLink></li>
        </ul>
      </div>
      <img v-if="store.theme == 'light'" class="w-12 hidden lg:block" src="~/assets/img/unifr-black-96.png" alt="Unifr logo" />
      <img v-if="store.theme == 'dark'" class="w-12 hidden lg:block" src="~/assets/img/unifr-white-96.png" alt="Unifr logo" />
      <NuxtLink to="/" class="btn btn-ghost normal-case text-xl">
        {{ store.title }}
      </NuxtLink>
      <ul class="menu menu-horizontal px-1 hidden lg:inline-flex">
        <li><NuxtLink to="/collection"><IconCollection /> Collection</NuxtLink></li>
        <li><NuxtLink to="/about"><IconInfo /> A propos</NuxtLink></li>
      </ul>
    </div>
    <div class="navbar-end">
      <button v-if="store.theme == 'light'" @click="store.setDarkTheme" class="btn btn-circle btn-ghost">
        <IconSun />
      </button>
      <button v-if="store.theme == 'dark'" @click="store.setLightTheme" class="btn btn-circle btn-ghost">
        <IconMoon />
      </button>
    </div>
  </div>
</template>