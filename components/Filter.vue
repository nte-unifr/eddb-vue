<script setup>
const props = defineProps({
  title: String,
  slug: String
})
const store = useFiltersStore()
</script>

<template>
  <div class="collapse collapse-plus border border-base-300 bg-base-100 mb-2">
    <input type="checkbox" />
    <div class="collapse-title font-medium">
      {{ title }} <span v-if="store.filters[slug].active.length">({{ store.filters[slug].active.length }})</span>
    </div>
    <div class="collapse-content">
      <div>
        <a @click="store.removeItem(slug, item)" v-for="item in store.filters[slug].active" class="badge badge-primary mr-2 cursor-pointer">
          <IconX />
          {{ item }}
        </a>
      </div>
      <div>
        <a @click="store.addItem(slug, item)" v-for="item in store.filters[slug].inactive" class="badge badge-outline mr-2 cursor-pointer">{{ item }}</a>
      </div>
    </div>
  </div>
</template>