import en from "./lang/en";
import es from "./lang/es";
import ja from "./lang/ja";
import fr from "./lang/fr";
import de from "./lang/de";
import pt from "./lang/pt";
import ko from "./lang/ko";
import it from "./lang/it";
import zhCn from "./lang/zh-cn";
import zhTw from "./lang/zh-tw";
import ar from "./lang/ar";
import nl from "./lang/nl";
import tr from "./lang/tr";
import pl from "./lang/pl";
import ru from "./lang/ru";
import id from "./lang/id";
import vi from "./lang/vi";
import th from "./lang/th";
import hi from "./lang/hi";
import sv from "./lang/sv";
import da from "./lang/da";
import no from "./lang/no";
import cs from "./lang/cs";
import uk from "./lang/uk";
import ro from "./lang/ro";

export const languages: Record<string, { name: string; flag: string; countryCode: string }> = {
  en: { name: "English", flag: "🇺🇸", countryCode: "us" },
  es: { name: "Español", flag: "🇪🇸", countryCode: "es" },
  ja: { name: "日本語", flag: "🇯🇵", countryCode: "jp" },
  fr: { name: "Français", flag: "🇫🇷", countryCode: "fr" },
  de: { name: "Deutsch", flag: "🇩🇪", countryCode: "de" },
  pt: { name: "Português", flag: "🇵🇹", countryCode: "pt" },
  ko: { name: "한국어", flag: "🇰🇷", countryCode: "kr" },
  it: { name: "Italiano", flag: "🇮🇹", countryCode: "it" },
  "zh-cn": { name: "中文（简体）", flag: "🇨🇳", countryCode: "cn" },
  "zh-tw": { name: "中文（繁體）", flag: "🇹🇼", countryCode: "tw" },
  ar: { name: "العربية", flag: "🇸🇦", countryCode: "sa" },
  nl: { name: "Nederlands", flag: "🇳🇱", countryCode: "nl" },
  tr: { name: "Türkçe", flag: "🇹🇷", countryCode: "tr" },
  pl: { name: "Polski", flag: "🇵🇱", countryCode: "pl" },
  ru: { name: "Русский", flag: "🇷🇺", countryCode: "ru" },
  id: { name: "Bahasa Indonesia", flag: "🇮🇩", countryCode: "id" },
  vi: { name: "Tiếng Việt", flag: "🇻🇳", countryCode: "vn" },
  th: { name: "ไทย", flag: "🇹🇭", countryCode: "th" },
  hi: { name: "हिन्दी", flag: "🇮🇳", countryCode: "in" },
  sv: { name: "Svenska", flag: "🇸🇪", countryCode: "se" },
  da: { name: "Dansk", flag: "🇩🇰", countryCode: "dk" },
  no: { name: "Norsk", flag: "🇳🇴", countryCode: "no" },
  cs: { name: "Čeština", flag: "🇨🇿", countryCode: "cz" },
  uk: { name: "Українська", flag: "🇺🇦", countryCode: "ua" },
  ro: { name: "Română", flag: "🇷🇴", countryCode: "ro" },
};

export const defaultLang = "en";

export const ui = {
  en,
  es,
  ja,
  fr,
  de,
  pt,
  ko,
  it,
  "zh-cn": zhCn,
  "zh-tw": zhTw,
  ar,
  nl,
  tr,
  pl,
  ru,
  id,
  vi,
  th,
  hi,
  sv,
  da,
  no,
  cs,
  uk,
  ro,
} as const;

export type UI = typeof ui;
export type Lang = keyof UI;
