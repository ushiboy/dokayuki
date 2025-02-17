import { createInstance } from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { initReactI18next } from "react-i18next/initReactI18next";
import { KeyPrefix, Namespace } from "i18next";
import { getOptions } from "./getOptions";
import { Language } from "./types";

type Options<NS extends Namespace> = {
  keyPrefix?: KeyPrefix<NS>;
};

async function initI18next(
  lng: Language,
  ns: string | string[] | undefined = undefined,
) {
  const instance = createInstance();
  await instance
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        (language: string, namespace: string) =>
          import(`./locales/${language}/${namespace}.json`),
      ),
    )
    .init(getOptions(lng, ns));
  return instance;
}

export async function useTranslation<NS extends Namespace>(
  lng: Language,
  ns: string | string[] | undefined = undefined,
  options: Options<NS> | undefined = undefined,
) {
  const instance = await initI18next(lng, ns);
  return {
    t: instance.getFixedT(
      lng,
      Array.isArray(ns) ? ns[0] : ns,
      options?.keyPrefix,
    ),
    i18n: instance,
  };
}
