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
        Développement <a class="link link-accent" href="https://www.unifr.ch/nte/fr/">DIT-NTE</a>
        <br/>Dans le cadre du service <a class="link link-accent" href="https://www.unifr.ch/it/fr/eddb.html">EDDB</a>
      </p>
    </div>
    <div>
      <span class="footer-title">Responsable des données</span>
      <div>
        <div class="flex items-center">
          <a :href="config.mandant.url" class="link link-accent">{{ config.mandant.name }}</a>
        </div>
      </div>
    </div>
  </footer>
</template>