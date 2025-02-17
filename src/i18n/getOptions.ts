import { defaultNS, fallbackLng, languages } from "./constants";
import { Language } from "./types";

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
