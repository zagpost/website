import type { Network } from "@stephansama/svelte-social-share-links";

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

export const ShareAliases: Record<Locale, string> = {
  en: "Share",
  de: "Teilen",
  fr: "Partager",
};

export const ShareTexts: Record<Locale, Partial<Record<Network, string>> & { _default: string }> = {
  en: {
    _default: "Check out Zag Post, a future private messaging platform for the people!",
    bluesky: "Just found Zag Post, a future private messaging platform for the people!",
    x: "Looking forward to Zag Post 🔒 A private messaging platform coming in the future",
    threads: "Looking forward to Zag Post 🔒 A private messaging platform coming in the future",
    telegram: "Check this out: Zag Post - private messaging for everyone",
    whatsapp: "You gotta see this: Zag Post - secure private messaging",
    email: "I just found Zag Post - a privacy-focused messaging platform",
    reddit: "Looking forward to the privacy-first messaging alternative 'Zag Post'",
    facebook: "Looking forward to this privacy-focused messaging app: Zag Post",
  },
  de: {
    _default: "Schaut euch Zag Post an, eine zukünftige private Messaging-Lösung für alle!",
    bluesky: "Ich habe gerade Zag Post entdeckt, eine zukünftige Plattform für private Nachrichten für alle!",
    x: "Freue mich auf Zag Post 🔒 Eine private Messaging-Lösung, die in Zukunft verfügbar sein wird",
    threads: "Freue mich auf Zag Post 🔒 Eine private Messaging-Lösung, die in Zukunft verfügbar sein wird",
    telegram: "Schau dir das mal an: Zag Post - private Nachrichten für alle",
    whatsapp: "Schau mal: Zag Post - sicherer Nachrichtenaustausch für alle",
    email: "Ich habe gerade Zag Post entdeckt - eine datenschutzfreundliche Messaging-Plattform",
    reddit: "Freue mich auf die datenschutzorientierte Messaging-Alternative 'Zag Post'",
    facebook: "Freue mich auf diese datenschutzorientierte Messaging-App: Zag Post",
  },
  fr: {
    _default: "Découvrez Zag Post, une future messagerie privée pour tout le monde !",
    bluesky: "Je viens de découvrir Zag Post, une future plateforme de messagerie privée pour tous !",
    x: "J'ai hâte de découvrir Zag Post 🔒 Une messagerie privée qui existera bientôt",
    threads: "J'ai hâte de découvrir Zag Post 🔒 Une messagerie privée qui existera bientôt",
    telegram: "Jetez un œil à ça : Zag Post - la messagerie privée pour tous",
    whatsapp: "Il faut absolument que tu voies ça : Zag Post - messagerie privée sécurisée",
    email: "Je viens de découvrir Zag Post, une plateforme de messagerie axée sur la confidentialité",
    reddit:
      "On attend avec impatience « Zag Post », cette alternative de messagerie qui met la confidentialité au premier plan",
    facebook: "J'ai hâte de découvrir cette application de messagerie axée sur la confidentialité : Zag Post",
  },
} as const;

export function getShareText(network: Network, locale: Locale): string {
  return ShareTexts[locale]?.[network] ?? ShareTexts[locale]?._default ?? ShareTexts.en._default;
}

export function delocalizePath(pathname: string): string {
  return pathname.replace(new RegExp(`^/(${locales.join("|")})/?`), "/") || "/";
}
