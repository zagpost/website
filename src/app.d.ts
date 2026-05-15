// See https://svelte.dev/docs/kit/types#app.d.ts

import type { locales } from "$lib";
import type { WebPage, WithContext } from "schema-dts";
import type * as networks from "$lib/assets/socialShareNetworks.json" with { type: "json" };

// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    interface Locals {
      locale: Locale;
    }
    interface PageData {
      locale: Locale;
    }
    // interface PageState {}
    // interface Platform {}
  }

  type Locale = (typeof locales)[number];

  type JsonLdData = WithContext<WebPage>;

  type Network = keyof typeof networks;
  type NetworkSchema = {
    args?: {
      hashtags?: string;
      image?: string;
      title?: string;
      user?: string;
    };
    color: string;
    icon: {
      path: string;
      viewBox: string;
    };
    name: string;
    shareUrl: string;
  };
  type UrlProps = {
    hashtags?: string;
    image?: string;
    title?: string;
    url: string;
    user?: string;
  };
}

export {};
