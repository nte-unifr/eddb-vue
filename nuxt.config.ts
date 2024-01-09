// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  plugins: [
    '~/plugins/vue-photo-zoom-pro.js'
  ],
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL || 'https://eddb9.unifr.ch/nafo',
    }
  },
  experimental: {
    renderJsonPayloads: false
  }
})