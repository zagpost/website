import { locales } from "$lib";
import { redirect, type Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
  const urlLang = new RegExp(`^/(${locales.join("|")})(?=/|$)`).exec(event.url.pathname)?.[1];
  const lang = (urlLang || "en") as Locale;

  event.locals.locale = lang;

  const response = await resolve(event, {
    transformPageChunk: ({ html }) => html.replace("%lang%", lang),
    preload: ({ type }) => {
      // preload default assets (js, css) + fonts
      return type === "js" || type === "css" || type === "font";
    },
  });

  if (response.status === 404) {
    console.debug("Redirecting to homepage for 404");
    redirect(302, "/");
  }

  return response;
};
