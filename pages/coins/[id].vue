<script setup>
import { IconPhotoOff } from '@tabler/icons-vue'
const { id } = useRoute().params
const { data, pending, error } = await useAsyncGql('GetCoin', { id: id })
</script>

<template>
  <div class="min-h-screen bg-base-300 py-24">
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
        <div class="bg-base-100 shadow-xl rounded-xl">
          <h2 class="text-4xl font-normal leading-normal pt-10 pl-10">
            {{ data.coin.identifier || 'No title' }}
          </h2>
          <div class="px-20 pb-10">
            <DetailsImageDescription title="Avers" :image="data.coin.image_obverse?.id" :description="data.coin.obverse" />
            <DetailsImageDescription title="Revers" :image="data.coin.image_reverse?.id" :description="data.coin.reverse" />

            <table class="table w-full">
              <div class="table-row-group">
                <DetailsRow title="Atelier" :info="data.coin.mint" />
                <DetailsRow title="Métal" :info="data.coin.material" />
                <DetailsRow title="Dénomination" :info="data.coin.denomination" />
                <DetailsRow title="Poids" :info="data.coin.weight" />
                <DetailsRow title="Diamètre" :info="data.coin.diameter" />
                <DetailsRow title="Axe" :info="data.coin.axis" />
                <DetailsRow title="Commentaire" :info="data.coin.comment" />
                <DetailsRow title="Référence bibliographique" :info="data.coin.bibliography" :raw="true" />
              </div>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>