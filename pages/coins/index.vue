<script setup>
const { data, pending, error } = await useAsyncGql('GetCoins')
</script>

<template>
  <div class="min-h-screen bg-base-300">
    <div class="drawer drawer-mobile">
      <input id="main-drawer" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col pt-24 pb-14">
        <ListStats :count="data?.coins.length" :total="data?.coins.length" />
        <div v-if="data?.coins" class="overflow-x-auto w-full px-8">
          <table class="table w-full">
            <thead><ListHeaders /></thead>
            <tbody>
              <tr v-for="coin in data.coins">
                <td>{{ coin.id }}</td>
                <td class="w-52"><ListImages :image-obverse="coin.image_obverse?.id" :image-reverse="coin.image_reverse?.id" /></td>
                <td><ListIdentification :identifier="coin.identifier" :authority="coin.authority" /></td>
                <td><ListDate :from="coin.date_from" :to="coin.date_to" /></td>
                <td><ListInfos :coin="coin" /></td>
                <th>
                  <NuxtLink :to="`/coins/${coin.id}`" class="btn btn-ghost btn-xs">details</NuxtLink>
                </th>
              </tr>
            </tbody>
            <tfoot><ListHeaders /></tfoot>
          </table>
        </div>
      </div>
      <div class="drawer-side">
        <label for="main-drawer" class="drawer-overlay"></label>
        <div class="menu p-4 w-80 bg-base-200 text-base-content py-28 prose"><Filters /></div>
      </div>
    </div>
  </div>
</template>