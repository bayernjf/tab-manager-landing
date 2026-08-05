// i18n utilities for Tab Garden landing page.
// Lang type, URL-based language detection, translation lookup, and path localisation.

import { dictionaries, type Lang } from "./ui";

export type { Lang };

export function getLangFromUrl(url: URL): Lang {
  const [, segment] = url.pathname.split("/");
  return segment === "en" ? "en" : "zh";
}

export function useTranslations(lang: Lang) {
  const dict = dictionaries[lang];
  return function t(key: string): string {
    const value = dict[key];
    if (value === undefined) {
      // Fall back to zh, then to the key itself so missing keys are visible.
      const fallback = dictionaries.zh[key];
      return fallback ?? key;
    }
    return value;
  };
}

/**
 * Localise a path for the given language.
 * - zh (default locale, no prefix): return the path as-is.
 * - en: prepend "/en" to the path.
 * Root path "/" is handled specially: zh -> "/", en -> "/en".
 * Anchor links (e.g. "#features") are returned unchanged.
 */
export function getLocalizedPath(path: string, lang: Lang): string {
  if (path.startsWith("#")) return path;
  if (lang === "zh") return path;

  // en: prepend /en
  if (path === "/") return "/en";
  if (path.startsWith("/")) return `/en${path}`;
  return `/en/${path}`;
}

/**
 * Get the opposite language's localized path for the current URL.
 * Used by the language switcher in the navbar.
 */
export function getAltLangPath(pathname: string, currentLang: Lang): { lang: Lang; path: string } {
  const altLang: Lang = currentLang === "zh" ? "en" : "zh";

  if (currentLang === "zh") {
    // Currently on zh (/path), switch to en (/en/path)
    if (pathname === "/") return { lang: altLang, path: "/en" };
    return { lang: altLang, path: `/en${pathname}` };
  }

  // Currently on en (/en/path), switch to zh (/path)
  const stripped = pathname.replace(/^\/en(?:\/|$)/, "/");
  if (stripped === "") return { lang: altLang, path: "/" };
  return { lang: altLang, path: stripped };
}
