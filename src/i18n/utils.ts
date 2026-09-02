import { ui, defaultLang, type Lang } from "./ui";

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  const localizedUI: Record<string, string> = ui[lang] as Record<string, string>;
  const fallback: Record<string, string> = ui[defaultLang] as Record<string, string>;
  return function t(key: string): string {
    return key in localizedUI ? localizedUI[key] : fallback[key] ?? key;
  };
}

export function getAltLangs(currentLang: Lang): Array<{ lang: string; href: string }> {
  return Object.keys(ui)
    .filter((l) => l !== currentLang)
    .map((l) => ({
      lang: l,
      href: `/${l}/`,
    }));
}
