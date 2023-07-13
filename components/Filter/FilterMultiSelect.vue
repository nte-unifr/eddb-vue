<script setup lang="ts">
import { MultiSelectFilter } from '~/types/MultiSelectFilter'

const props = defineProps<{
  filter: MultiSelectFilter
}>()

const active = computed(() => {
  return props.filter.activeList.length
})
</script>

<template>
  <div class="dropdown">
    <label :class="{ 'btn-primary': active }" tabindex="0" class="btn btn-sm btn-outline m-1 normal-case">
      {{ filter.title }}&nbsp;
      <template v-if="active">({{ active }})</template>
      <IconCaretDown />
    </label>
    <div tabindex="0" class="dropdown-content z-30 bg-base-100 card w-96 shadow-xl">
      <div class="card-body p-4">
        <h2 class="card-title">{{ filter.title }}</h2>
        <div>
          <a v-for="option in filter.activeList" @click="filter.removeActive(option)" class="badge badge-primary mr-2 cursor-pointer">
            <IconX />&nbsp;{{ option }}
          </a>
        </div>
        <div>
          <a v-for="option in filter.getInactiveList()" @click="filter.setActive(option)" class="badge badge-outline mr-2 cursor-pointer">
            {{ option }}
          </a>
        </div>
        <div>
          <a @click="filter.reset()" class="link text-sm">Réinitialiser</a>
        </div>
      </div>
    </div>
  </div>
</template>