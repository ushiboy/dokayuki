"use client";

import { Language } from "@/app/i18n";
import { useTranslation } from "@/app/i18n/client";
import { FooterBase } from "./FooterBase";

type Props = {
  lng: Language;
};

export function Footer({ lng }: Props) {
  const { t } = useTranslation(lng, "footer");

  return <FooterBase t={t} lng={lng} />;
}
