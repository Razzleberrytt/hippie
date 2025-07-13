import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  output: "static",
  integrations: [tailwind()],
  site: "https://razzleberrytt.github.io/hippie/",
  base: "/hippie/",
});
