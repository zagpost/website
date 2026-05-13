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
