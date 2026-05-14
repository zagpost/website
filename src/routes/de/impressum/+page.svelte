<script lang="ts">
  import type { SeoConfig } from "$lib/components/Head.svelte";
  import Head from "$lib/components/Head.svelte";

  const seo_config: SeoConfig = {
    title: "Impressum - Zag Post",
    description: "Impressum von Zag Post, dem privaten Messengerdienst für alle.",
    url: "https://zagpost.org/impressum",
  };
</script>

<Head {seo_config} />

<h1>Impressum</h1>

<ul class="list-none ps-0 prose-li:ps-0">
  <li>LukeZ Development by Luca Hentschel</li>
  <li>Schneeberger Str. 31</li>
  <li>08112 Wilkau-Haßlau</li>
  <li>Deutschland</li>
  <li><small>Keine Annahme von Paketen.</small></li>
</ul>

<h2>Kontakt</h2>
<p>E-Mail: <a href="mailto:contact@zagpost.org" target="_blank">contact@zagpost.org</a></p>
