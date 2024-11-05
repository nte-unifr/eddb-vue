<script setup lang="ts">
import type { Filter } from "@/types/filter"

defineProps<{
  filter: Filter
}>()

const from = defineModel<string>('from', { default: '' })
const to = defineModel<string>('to', { default: '' })

const localFrom = ref(from.value)
const localTo = ref(to.value)

watch(from, (newValue) => {
  localFrom.value = newValue
})

watch(to, (newValue) => {
  localTo.value = newValue
})

function validateAndUpdate(localValue: string, modelValue: Ref<string>) {
  if (/^-?\d+$/.test(localValue)) {
    modelValue.value = localValue
  } else {
    localValue = ''
    modelValue.value = ''
  }
  return localValue
}

function updateModel() {
  localFrom.value = validateAndUpdate(localFrom.value, from)
  localTo.value = validateAndUpdate(localTo.value, to)
}

function reset() {
  from.value = to.value = ''
  localFrom.value = localTo.value = ''
}
</script>

<template>
  <div class="dropdown">
    <label :class="{ 'btn-primary': from || to }" tabindex="0" class="btn btn-sm m-1 normal-case">
      <IconBracketsContain />
      {{ filter.title }}
      <IconCaretDown />
    </label>
    <div tabindex="0" class="dropdown-content z-30 bg-base-100 card w-96 shadow-xl">
      <div class="card-body p-4">
        <h2 class="card-title">{{ filter.title }}</h2>
        <p v-if="filter.info" class="text-sm italic">{{ filter.info }}</p>
        <div class="flex items-center">
          <input 
            type="text" 
            v-model="localFrom"
            @blur="updateModel"
            @keyup.enter="updateModel"
            pattern="-?\d*"
            inputmode="numeric"
            class="input input-bordered w-20" 
          />
          <div class="mx-2">&#8211;</div>
          <input 
            type="text" 
            v-model="localTo"
            @blur="updateModel"
            @keyup.enter="updateModel"
            pattern="-?\d*"
            inputmode="numeric"
            class="input input-bordered w-20" 
          />
        </div>
        <div class="flex justify-end">
          <a @click="reset" class="btn btn-sm btn-ghost"><IconRestore /></a>
        </div>
      </div>
    </div>
  </div>
</template>