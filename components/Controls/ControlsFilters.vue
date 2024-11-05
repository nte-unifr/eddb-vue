<script lang="ts" setup>
import type { FilterState } from "@/composables/states"
import { FILTER_TYPE_TEXT, FILTER_TYPE_SELECT, FILTER_TYPE_RANGE } from "@/types/filter"

const states:Ref<FilterState[]> = useFilters()

function resetFilters() {
  states.value.forEach((state) => {
    switch (state.filter.type) {
      case FILTER_TYPE_TEXT:
        state.model = ''
        break
      case FILTER_TYPE_RANGE:
        state.model = ['', '']
        break
      case FILTER_TYPE_SELECT:
        state.model = []
        break
      default:
        state.model = ''
    }
  })
}

// Scroll to top when filters changed
watch(
  () => states.value.map(state => state.model),
  () => {
    scrollToTop()
  },
  { deep: true }
)
</script>

<template>
  <div class="hidden lg:flex flex-wrap items-center">
    <template v-for="state in states">
      <ControlsFiltersText v-if="state.filter.type === FILTER_TYPE_TEXT"
        :filter="state.filter" v-model="state.model as string"
      />
      <ControlsFiltersSelect v-else-if="state.filter.type === FILTER_TYPE_SELECT"
        :filter="state.filter" v-model="state.model as string[]"
      />
      <ControlsFiltersRange v-else-if="state.filter.type === FILTER_TYPE_RANGE" 
        :filter="state.filter" v-model:from="state.model[0]" v-model:to="state.model[1]"
      />
    </template>
    <button @click="resetFilters()" class="btn btn-sm btn-ghost"><IconRestore /></button>
  </div>
</template>