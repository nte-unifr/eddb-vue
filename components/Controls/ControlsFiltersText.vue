<script setup lang="ts">
import type { Filter } from "@/types/filter"

defineProps<{
  filter: Filter
}>()

const model = defineModel<string>({ required: true })

function reset() {
  model.value = ''
}
</script>

<template>
  <div class="dropdown">
    <label :class="{ 'btn-primary': model }" tabindex="0" class="btn btn-sm m-1 normal-case">
      <IconForms />
      {{ filter.title }}
      <IconCaretDown />
    </label>
    <div tabindex="0" class="dropdown-content z-30 bg-base-100 card w-96 shadow-xl border-2 border-slate-200">
      <div class="card-body p-4">
        <h2 class="card-title">{{ filter.title }}</h2>
        <div class="form-control w-full max-w-xs">
          <input v-model.trim="model" :placeholder="filter.info" type="text" class="input input-bordered w-full max-w-xs" />
        </div>
        <div class="flex justify-end">
          <a @click="reset" class="btn btn-sm btn-ghost"><IconRestore /></a>
        </div>
      </div>
    </div>
  </div>
</template>