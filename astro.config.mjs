// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import sanity from "@sanity/astro";
// https://astro.build/config
export default defineConfig({
  integrations: [react(), icon(), sanity({
    projectId: "etnpx4jg",
    dataset: "production",
    useCdn: false, // for static builds
  })],
  server: {
    allowedHosts: true,
  },
  devToolbar: { enabled: false },
  vite: {
    plugins: [tailwindcss()],
  },
});