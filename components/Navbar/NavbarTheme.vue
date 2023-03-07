<script setup lang="ts">
import { IconSun, IconMoon } from '@tabler/icons-vue';
</script>

<template>
  <a class="btn btn-ghost">
    <label class="swap swap-rotate">
      <!-- this hidden checkbox controls the state -->
      <input type="checkbox" />
      <span class="swap-on"><IconSun /></span>
      <span class="swap-off"><IconMoon /></span>
    </label>
  </a>
</template>