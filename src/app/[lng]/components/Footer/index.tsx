import { Language } from "@/app/i18n/settings";
import { useTranslation } from "@/app/i18n";
import { FooterBase } from "./FooterBase";

type Props = {
  lng: Language;
};

export async function Footer({ lng }: Props) {
  const { t } = await useTranslation(lng, "footer");

  return <FooterBase t={t} lng={lng} />;
}
