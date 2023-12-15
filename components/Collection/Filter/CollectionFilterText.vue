<script setup lang="ts">
const props = defineProps<{
  criteria: string
  title: string
  placeholder: string
  search: string
  rule: object
}>()
const emit = defineEmits(['update:search', 'update:rule'])

function update(e: any) {
  let value = e.target.value
  emit('update:search', value)
  emit('update:rule', value ? { [props.criteria]: { "_contains": value } } : {})
}

function reset() {
  emit('update:search', '')
  emit('update:rule', {})
}
</script>

<template>
  <div class="dropdown">
    <label :class="{ 'btn-primary': search }" tabindex="0" class="btn btn-sm m-1 normal-case">
      <IconForms />
      {{ title }}&nbsp;
      <template v-if="search">({{ search }})</template>
      <IconCaretDown />
    </label>
    <div tabindex="0" class="dropdown-content z-30 bg-base-100 card w-96 shadow-xl">
      <div class="card-body p-4">
        <h2 class="card-title">{{ title }}</h2>
        <div class="form-control w-full max-w-xs">
          <input :value="search" :placeholder="placeholder" @input="update"
            type="text" class="input input-bordered w-full max-w-xs" />
        </div>
        <div>
          <a @click="reset" class="link text-sm">Réinitialiser</a>
        </div>
      </div>
    </div>
  </div>
</template>