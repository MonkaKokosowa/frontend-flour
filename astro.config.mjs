// @ts-check
import { defineConfig } from "astro/config";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: "server", // important to enable SSR mode
  adapter: node({
    mode: "standalone", // bundles all dependencies (optional)
  }),
});
