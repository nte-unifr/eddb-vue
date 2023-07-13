// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-graphql-client',
    '@pinia/nuxt',
    '@vueuse/nuxt'
  ],
  plugins: [
    '~/plugins/vue-photo-zoom-pro.js'
  ],
  imports: {
    dirs: ['./stores']
  },
  pinia: {
    autoImports: ['defineStore', 'acceptHMRUpdate'],
  },
  runtimeConfig: {
    public: {
      GQL_HOST: 'https://eddb9.unifr.ch/nafo/graphql' // overwritten by process.env.GQL_HOST
    }
  }
})