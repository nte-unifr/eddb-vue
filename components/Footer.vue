<script setup lang="ts">
const config = useAppConfig()
</script>

<template>
  <footer class="footer p-10 bg-neutral text-neutral-content print:hidden">
    <div>
      <div class="flex">
        <IconNTE />
      </div>
      <p>
        Développement <a class="link link-accent" href="https://www.unifr.ch/nte/fr/">DIT-NTE</a>, service <a class="link link-accent" href="https://www.unifr.ch/it/fr/eddb.html">EDDB</a>
        <br />Responsable des données <a :href="config.mandant.url" class="link link-accent">{{ config.mandant.name }}</a>
      </p>
    </div>
  </footer>
</template>