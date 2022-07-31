import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    baseURL: "/stud.io/",
    head: {
      htmlAttrs: {
        lang: "ja",
      },
      title: "stud.io",
      meta: [
        { name: "description", content: "stud.io" },
        { name: "format-detection", content: "telephone=no" },
        { name: "robots", content: "noindex" },
        { hid: "og:type", property: "og:type", content: "website" },
        {
          hid: "og:url",
          property: "og:url",
          content: "https://kaiiy.github.io/stud.io/",
        },
        {
          hid: "og:title",
          property: "og:title",
          content: "stud.io",
        },
        {
          hid: "og:description",
          property: "og:description",
          content: "in my studio",
        },
        {
          hid: "og:image",
          property: "og:image",
          content: "https://kaiiy.github.io/stud.io/header.png",
        },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      link: [
        { rel: "icon", type: "image/png", href: "/favicon.png" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "true",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Goldman&family=Share+Tech+Mono&display=swap",
        },
      ],
    },
  },
  modules: ["nuxt-windicss"],
  typescript: {
    strict: true,
  },
});
