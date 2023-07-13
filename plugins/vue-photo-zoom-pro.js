import { defineNuxtPlugin } from '#app'
import vuePhotoZoomPro from 'vue-photo-zoom-pro'
import 'vue-photo-zoom-pro/dist/style/vue-photo-zoom-pro.css'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.component('vue-photo-zoom-pro', vuePhotoZoomPro)
})