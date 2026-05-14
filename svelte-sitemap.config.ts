// svelte-sitemap.config.ts
import type { OptionsSvelteSitemap } from "svelte-sitemap";

const config: OptionsSvelteSitemap = {
  domain: "https://zagpost.org",
  trailingSlashes: true,
  changeFreq: "weekly",
};

export default config;
