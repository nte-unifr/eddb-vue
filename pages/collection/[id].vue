<script setup>
const { id } = useRoute().params
const store = useItemStore()
store.fetch(id)
</script>

<template>
  <div class="container mx-auto max-w-5xl">
    <DetailsBreadcrumbs :id="id" />
    <div class="bg-base-100 shadow-xl rounded-xl p-10">
      <div class="mb-10">
        <DetailsHeader :item="store.item" />
      </div>
      <div class="mb-8">
        <DetailsImage v-for="image in store.item.images" :image="image" />
      </div>
      <template v-for="(propertiesGroup, index) in store.item.properties" :key="index">
        <div class="table w-full">
          <div class="table-row-group">
            <DetailsProperty v-for="property in propertiesGroup" :property="property" />
          </div>
        </div>
        <div v-if="index != propertiesGroup.length -1" class="divider"></div>
      </template>
      <div class="mt-8">
        <DetailsCopyright />
      </div>
    </div>
  </div>
</template>