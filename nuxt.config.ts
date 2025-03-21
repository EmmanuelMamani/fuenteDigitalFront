// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    "@element-plus/nuxt",
    "@nuxtjs/tailwindcss",
    "nuxt-marquee",
    "nuxt-swiper",
    "@nuxt/icon"
  ],
  runtimeConfig: {
      public: {
        apiBase: 'http://localhost:8000/api',
      },
  }
})