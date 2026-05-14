<script lang="ts">
  import type { SeoConfig } from "$lib/components/Head.svelte";
  import Head from "$lib/components/Head.svelte";

  const seo_config: SeoConfig = {
    title: "Imprint - Zag Post",
    description: "Imprint of Zag Post, the private messaging service for the people.",
    url: "https://zagpost.org/imprint",
  };
</script>

<Head {seo_config} />

<h1>Imprint</h1>

<ul class="list-none ps-0 prose-li:ps-0">
  <li>LukeZ Development by Luca Hentschel</li>
  <li>Schneeberger Str. 31</li>
  <li>08112 Wilkau-Haßlau</li>
  <li>Germany</li>
  <li><small>No acceptance of parcels or packages.</small></li>
</ul>

<h2>Contact</h2>
<p>E-Mail: <a href="mailto:contact@zagpost.org" target="_blank">contact@zagpost.org</a></p>
