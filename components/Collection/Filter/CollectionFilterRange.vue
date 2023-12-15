<script setup lang="ts">
const props = defineProps<{
  criteria: string
  criteria_from: string
  criteria_to: string
  title: string
  info: string
  from: string
  to: string
  rule: object
}>()
const emit = defineEmits(['update:from', 'update:to', 'update:rule'])

const DEFAULT_FROM = -9999
const DEFAULT_TO = 9999

function update(e: any, pos: number) {
  let value = e.target.value
  let numberCheck = parseInt(value)
  let newValue = (isNaN(numberCheck) && value !== '-') ? '' : value
  let newFrom = pos === 0 ? newValue : props.from
  let newTo = pos === 1 ? newValue : props.to

  emit('update:from', newFrom)
  emit('update:to', newTo)
  emit('update:rule', calculateRule(newFrom, newTo))
}

function reset() {
  emit('update:from', '')
  emit('update:to', '')
  emit('update:rule', [])
}

function calculateRule(f: string, t: string) {
  const from = isNaN(parseInt(f)) ? DEFAULT_FROM : parseInt(f)
  const to = isNaN(parseInt(t)) ? DEFAULT_TO : parseInt(t)

  if (from === DEFAULT_FROM && to === DEFAULT_TO) {
    return {}
  } else {
    return { _or: [
      { _and: [{ [props.criteria_from]: { _gte: from } }, { [props.criteria_from]: { _lte: to } }] },
      { _and: [{ [props.criteria_to]: { _gte: from } }, { [props.criteria_to]: { _lte: to } }] },
    ]}
  }
}
</script>

<template>
  <div class="dropdown">
    <label :class="{ 'btn-primary': from || to }" tabindex="0" class="btn btn-sm m-1 normal-case">
      <IconBracketsContain />
      {{ title }}&nbsp;
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
        <h2 class="card-title">{{ title }}</h2>
        <p v-if="info" class="text-sm italic">{{ info }}</p>
        <div class="flex items-center">
          <input type="text" :value="from" @input="update($event, 0)" class="input input-bordered w-20" />
          <div class="mx-2">&#8211;</div>
          <input type="text" :value="to" @input="update($event, 1)" class="input input-bordered w-20" />
        </div>
        <div>
          <a @click="reset()" class="link text-sm">Réinitialiser</a>
        </div>
      </div>
    </div>
  </div>
</template>