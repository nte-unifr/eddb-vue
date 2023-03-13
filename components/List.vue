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
          <td><ListImages /></td>
          <td><ListIdentification :identifier="coin.identifier" /></td>
          <td><ListDatation /></td>
          <td><ListInfos /></td>
          <th>
            <button class="btn btn-ghost btn-xs">details</button>
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