<script setup lang="ts">
import type { FilterConfig } from "@/types/index"

const model = defineModel<string>()

defineProps<{
  config: FilterConfig
}>()

function reset() {
  model.value = ''
}
</script>

<template>
  <div class="dropdown">
    <label :class="{ 'btn-primary': model }" tabindex="0" class="btn btn-sm m-1 normal-case">
      <IconForms />
      {{ config.title }}&nbsp;
      <template v-if="model">({{ model }})</template>
      <IconCaretDown />
    </label>
    <div tabindex="0" class="dropdown-content z-30 bg-base-100 card w-96 shadow-xl">
      <div class="card-body p-4">
        <h2 class="card-title">{{ config.title }}</h2>
        <div class="form-control w-full max-w-xs">
          <input v-model.trim="model" :placeholder="config.info" type="text" class="input input-bordered w-full max-w-xs" />
        </div>
        <div>
          <a @click="reset" class="link text-sm">Réinitialiser</a>
        </div>
      </div>
    </div>
  </div>
</template>