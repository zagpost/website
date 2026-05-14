/**
 * Mapping of localized routes
 * Maps between different language versions of the same page
 */
export const routeMap: Record<string, Record<string, string>> = {
  "/imprint": { en: "/imprint", de: "/de/impressum", fr: "/fr/mentions-legales" },
  "/de/impressum": { en: "/imprint", de: "/de/impressum", fr: "/fr/mentions-legales" },
  "/fr/mentions-legales": { en: "/imprint", de: "/de/impressum", fr: "/fr/mentions-legales" },
};

/**
 * Get the localized version of a path for a given locale
 */
export function getLocalizedPath(currentPath: string, targetLocale: string): string | null {
  return routeMap[currentPath]?.[targetLocale] ?? null;
}

/**
 * Extract the route group from a path (group pages that are the same across locales)
 */
export function getRouteGroup(path: string): string | null {
  for (const [, locales] of Object.entries(routeMap)) {
    if (Object.values(locales).includes(path)) {
      return path; // Return the canonical path (English version)
    }
  }
  return null;
}
