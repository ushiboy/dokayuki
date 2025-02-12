export type Language = "en" | "ja";

export const fallbackLng: Language = "en";

export const languages: Language[] = ["en", "ja"] as const;

export const cookieName = "i18next";

export const defaultNS = "translation";

export function getOptions(
  lng: Language = fallbackLng,
  ns: string | string[] = defaultNS,
) {
  return {
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
