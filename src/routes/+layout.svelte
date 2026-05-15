<script lang="ts">
  import "./layout.css";
  import { goto } from "$app/navigation";
  import { delocalizePath, getShareText, LanguagesLabel, locales, localesLabels, ShareAliases } from "$lib";
  import favicon from "$lib/assets/favicon.svg";
  import { getLocalizedPath } from "$lib/routeMap";
  import SocialShare from "$lib/components/SocialShare.svelte";
  import { page } from "$app/state";

  let { data, children } = $props();

  function changeLanguage(event: Event & { currentTarget: EventTarget & HTMLSelectElement }) {
    const val = event.currentTarget.value;
    const currentPath = window.location.pathname;

    // Try to use the route map for localized pages
    const localizedPath = getLocalizedPath(currentPath, val);
    if (localizedPath) {
      goto(localizedPath);
      return;
    }

    // Fallback: handle dynamic pages by extracting the base path
    let pathname = currentPath.replace(new RegExp(`^/(${locales.join("|")})`), "");
    if (!pathname.startsWith("/")) pathname = "/" + pathname;

    goto(val === "en" ? pathname : `/${val}${pathname === "/" ? "" : pathname}`);
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
    class="fixed top-0 right-0 left-0 mb-8 flex h-(--header-height) w-full items-center justify-between bg-background/30 px-4 shadow-lg backdrop-blur-lg"
  >
    <div class="mx-auto flex w-full max-w-220 items-center justify-between">
      <a
        href="/{data.locale === 'en' ? '' : data.locale}"
        class="text-2xl font-bold transition-opacity hover:opacity-70"
      >
        Zag Post
      </a>
      <select class="rounded border p-1 text-sm" onchange={changeLanguage} aria-label="Change language">
        {#key data.locale}
          <optgroup label={LanguagesLabel[data.locale]}>
            {#each locales as locale}
              <option value={locale} selected={data.locale === locale}>
                {localesLabels[locale]}
              </option>
            {/each}
          </optgroup>
        {/key}
      </select>
    </div>
  </header>

  <main class="prose prose-lg mt-(--header-height) mb-10 w-full min-w-0 dark:prose-invert">
    {@render children()}

    <hr />

    {#if delocalizePath(page.url.pathname) === "/"}
      <div class="flex flex-wrap justify-center gap-3">
        <SocialShare network="bluesky" url="https://zagpost.org" label={ShareAliases[data.locale]} />
        <SocialShare
          network="x"
          url="https://zagpost.org"
          label={ShareAliases[data.locale]}
          title={getShareText("x", data.locale)}
          hashtags="zagpost,messenger"
        />
        <SocialShare
          network="mastodon"
          url="https://zagpost.org"
          label={ShareAliases[data.locale]}
          title={getShareText("mastodon", data.locale)}
        />
        <SocialShare
          network="reddit"
          url="https://zagpost.org"
          label={ShareAliases[data.locale]}
          title={getShareText("reddit", data.locale)}
        />
        <SocialShare network="facebook" url="https://zagpost.org" label={ShareAliases[data.locale]} />
        <SocialShare
          network="threads"
          url="https://zagpost.org"
          label={ShareAliases[data.locale]}
          title={getShareText("threads", data.locale)}
          styled
        />
        <SocialShare network="email" url="https://zagpost.org" label={ShareAliases[data.locale]} />

        <!-- its a bit ironic, but we also allow sharing via whatsapp and telegram -->
        <SocialShare
          network="whatsapp"
          url="https://zagpost.org"
          label={ShareAliases[data.locale]}
          title={getShareText("whatsapp", data.locale)}
        />
        <SocialShare
          network="telegram"
          url="https://zagpost.org"
          label={ShareAliases[data.locale]}
          title={getShareText("telegram", data.locale)}
        />
      </div>
    {/if}
  </main>
</div>
