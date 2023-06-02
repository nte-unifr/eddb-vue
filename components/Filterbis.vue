<script setup>
const props = defineProps({
  title: String,
  slug: String
})
const store = useFiltersStore()
</script>

<template>
  <div class="dropdown">
    <label v-if="store.activeList[slug].length" tabindex="0" class="btn btn-sm btn-outline btn-primary m-1 normal-case">
      {{ title }} ({{ store.activeList[slug].length }}) <IconCaretDown />
    </label>
    <label v-else tabindex="0" class="btn btn-sm btn-outline m-1 normal-case">
      {{ title }}&nbsp;<IconCaretDown />
    </label>
    <div tabindex="0" class="dropdown-content bg-base-100 card w-96 shadow-xl">
      <div class="card-body p-4">
        <h2 class="card-title">{{ title }}</h2>
        <div>
          <a @click="store.removeActive(slug, item)" v-for="item in store.activeList[slug]" class="badge badge-primary mr-2 cursor-pointer">
            <IconX />
            {{ item }}
          </a>
        </div>
        <div>
          <a @click="store.setActive(slug, item)" v-for="item in store.inactiveList[slug]" class="badge badge-outline mr-2 cursor-pointer">{{ item }}</a>
        </div>
        <div>
          <a @click="store.reset(slug)" class="link text-sm">Réinitialiser</a>
        </div>
      </div>
    </div>
  </div>
</template>