<script setup lang="ts">
const { id } = useRoute().params
const identifier = parseInt(Array.isArray(id) ? id[0] : id)
const { data: item, error, refresh } = useFetchItem(identifier)
</script>

<template>
  <div class="container mx-auto max-w-5xl print:max-w-none">
    <ItemBreadcrumbs :id="identifier" />
    <div class="bg-base-100 shadow-xl rounded-xl p-10 print:p-2 print:shadow-none">
      <div v-if="item">
        <div class="my-2">
          <h2 class="text-4xl font-bold leading-normal">{{ item.title }}</h2>
          <h3 v-if="item.subtitle" class="text-3xl">{{ item.subtitle }}</h3>
        </div>
        <div class="my-8">
          <ItemImage v-for="image in item.images" :id="image.id" :title="image.title" :description="image.description" />
        </div>
        <div class="lg:mx-16 pagebreak">
          <div class="divider"></div>
          <div class="mt-4">
            <dl class="divide-y divide-gray-100">
              <ItemInformation v-if="item.dates">
                <template v-slot:title>Datation</template>
                <template v-slot:content><GenericDates :dates="item.dates" /></template>
              </ItemInformation>
              <ItemInformation v-for="information in item.informations">
                <template v-slot:title>{{ information.title }}</template>
                <template v-slot:content>{{ information.content }}</template>
              </ItemInformation>
            </dl>
            <div v-if="item.dates" class="divider"></div>
            <dl class="divide-y divide-gray-100">
              <ItemInformation v-for="addendum in item.addendums">
                <template v-slot:title>{{ addendum.title }}</template>
                <template v-slot:content>
                  <div v-html="addendum.content"></div>
                </template>
              </ItemInformation>
            </dl>
            <div class="print:hidden">
              <div class="divider"></div>
              <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt class="text-sm font-medium leading-6">Téléchargements</dt>
                <dd class="mt-2 text-sm sm:col-span-2 sm:mt-0">
                  <ul role="list" class="divide-y divide-gray-100 rounded-md border border-gray-200">
                    <ItemDownload v-for="image in item.images" :id="image.id" :title="image.title" :url="image.id" type="image"  />
                    <ItemDownload :id="item.id" :title="item.title" type="pdf" />
                  </ul>
                </dd>
              </div>
            </div>
          </div>
        </div>
        <div class="my-4">
          <div class="alert"><GenericCopyright /></div>
        </div>
      </div>
      <GenericLoader v-else />
    </div>
  </div>
</template>

<style>
@media print {
  .pagebreak { page-break-before: always; }
}
</style>