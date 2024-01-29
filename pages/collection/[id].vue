<script setup lang="ts">
import type { Item } from "@/types/item"

const { id } = useRoute().params
const identifier = parseInt(Array.isArray(id) ? id[0] : id)
const { data: item } = useFetchItem(identifier) as { data: Ref<Item|null> }
</script>

<template>
  <div class="container mx-auto max-w-5xl print:max-w-none">
    <ItemBreadcrumbs :id="identifier" />
    <div class="bg-base-100 shadow-xl rounded-xl p-10 print:p-2 print:shadow-none">
      <div v-if="item">
        <ItemHeader :title="item.title" :subtitle="item.subtitle || ''" />
        <div class="lg:mx-12">
          <ItemImages v-if="item.images?.length" :images="item.images" />
          <div class="divider print:hidden"></div>
          <ItemInformations v-if="item.informations?.length" :informations="item.informations" />
          <div class="divider print:hidden"></div>
          <ItemDownloads v-if="item.images?.length" :images="item.images" :pdf-title="item.title" />
        </div>
        <div class="my-4">
          <div class="alert"><VCopyright /></div>
        </div>
      </div>
      <VLoader v-else />
    </div>
  </div>
</template>