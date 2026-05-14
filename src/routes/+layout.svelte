<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/state";
  import { LanguagesLabel, locales, localesLabels } from "$lib";
  import favicon from "$lib/assets/favicon.svg";
  import "./layout.css";

  let { children } = $props();

  function changeLanguage(event: Event & { currentTarget: EventTarget & HTMLSelectElement }) {
    const val = event.currentTarget.value;
    goto(val === "en" ? "/" : `/${val}`);
  }
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <meta name="theme-color" content="#28bf6a" />

  <!-- hreflang tags -->
  {#each locales as locale}
    <link
      rel="alternate"
      hrefLang={locale}
      href={locale === "en" ? "https://zagpost.org/" : `https://zagpost.org/${locale}`}
    />
  {/each}
</svelte:head>

<div class="container mx-auto flex max-w-200 flex-col px-4 py-8">
  <header
    class="fixed top-0 right-0 left-0 mb-8 flex h-(--header-height) w-full items-center justify-between bg-background/30 px-4 py-8 shadow-lg backdrop-blur-lg"
  >
    <div class="mx-auto flex w-full max-w-220 items-center justify-between">
      <h1>Zag Post</h1>
      <select class="rounded border p-1 text-sm" onchange={changeLanguage}>
        {#key page.data.locale}
          <optgroup label={LanguagesLabel[page.data.locale]}>
            {#each locales as locale}
              <option value={locale} selected={page.data.locale === locale}>
                {localesLabels[locale]}
              </option>
            {/each}
          </optgroup>
        {/key}
      </select>
    </div>
  </header>

  <main class="prose prose-lg mt-(--header-height) mb-40 w-full min-w-0">
    {@render children()}
  </main>
</div>
