<script setup lang="ts">
const { name } = useAppConfig()
const { baseURL } = useRuntimeConfig().public
const theme = useTheme()

const { data: project } = await useAsyncData('project', () => queryContent(name).where({ '_id': { $contains: 'about.md' } }).only(['_id', 'title']).findOne())
</script>

<template>
  <div class="navbar bg-base-100 fixed z-50 drop-shadow-md">
    <div v-if="name != 'eddb' && project" class="navbar-start">
      <img class="w-12 hidden lg:block" :src="`/img/unifr-${ theme }-96.png`" alt="Unifr logo" />
      <NuxtLink to="/" class="btn btn-ghost normal-case text-xl">
        {{ project.title }}
      </NuxtLink>
      <ContentNavigation v-slot="{ navigation }" :query="queryContent(name)">
        <ul class="menu menu-horizontal px-1 hidden lg:inline-flex">
          <li><NuxtLink to="/collection"><IconCollection /> Collection</NuxtLink></li>
          <li v-for="link of navigation[0].children" :key="link._id">
            <NuxtLink :to="`/page/${ link.path }`">
              <IconInfo v-if="link._path?.includes('/about')" />
              <IconClipboardText v-else />
              {{ link.title }}
            </NuxtLink>
          </li>
        </ul>
      </ContentNavigation>
    </div>
    <div v-else class="navbar-start">
      <img class="w-12 hidden lg:block" :src="`/img/unifr-${ theme }-96.png`" alt="Unifr logo" />
      <NuxtLink to="/" class="btn btn-ghost normal-case text-xl">EDDB</NuxtLink>
      <ul class="menu menu-horizontal px-1 hidden lg:inline-flex">
        <li><NuxtLink to="/"><IconInfo /> A propos</NuxtLink></li>
        <li><NuxtLink to="/projets"><IconCollection /> Projets</NuxtLink></li>
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
