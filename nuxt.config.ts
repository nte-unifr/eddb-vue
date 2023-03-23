// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-graphql-client'
  ],
  runtimeConfig: {
    public: {
      GQL_HOST: 'https://eddb9.unifr.ch/nafo/graphql' // overwritten by process.env.GQL_HOST
    }
  }
})
