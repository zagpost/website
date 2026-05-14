<script lang="ts">
  import type { SeoConfig } from "$lib/components/Head.svelte";
  import Head from "$lib/components/Head.svelte";

  const seo_config: SeoConfig = {
    title: "Mentions légales - Zag Post",
    description: "Mentions légales de Zag Post, le service de messagerie privée pour tous.",
    url: "https://zagpost.org/fr/mentions-legales",
  };
</script>

<Head {seo_config} />

<h1>Mentions légales</h1>

<ul class="list-none ps-0 prose-li:ps-0">
  <li>LukeZ Development par Luca Hentschel</li>
  <li>Schneeberger Str. 31</li>
  <li>08112 Wilkau-Haßlau</li>
  <li>Allemagne</li>
  <li><small>Pas d'acceptation de colis ou de paquets.</small></li>
</ul>

<h2>Contact</h2>
<p>E-Mail: <a href="mailto:contact@zagpost.org" target="_blank">contact@zagpost.org</a></p>
