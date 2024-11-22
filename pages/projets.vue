<script setup lang="ts">
const { baseURL } = useRuntimeConfig().public
</script>

<template>
  <div class="flex justify-center py-24">
    <div class="max-w-6xl">
      <ContentQuery path="/projets" find="one" v-slot="{ data }">
        <div class="mt-24">
          <h1 class="text-5xl font-bold pb-6 mb-6 border-b-2 border-gray-300">
            {{ data.title }}
          </h1>
          <div class="text-lg">
            <ContentRenderer :value="data" />
          </div>
          <div class="my-20 divider divider-neutral"><IconRocket /></div>
        </div>
      </ContentQuery>

      
      <ContentList path="/" :where="{ _id: { $contains: 'about.md' } }" v-slot="{ list }">
        <div class="divide-y divide-gray-400">
          <div v-for="project in list" :key="project._path">
            <div class="flex flex-col lg:flex-row-reverse my-24 px-4">
              <div class="flex justify-center items-center mb-4 lg:w-1/3 lg:ml-8 ">
                <img v-if="project.image" :src="`/img/${ project.image }`" class="rounded-lg shadow-2xl size-64" />
                <img v-else :src="`img/eddb-art.png`" class="rounded-lg shadow-2xl size-64" />
              </div>
              <div class="lg:w-2/3">
                <div class="mb-4">
                  <h2 :id="project.id" class="text-4xl font-bold">
                    {{ project.title }}
                  </h2>
                  <h3 v-if="project.subtitle" class="text-2xl font-bold opacity-70">
                    {{ project.subtitle }}
                  </h3>
                </div>
                <div class="text-justify">
                   {{ project.description }}
                </div>
                <div class="flex flex-col md:flex-row my-4">
                  <div class="font-bold mr-2 mb-1">Responsable des données : </div>
                  <a :href="project.mandant.url" class="link link-primary">{{ project.mandant.name }}</a>
                </div>
                <div class="flex mt-4">
                  <NuxtLink v-if="project.url" :to="project.url" class="btn btn-primary mr-2 mb-1"><IconSquareArrowRightFilled /> Découvrir la collection</NuxtLink>
                  <NuxtLink v-if="project.admin" :to="project.admin" class="btn btn-primary"><IconLockSquareRoundedFilled /> Admin</NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContentList>
    </div>
  </div>
</template>

<style scoped>
h2:before {
  content:"";
  display:block;
  height:100px;
  margin-top:-100px;
  visibility:hidden;
}
</style>