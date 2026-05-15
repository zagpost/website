// Adapted from @stephansama/svelte-social-share-links
import * as networks from "$lib/assets/socialShareNetworks.json" with { type: "json" };

var urlRegexes = {
  hash: /\[h\]/i,
  image: /\[i\]/i,
  title: /\[t\]/i,
  url: /\[u\]/i,
  user: /\[uid\]/i,
};

export function buildUrl(network: Network, props: UrlProps) {
  return buildUrlFromSchema(networks[network], props);
}
