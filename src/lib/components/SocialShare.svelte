<script lang="ts">
  // Adapted from @stephansama/svelte-social-share-links to allow for more flexible styling
  import * as networks from "$lib/assets/socialShareNetworks.json" with { type: "json" };
    import { buildUrl } from "$lib/socialShareUtils.js";

  interface Props {
    network: Network;
    url: string;
    label?: string;
    title?: string;
    hashtags?: string;
    image?: string;
    user?: string;
    styled?: boolean;
    class?: string;
  }

  let {
    network,
    url,
    label = "Share",
    title,
    hashtags,
    image,
    user,
    styled = true,
    class: className = "",
  }: Props = $props();

  const selectedNetwork = $derived(networks[network] as NetworkSchema | undefined);
  const href = $derived(selectedNetwork ? buildUrl(network, { url, title, hashtags, image, user }) : "#");
</script>

{#if selectedNetwork}
  <a
    aria-label={`Share with ${selectedNetwork.name}`}
    class="social-share-button transition-transform hover:-translate-y-1 {className}"
    class:social-share-button--styled={styled}
    {href}
    rel="noreferrer noopener"
    style="--color-brand: {selectedNetwork.color}"
    target="_blank"
  >
    <svg
      class="social-share-button__icon"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      width="1em"
      height="1em"
      viewBox={selectedNetwork.icon.viewBox}
    >
      <path fill="currentColor" fill-rule="evenodd" d={selectedNetwork.icon.path} />
    </svg>

    {#if label}
      <span class="social-share-button__label">{label}</span>
    {/if}
  </a>
{/if}

<style>
  @layer components {
    .social-share-button {
      display: flex;
      gap: 0.5em;
      align-items: center;
      text-decoration: none;
      width: min-content;
    }

    .social-share-button__icon {
      font-size: 1.5em;
    }

    .social-share-button--styled {
      font-size: 0.875rem;
      line-height: normal;
      padding: 0.5rem;
      color: white;
      border-radius: 0.25rem;
      transition: background-color 0.25s ease-out;
      background-color: var(--color-brand);

      &:hover {
        background-color: color-mix(in oklab, var(--color-brand) 80%, #000);
        color: white !important;
      }

      &:focus-visible {
        outline: 2px solid var(--color-brand);
        outline-offset: 2px;
      }

      .social-share-button__label {
        padding: 0 0.5rem;
        white-space: nowrap;
      }
    }
  }
</style>
