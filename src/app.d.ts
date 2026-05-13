// See https://svelte.dev/docs/kit/types#app.d.ts

import type { locales } from "$lib";

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

  type Locale = typeof locales[number];
}

export {};
