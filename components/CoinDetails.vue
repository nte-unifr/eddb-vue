<script setup>
const props = defineProps({
  coin: Object
})
</script>

<template>
  <div class="bg-base-100 shadow-xl rounded-xl">
    <h2 class="text-4xl font-bold leading-normal pt-10 pl-10">
      {{ coin.identifier || 'No title' }}
    </h2>
    <h3 v-if="coin.authority" class="text-3xl pl-10">
      {{ coin.authority }}
    </h3>
    <div class="px-20 pb-10">
      <figure class="flex my-10">
        <div class="pr-10 w-1/3">
          <DirectusImage v-if="coin.image_obverse" :imageId="coin.image_obverse.id" class="mask mask-squircle" alt="Image obverse" />
        </div>
        <figcaption class="flex w-2/3 pr-4">
          <div v-if="coin.obverse" class="my-auto">
            <h3 class="text-xl font-bold">Avers</h3>
            <p>{{ coin.obverse }}</p>
          </div>
        </figcaption>
      </figure>
      <figure class="flex my-10">
        <div class="pr-10 w-1/3">
          <DirectusImage v-if="coin.image_reverse" :imageId="coin.image_reverse.id" class="mask mask-squircle" alt="Image reverse" />
        </div>
        <figcaption class="flex w-2/3 pr-4">
          <div v-if="coin.reverse" class="my-auto">
            <h3 class="text-xl font-bold">Revers</h3>
            <p>{{ coin.reverse }}</p>
          </div>
        </figcaption>
      </figure>
      <div class="table w-full">
        <div class="table-row-group">
          <div v-if="coin.authority" class="table-row">
            <div class="table-cell font-bold pr-6 w-1/3 text-right">Autorité émettrice</div>
            <div class="table-cell pb-2">{{ coin.authority }}</div>
          </div>
          <div v-if="coin.portrait" class="table-row">
            <div class="table-cell font-bold pr-6 w-1/3 text-right">Portrait</div>
            <div class="table-cell pb-2">{{ coin.portrait }}</div>
          </div>
          <div v-if="coin.date_from && coin.date_to" class="table-row">
            <div class="table-cell font-bold pr-6 w-1/3 text-right">Datation</div>
            <div class="table-cell pb-2"><Datation :from="coin.date_from" :to="coin.date_to" /></div>
          </div>
          <div v-if="coin.mint" class="table-row">
            <div class="table-cell font-bold pr-6 w-1/3 text-right">Atelier</div>
            <div class="table-cell pb-2">{{ coin.mint }}</div>
          </div>
          <div v-if="coin.material" class="table-row">
            <div class="table-cell font-bold pr-6 w-1/3 text-right">Métal</div>
            <div class="table-cell pb-2">{{ coin.material }}</div>
          </div>
          <div v-if="coin.denomination" class="table-row">
            <div class="table-cell font-bold pr-6 w-1/3 text-right">Dénomination</div>
            <div class="table-cell pb-2">{{ coin.denomination }}</div>
          </div>
          <div v-if="coin.weight" class="table-row">
            <div class="table-cell font-bold pr-6 w-1/3 text-right">Poids</div>
            <div class="table-cell pb-2">{{ coin.weight }}</div>
          </div>
          <div v-if="coin.diameter" class="table-row">
            <div class="table-cell font-bold pr-6 w-1/3 text-right">Diamètre</div>
            <div class="table-cell pb-2">{{ coin.diameter }}</div>
          </div>
          <div v-if="coin.axis" class="table-row">
            <div class="table-cell font-bold pr-6 w-1/3 text-right">Axe</div>
            <div class="table-cell pb-2">{{ coin.axis }}</div>
          </div>
          <div v-if="coin.comment" class="table-row">
            <div class="table-cell font-bold pr-6 w-1/3 text-right">Commentaire</div>
            <div class="table-cell pb-2">{{ coin.comment }}</div>
          </div>
          <div v-if="coin.bibliography" class="table-row">
            <div class="table-cell font-bold pr-6 w-1/3 text-right">Bibliographie</div>
            <div class="table-cell pb-2" v-html="coin.bibliography"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>