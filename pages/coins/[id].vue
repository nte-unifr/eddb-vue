<script setup>
import { IconPhotoOff } from '@tabler/icons-vue'
const { id } = useRoute().params
const { data, pending, error } = await useAsyncGql('GetCoin', { id: id })
</script>

<template>
  <div class="min-h-screen bg-base-300 pt-24">
    <div class="container mx-auto max-w-5xl">
      <div class="text-lg breadcrumbs">
        <ul>
          <li>
            <NuxtLink to="/coins">
              Pièces
            </NuxtLink>
          </li>
          <li>#{{ id }}</li>
        </ul>
      </div>
      <div v-if="pending">
        Pending
      </div>
      <div v-else-if="error">{{ error }}</div>
      <div v-else-if="data?.coin">
        <DetailsTitle :title="data.coin.identifier" />
        <div class="flex">
          <div class="w-1/2 p-2">
            <DetailsImage :image="data.coin.image_obverse?.id" :description="data.coin.obverse" />
          </div>
          <div class="w-1/2 p-2">
            <DetailsImage :image="data.coin.image_reverse?.id" :description="data.coin.reverse" />
          </div>
        </div>

        <table class="table w-full mt-4">
          <tbody>
            <!-- row 1 -->
            <tr>
              <td class="text-right w-1/2 font-semibold">Cy Ganderton</td>
              <td class="text-left w-1/2">Quality Control Specialist</td>
            </tr>
            <!-- row 2 -->
            <tr>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
            </tr>
            <!-- row 3 -->
            <tr>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
            </tr>
          </tbody>
        </table>
      </div>
      <pre>{{ data }}</pre>
    </div>
  </div>
</template>