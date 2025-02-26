import { Language } from "@/i18n";
import { useTranslation } from "@/i18n/server";
import { FooterBase } from "./FooterBase";

type Props = {
  lng: Language;
};

export async function Footer({ lng }: Props) {
  const { t } = await useTranslation(lng, "footer");

  return <FooterBase t={t} lng={lng} />;
}
