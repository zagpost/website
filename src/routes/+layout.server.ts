export async function load({ locals, url, setHeaders }) {
  // Access url to ensure SvelteKit tracks the URL dependency and re-runs the load function on navigation
  url.pathname;

  setHeaders({
    "cache-control": "public, max-age=86400", // Cache for 1 day
    "content-type": "text/html; charset=utf-8",
  });

  return {
    locale: locals.locale,
  };
}
