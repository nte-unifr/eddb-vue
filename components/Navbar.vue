<script setup lang="ts">
const config = useAppConfig()
const theme = useState('app-theme')
</script>

<template>
  <div class="navbar bg-base-100 fixed z-50 drop-shadow-md print:hidden">
    <div class="navbar-start">
      <img v-if="theme == 'light'" class="w-12 hidden lg:block" src="~/assets/img/unifr-black-96.png" alt="Unifr logo" />
      <img v-if="theme == 'dark'" class="w-12 hidden lg:block" src="~/assets/img/unifr-white-96.png" alt="Unifr logo" />
      <NuxtLink to="/" class="btn btn-ghost normal-case text-xl">
        {{ config.title }}
      </NuxtLink>
      <ul class="menu menu-horizontal px-1 hidden lg:inline-flex">
        <li><NuxtLink to="/collection"><IconCollection /> Collection</NuxtLink></li>
        <li><NuxtLink to="/"><IconInfo /> A propos</NuxtLink></li>
      </ul>
    </div>
    <div class="navbar-end">
      <button v-if="theme === 'light'" @click="theme = 'dark'" class="btn btn-circle btn-ghost">
        <IconSun />
      </button>
      <button v-if="theme === 'dark'" @click="theme = 'light'" class="btn btn-circle btn-ghost">
        <IconMoon />
      </button>
    </div>
  </div>
</template>