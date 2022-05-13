import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ["normalize.css", "@/assets/css/component.css"],
  modules: ["nuxt-windicss", "@nuxtjs/pwa"],
  typescript: {
    strict: true,
  },
  nitro: {
    preset: "vercel",
  },
});
