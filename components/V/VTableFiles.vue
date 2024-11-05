<script setup lang="ts">
import type { File } from '@/types/file'
import { FILE_TYPE_PDF, FILE_TYPE_IMG } from '@/types/file'

defineProps<{
  files: File[]
}>()

function print() {
  window.print()
}
</script>

<template>
  <div class="flex flex-col md:flex-row print:hidden">
    <div class="font-bold md:w-1/3 md:text-right md:p-4">
      Téléchargements
    </div>
    <div class="flex-1 md:p-4">
      <ul class="menu bg-base-200 rounded-box">
        <li v-for="file in files">
          <a v-if="file.type === FILE_TYPE_PDF" @click="print()">
            <IconFileTypePdf v-if="file.type === FILE_TYPE_PDF" />
            <span class="truncate">{{ file.title }}</span>
          </a>
          <a v-if="file.type === FILE_TYPE_IMG" :href="`${file.link}?download`">
            <IconPhoto v-if="file.type === FILE_TYPE_IMG" />
            <span class="truncate">{{ file.title }}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>