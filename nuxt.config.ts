// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-aos",
    "@nuxtjs/color-mode",
    "nuxt-icon",
    "@nuxt/image"
  ]
})
