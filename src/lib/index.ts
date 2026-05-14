// place files you want to import through the `$lib` alias in this folder.
export const locales = ["en", "de", "fr"] as const;

export const localesLabels: Record<Locale, string> = {
  en: "English",
  de: "Deutsch",
  fr: "Français",
};

export const LanguagesLabel: Record<Locale, string> = {
  en: "Languages",
  de: "Sprachen",
  fr: "Langues",
};

export const SiteTitles: Record<Locale, string> = {
  en: "Zag Post - Private Messaging for the people",
  de: "Zag Post - Private Nachrichten für alle",
  fr: "Zag Post - Une messagerie privée pour tout le monde",
};
