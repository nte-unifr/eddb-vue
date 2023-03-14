<script setup>
defineProps({
  coins: Array
})
</script>

<template>
  <div class="overflow-x-auto w-full px-8">
    <table class="table w-full">
      <thead>
        <tr>
          <ListHeaders />
        </tr>
      </thead>
      <tbody>
        <tr v-for="coin in coins">
          <td>{{ coin.id }}</td>
          <td class="w-52"><ListImages :image-obverse="coin.image_obverse?.id" :image-reverse="coin.image_reverse?.id" /></td>
          <td><ListIdentification :identifier="coin.identifier" :authority="coin.authority" /></td>
          <td><ListDatation :date-from="coin.date_from" :date-to="coin.date_to" /></td>
          <td><ListInfos :coin="coin" /></td>
          <th>
            <NuxtLink :to="`/coins/${coin.id}`" class="btn btn-ghost btn-xs">
              details
            </NuxtLink>
          </th>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <ListHeaders />
        </tr>
      </tfoot>

    </table>
  </div>
</template>