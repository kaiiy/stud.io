import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      title: "stud.io",
      meta: [
        { name: "format-detection", content: "telephone=no" },
        { name: "description", content: "stud.io" },
      ],
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
    },
  },
  css: ["normalize.css", "@/assets/css/component.css"],
  modules: ["nuxt-windicss"],
  typescript: {
    strict: true,
  },
  nitro: {
    preset: "vercel",
  },
});
