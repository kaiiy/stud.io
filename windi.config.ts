import { defineConfig } from "vite-plugin-windicss";

export default defineConfig({
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      "dark-purple": "#AC98CD",
      "dark-red": "#EA9586",
    }),
  },
});
