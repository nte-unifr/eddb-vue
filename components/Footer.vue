<script setup lang="ts">
const { name } = useAppConfig()

const { data: project } = await useAsyncData('project', () => queryContent(name).where({ '_id': { $contains: 'about.md' } }).only(['_id', 'title', 'copyright']).findOne())
const { data: projects } = await useAsyncData('projects', () => queryContent('/').where({ '_id': { $contains: 'about.md' } }).only(['id','title']).find())
</script>

<template>
  <footer class="footer bg-neutral text-neutral-content p-10">
    <aside>
      <div class="flex">
        <IconBrandOpenSource />
        <IconLetterN />
        <IconLetterT />
        <IconLetterE />
      </div>
      <p class="font-bold">
        Développement <a class="link" href="https://www.unifr.ch/nte/fr/">DIT-NTE</a>
        <br />
        Service <a class="link" href="https://www.unifr.ch/it/fr/eddb.html">EDDB</a>
      </p>
    </aside>
    <nav>
      <div class="my-2 mb-6">
        <h6 class="footer-title flex items-center gap-2"><IconCopyright /> Copyright</h6>
        <p v-if="project?.copyright" class="text-sm"> {{ project.copyright }}</p>
        <p v-else class="text-sm">
          Université de Fribourg
        </p>
      </div>
      <div class="my-2">
        <h6 class="footer-title">Tous les projets EDDB</h6>
        <div class="grid lg:grid-flow-col lg:gap-6">
          <NuxtLink v-for="project of projects" :to="`/projets#${project.id}`">{{ project.title }}</NuxtLink>
        </div>
      </div>
    </nav>
  </footer>
</template>