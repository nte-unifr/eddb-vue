<script setup lang="ts">
import type { Filter } from "@/types/filter"

defineProps<{
  filter: Filter
}>()

const model = defineModel<string[]>({ required: true })

function reset() {
  model.value = []
}
</script>

<template>
  <div class="dropdown">
    <label :class="{ 'btn-primary': model.length }" tabindex="0" class="btn btn-sm m-1 normal-case">
      <IconListDetails />
      {{ filter.title }}
      <IconCaretDown />
    </label>
    <div tabindex="0" class="dropdown-content z-30 bg-base-100 card w-96 shadow-xl">
      <div class="card-body p-4">
        <h2 class="card-title">{{ filter.title }}</h2>
        <div class="max-h-80 overflow-auto">
          <div v-for="option in filter.options" class="flex content-center mb-2">
            <input type="checkbox" :id="`${filter.apiCriteria}-${option}`" :value="option" v-model="model" class="checkbox checkbox-sm checkbox-primary mr-4">
            <label :for="`${filter.apiCriteria}-${option}`" class="cursor-pointer">{{ option }}</label>
          </div>
        </div>
        <div class="flex justify-end">
          <a @click="reset" class="btn btn-sm btn-ghost"><IconRestore /></a>
        </div>
      </div>
    </div>
  </div>
</template>