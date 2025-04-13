// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
// https://astro.build/config
export default defineConfig({
  integrations: [react(), icon()],
  server: {
    allowedHosts: true,
  },
  devToolbar: { enabled: false },
  vite: {
    plugins: [tailwindcss()],
  },
});
