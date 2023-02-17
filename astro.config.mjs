import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: import.meta.env.DEV ? 'http://localhost:3000' : "https://peiit.vercel.app",
  integrations: [tailwind(), mdx(), react(), image()],
  output: "server",
  adapter: vercel()
});