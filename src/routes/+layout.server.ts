export async function load({ locals, url }) {
  // Access url to ensure SvelteKit tracks the URL dependency and re-runs the load function on navigation
  url.pathname;
  return {
    locale: locals.locale,
  };
}
