<script setup>
import { IconInfoSquareRounded, IconCoins } from '@tabler/icons-vue';
</script>

<template>
  <ul class="menu menu-horizontal px-1">
    <li>
      <NuxtLink to="/coins">
        <IconCoins /> Pièces
      </NuxtLink>
    </li>
    <li>
      <NuxtLink to="/about">
        <IconInfoSquareRounded /> A propos
      </NuxtLink>
    </li>
  </ul>
</template>