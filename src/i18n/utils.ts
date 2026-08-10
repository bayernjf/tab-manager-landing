// i18n utilities for Tab Garden landing page.
// Lang type, URL-based language detection, translation lookup, and path localisation.

import { dictionaries, type Lang } from "./ui";

export type { Lang };

export function getLangFromUrl(url: URL): Lang {
  const [, segment] = url.pathname.split("/");
  return segment === "zh" ? "zh" : "en";
}

export function useTranslations(lang: Lang) {
  const dict = dictionaries[lang];
  return function t(key: string): string {
    const value = dict[key];
    if (value === undefined) {
      // Fall back to en, then to the key itself so missing keys are visible.
      const fallback = dictionaries.en[key];
      return fallback ?? key;
    }
    return value;
  };
}

/**
 * Localise a path for the given language.
 * - en (default locale, no prefix): return the path as-is.
 * - zh: prepend "/zh" to the path.
 * Root path "/" is handled specially: en -> "/", zh -> "/zh".
 * Anchor links (e.g. "#features") are returned unchanged.
 */
export function getLocalizedPath(path: string, lang: Lang): string {
  if (path.startsWith("#")) return path;
  if (lang === "en") return path;

  // zh: prepend /zh
  if (path === "/") return "/zh";
  if (path.startsWith("/")) return `/zh${path}`;
  return `/zh/${path}`;
}

/**
 * Get the opposite language's localized path for the current URL.
 * Used by the language switcher in the navbar.
 */
export function getAltLangPath(pathname: string, currentLang: Lang): { lang: Lang; path: string } {
  const altLang: Lang = currentLang === "en" ? "zh" : "en";

  if (currentLang === "en") {
    // Currently on en (/path), switch to zh (/zh/path)
    if (pathname === "/") return { lang: altLang, path: "/zh" };
    return { lang: altLang, path: `/zh${pathname}` };
  }

  // Currently on zh (/zh/path), switch to en (/path)
  const stripped = pathname.replace(/^\/zh(?:\/|$)/, "/");
  if (stripped === "") return { lang: altLang, path: "/" };
  return { lang: altLang, path: stripped };
}