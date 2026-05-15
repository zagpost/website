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

export function buildUrlFromSchema({ args, shareUrl }: NetworkSchema, props: UrlProps): string {
  var args = args,
    shareUrl = shareUrl;
  var argumentTitle =
    (args === null || args === void 0 ? void 0 : args.title) && props.title
      ? args === null || args === void 0
        ? void 0
        : args.title
      : "";
  var argumentUser =
    (args === null || args === void 0 ? void 0 : args.user) && props.user
      ? args === null || args === void 0
        ? void 0
        : args.user
      : "";
  var argumentHashtags =
    (args === null || args === void 0 ? void 0 : args.hashtags) && props.hashtags
      ? args === null || args === void 0
        ? void 0
        : args.hashtags
      : "";
  var argumentImage =
    (args === null || args === void 0 ? void 0 : args.image) && props.image
      ? args === null || args === void 0
        ? void 0
        : args.image
      : "";
  // Replace placeholders with actual values (encode all parameters for URL safety)
  var template = shareUrl + argumentTitle + argumentUser + argumentHashtags + argumentImage;
  var fullUrl = template
    .replace(urlRegexes.url, encodeURIComponent(props.url))
    .replace(urlRegexes.title, encodeURIComponent(props.title || ""))
    .replace(urlRegexes.user, encodeURIComponent(props.user || ""))
    .replace(urlRegexes.hash, encodeURIComponent(props.hashtags || ""))
    .replace(urlRegexes.image, encodeURIComponent(props.image || ""));
  return new URL(fullUrl).href;
}
