// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "nuxt-icon",
    "@nuxt/image",
    "@nuxt/content",
    "@nuxthub/core",
    "nuxt-gtag",
    "@dargmuesli/nuxt-cookie-control"
  ],
  gtag: {
    id: 'G-2W2R74J96F',
    initCommands: [
      ['consent', 'default', {
        ad_user_data: 'denied',
        ad_personalization: 'denied',
        ad_storage: 'denied',
        analytics_storage: 'denied',
        wait_for_update: 500
      }]
    ]
  },
  cookieControl: {
    colors: {
      modalBackground: '#121b30',
      modalTextColor: '#fff'
    }
  }
})