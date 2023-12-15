<script setup lang="ts">
const props = defineProps<{
  criteria: string
  title: string
  selectedOptions: string[]
  rule: object
}>()
const emit = defineEmits(['update:selectedOptions', 'update:rule'])

const options = useFetchMultiDynFilter(props.criteria).data

function update(e: any) {
  let value = e.target.value
  let selectedOptions = e.target.checked ? [...props.selectedOptions, value] : props.selectedOptions.filter(o => o !== value)
  emit('update:selectedOptions', selectedOptions)
  emit('update:rule', selectedOptions.length ? { [props.criteria]: { _in: selectedOptions } } : {})
}

function reset() {
  emit('update:selectedOptions', [])
  emit('update:rule', {})
}
</script>

<template>
  <div class="dropdown">
    <label :class="{ 'btn-primary': selectedOptions.length }" tabindex="0" class="btn btn-sm m-1 normal-case">
      <IconListDetails />
      {{ title }}
      <template v-if="selectedOptions.length">({{ selectedOptions.length }})</template>
      <IconCaretDown />
    </label>
    <div tabindex="0" class="dropdown-content z-30 bg-base-100 card w-96 shadow-xl">
      <div class="card-body p-4">
        <h2 class="card-title">{{ title }}</h2>
        <div class="max-h-80 overflow-auto">
          <div v-for="option in options" class="flex content-center mb-2">
            <input type="checkbox" :id="`${criteria} - ${option}`" :value="option" @input="update"
              :checked="selectedOptions.includes(option)" class="checkbox checkbox-sm checkbox-primary mr-4">
            <label :for="`${criteria} - ${option}`" class="cursor-pointer">{{ option }}</label>
          </div>
        </div>
        <div>
          <a @click="reset" class="link text-sm">Réinitialiser</a>
        </div>
      </div>
    </div>
  </div>
</template>