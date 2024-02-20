<script setup lang="ts">
import type { FilterConfig } from "@/types/index"

const model = defineModel<string[]>()

const props = defineProps<{
  config: FilterConfig
}>()

const options = useFetchMultiDynFilter(props.config.criteria[0]).data

function reset() {
  model.value = []
}
</script>

<template>
  <div class="dropdown">
    <label :class="{ 'btn-primary': model?.length }" tabindex="0" class="btn btn-sm m-1 normal-case">
      <IconListDetails />
      {{ config.title }}
      <template v-if="model?.length">({{ model.length }})</template>
      <IconCaretDown />
    </label>
    <div tabindex="0" class="dropdown-content z-30 bg-base-100 card w-96 shadow-xl">
      <div class="card-body p-4">
        <h2 class="card-title">{{ config.title }}</h2>
        <div class="max-h-80 overflow-auto">
          <div v-for="option in options" class="flex content-center mb-2">
            <input type="checkbox" :id="`${config.criteria}-${option}`" :value="option" v-model="model" class="checkbox checkbox-sm checkbox-primary mr-4">
            <label :for="`${config.criteria}-${option}`" class="cursor-pointer">{{ option }}</label>
          </div>
        </div>
        <div>
          <a @click="reset" class="link text-sm">Réinitialiser</a>
        </div>
      </div>
    </div>
  </div>
</template>