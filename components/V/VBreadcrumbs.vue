<script lang="ts" setup>
  defineProps<{
    parent: {
      title: string
      path: string
    }
    title: string
  }>()
</script>

<template>
  <div class="text-lg breadcrumbs ml-2 print:hidden">
    <ul>
      <li>
        <NuxtLink :to="parent.path">{{ parent.title }}</NuxtLink>
      </li>
      <li>{{ title }}</li>
    </ul>
  </div>
</template>