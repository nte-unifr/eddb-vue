<script setup lang="ts">
defineProps<{
  type: 'pdf' | 'image'
}>()

function print() {
  window.print()
}
</script>

<template>
  <li class="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
    <div class="flex w-0 flex-1 items-center">
      <IconFileTypePdf v-if="type === 'pdf'" />
      <IconPhoto v-if="type === 'image'" />
      <div class="ml-4 flex min-w-0 flex-1 gap-2">
        <span class="truncate font-medium">
          <slot name="title"></slot>
        </span>
      </div>
    </div>
    <div class="ml-4 flex-shrink-0">
      <slot name="action"></slot>
    </div>
  </li>
</template>