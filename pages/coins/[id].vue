<script setup>
const { id } = useRoute().params
const { data, pending, error } = await useAsyncGql('GetCoin', { id: id })
</script>

<template>
  <div class="min-h-screen bg-base-300 py-24">
    <div class="container mx-auto max-w-5xl">
      <DetailsBreadcrumbs :id="id" />
      <div v-if="pending">Pending</div>
      <div v-else-if="error">{{ error }}</div>
      <div v-else-if="data?.coin">
        <div class="bg-base-100 shadow-xl rounded-xl">
          <DetailsTitle :title="data.coin.identifier" />
          <div class="px-20 pb-10">
            <DetailsImageDescription title="Avers" :image="data.coin.image_obverse?.id" :description="data.coin.obverse" />
            <DetailsImageDescription title="Revers" :image="data.coin.image_reverse?.id" :description="data.coin.reverse" />
            <div class="table w-full">
              <div class="table-row-group">
                <DetailsRowText title="Autorité émettrice" :info="data.coin.authority" />
                <DetailsRowDate title="Datation" :from="data.coin.date_from" :to="data.coin.date_to" />
                <DetailsRowText title="Atelier" :info="data.coin.mint" />
                <DetailsRowText title="Métal" :info="data.coin.material" />
                <DetailsRowText title="Dénomination" :info="data.coin.denomination" />
                <DetailsRowText title="Poids" :info="data.coin.weight" />
                <DetailsRowText title="Diamètre" :info="data.coin.diameter" />
                <DetailsRowText title="Axe" :info="data.coin.axis" />
                <DetailsRowText title="Commentaire" :info="data.coin.comment" />
                <DetailsRowText title="Référence bibliographique" :info="data.coin.bibliography" :raw="true" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>