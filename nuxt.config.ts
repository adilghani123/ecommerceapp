// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/content'],
  css: ["bootstrap/dist/css/bootstrap.min.css"],
  plugins: ["~/plugins/bootstrap.client.ts",], // Ensure the plugin is included
  
})