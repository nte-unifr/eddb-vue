// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  "app": {
    "baseURL": "/nafo/",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  imports: {
    dirs: ['utils/directus']
  },
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  plugins: [
    '~/plugins/vue-photo-zoom-pro.js'
  ],
  runtimeConfig: {
    public: {
      baseURL: process.env.API_URL || 'https://eddb9.unifr.ch/',
    }
  },
  experimental: {
    renderJsonPayloads: false
  }
})
