import Link from "next/link";
import { useTranslation } from "@/i18n/server";
import { Language } from "@/i18n";
import { Footer } from "./components/Footer";

type Props = {
  params: Promise<{
    lng: Language;
  }>;
};

export default async function Page({ params }: Props) {
  const { lng } = await params;
  const { t } = await useTranslation(lng);
  return (
    <div>
      <main>
        <p>{t("title")}</p>
        <ul>
          <li>
            <Link href={`/${lng}/second-page`}>{t("to-second-page")}</Link>
          </li>
          <li>
            <Link href={`/${lng}/client-page`}>{t("to-client-page")}</Link>
          </li>
        </ul>
      </main>
      <Footer lng={lng} />
    </div>
  );
}
