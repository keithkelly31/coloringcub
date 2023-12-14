import tailwind from "@astrojs/tailwind";
import { defineConfig } from 'astro/config';

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  image: {
    domains: ["https://ikejwkbpvysvtpsxjgmy.supabase.co"],
    remotePatterns: [{ protocol: "https" }]
  },
  integrations: [tailwind()],
  output: "server",
  adapter: vercel()
});