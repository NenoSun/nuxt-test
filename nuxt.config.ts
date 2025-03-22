// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  // ssr: false,
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  css: ['~/assets/css/main.css'],
  app: {
    baseURL: '/nuxt-test/',
    head: {
      title: "Ningyuan's Webpage",
      htmlAttrs: {
        lang: 'cn'
      },
      link: [
        {rel: 'icon', type: 'image/x-icon', href:'/favicon.png'}
      ]
    }
  }
})