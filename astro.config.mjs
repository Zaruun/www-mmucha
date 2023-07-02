import { defineConfig } from "astro/config";
import relativeLinks from "astro-relative-links";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://mmucha.pl",
  integrations: [relativeLinks(), tailwind()],
});
