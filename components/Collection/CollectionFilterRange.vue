<script setup lang="ts">
import type { FilterConfig } from "@/types/index"

defineProps<{
  config: FilterConfig
}>()

const from = defineModel<string>('from', { default: '' })
const to = defineModel<string>('to', { default: '' })

function validate(s: string) {
  return (/^-?\d*$/.test(s)) ? s : '' // check if string is an integer or '-'
}

function reset() {
  from.value = ''
  to.value = ''
}

watchEffect(() => {
  from.value = validate(from.value)
  to.value = validate(to.value)
})
</script>

<template>
  <div class="dropdown">
    <label :class="{ 'btn-primary': from || to }" tabindex="0" class="btn btn-sm m-1 normal-case">
      <IconBracketsContain />
      {{ config.title }}&nbsp;
      <template v-if="from || to">
        (
          <IconMathEqualGreater v-if="!to" />
          <IconMathEqualLower v-if="!from" />
          <span v-if="from">{{ from }}</span>
          <span v-if="from && to">&#8211;</span>
          <span v-if="to">{{ to }}</span>
        )
      </template>
      <IconCaretDown />
    </label>
    <div tabindex="0" class="dropdown-content z-30 bg-base-100 card w-96 shadow-xl">
      <div class="card-body p-4">
        <h2 class="card-title">{{ config.title }}</h2>
        <p v-if="config.info" class="text-sm italic">{{ config.info }}</p>
        <div class="flex items-center">
          <input type="text" v-model="from" class="input input-bordered w-20" />
          <div class="mx-2">&#8211;</div>
          <input type="text" v-model="to" class="input input-bordered w-20" />
        </div>
        <div>
          <a @click="reset()" class="link text-sm">Réinitialiser</a>
        </div>
      </div>
    </div>
  </div>
</template>