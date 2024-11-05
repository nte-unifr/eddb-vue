<script setup lang="ts">
import type { Item } from "@/types/item"
import type { File } from "@/types/file"
import { FILE_TYPE_PDF, FILE_TYPE_IMG } from '@/types/file'

const { name } = useAppConfig()
const { id } = useRoute().params
const { provider } = useRuntimeConfig().public.api
const { data: project } = await useAsyncData('project', () => queryContent(name).where({ '_id': { $contains: 'about.md' } }).only(['_id', 'title', 'copyright']).findOne())

const { data: item, error, pending } = await useFetch<Item>(`api/${provider}/${id}`)

const files = computed<File[]>(() => {
  const filesList: File[] = [
    { type: FILE_TYPE_PDF, title: item.value?.title || '' }
  ]
  
  if (item.value?.images) {
    const imageFiles: File[] = item.value.images.map(image => ({
      type: FILE_TYPE_IMG,
      title: image.title || image.id,
      link: directusThumbnail(image.id)
    }))
    filesList.push(...imageFiles)
  }

  return filesList
})
</script>

<template>
  <VLoader v-if="pending" />
  <VError v-else-if="error" :code="error.statusCode" :message="error.statusMessage" />
  <div v-else-if="item" class="min-h-screen mx-auto max-w-5xl print:max-w-none">
    <VBreadcrumbs :title="`ID#${item.id}`" :parent="{ title: 'Collection', path: '/collection'}" />
    <div class="bg-base-100 shadow-xl rounded-xl p-10 print:p-2 print:shadow-none m-2 mb-24">
      <div class="py-4 print:pt-0 border-b-2 border-gray-200">
        <h2 class="text-4xl font-bold leading-tight">
          {{ item.title }}
        </h2>
        <h3 v-if="item.subtitle" class="text-3xl mt-2">
          {{ item.subtitle }}
        </h3>
      </div>
      <div class="lg:mx-8">
        <VTable>
          <VTableSection>
            <VTableFigure v-for="image in item.images" v-bind="image" />
          </VTableSection>
          <VTableSection v-for="(group, index) in item.informations" class="break-before-page">
            <VTableRow v-if="index === 0 && item.dates" title="Datation" :content="`${item.dates}`" :is-html="false" />
            <VTableRow v-for="information in group" :title="information.title" :is-html="information.type === 'HTML'"
              :content="`${information.content}`"
            />
          </VTableSection>
          <VTableSection>
            <VTableFiles :files="files" />
          </VTableSection>
        </VTable>
      </div>
      <div v-if="project" class="alert mt-8 mb-2">
        <IconCopyright />
        <span>{{ project.copyright }}</span>
      </div>
    </div>
  </div>
</template>
