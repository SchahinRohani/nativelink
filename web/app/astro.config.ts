import { defineConfig, passthroughImageService } from "astro/config";

import deno from "@astrojs/deno";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import starlight from "@astrojs/starlight";
import qwik from "@qwikdev/astro";
import tailwindcss from "@tailwindcss/vite";
import rehypeMermaid from "rehype-mermaid";

import { starlightConfig } from "./starlight.conf.ts";

// https://astro.build/config
export default defineConfig({
  site: "https://nativelink.com",
  output: "server",
  image: {
    service: passthroughImageService(),
  },
  adapter: deno({
    port: 8881,
    hostname: "localhost",
  }),
  integrations: [
    qwik({
      include: ["**/components/qwik/**/*"],
    }),
    react({
      include: ["**/components/react/**/*"],
    }),
    starlight(starlightConfig),
    // tailwind() // Tailwind 3.x
    mdx(),
    sitemap(),
  ],
  markdown: {
    rehypePlugins: [[rehypeMermaid, { strategy: "inline-svg" }]],
  },
  vite: {
    plugins: [tailwindcss()], // Tailwindcss 4.0.
  },
});
