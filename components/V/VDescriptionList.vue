<template>
  <div class="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
    <dt class="lg:ml-8 text-sm font-medium leading-6">
      <slot name="term"></slot>
    </dt>
    <dd class="mt-1 text-sm leading-6 opacity-90 sm:col-span-2 sm:mt-0">
      <slot name="details"></slot>
    </dd>
  </div>
</template>

<style scoped>
:deep(a) {
  color: rgb(87, 13, 248);
  text-decoration: underline;
}
:deep(p) {
  @apply mb-2;
}
</style>