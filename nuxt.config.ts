import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "ja",
      },
      title: "stud.io",
      meta: [
        { name: "description", content: "stud.io" },
        { name: "format-detection", content: "telephone=no" },
        { name: "robots", content: "noindex" },
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
