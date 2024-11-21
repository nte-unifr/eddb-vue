import config from "./config/nafo/app";
const baseURL = "/nafo/";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: baseURL,
    buildAssetsDir: "/_nuxt/",
    cdnURL: "",
  },

  imports: {
    dirs: ["utils/directus"],
  },

  modules: ["@nuxtjs/tailwindcss", "@nuxt/content", "@nuxt/image", "@nuxt/icon"],

  plugins: ["~/plugins/vue-photo-zoom-pro.js"],

  runtimeConfig: {
    public: {
      baseURL: baseURL,
      name: config.name,
      itemConfig: config.itemConfig,
      api: config.api,
    }
  },

  experimental: {
    renderJsonPayloads: false,
  },

  devtools: {
    timeline: {
      enabled: true,
    },
  },
});