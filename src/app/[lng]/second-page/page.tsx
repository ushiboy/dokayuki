import Link from "next/link";
import { useTranslation } from "@/app/i18n/server";
import { Language } from "@/app/i18n";
import { Footer } from "../components/Footer";

type Props = {
  params: Promise<{
    lng: Language;
  }>;
};

export default async function Page({ params }: Props) {
  const { lng } = await params;
  const { t } = await useTranslation(lng, "second-page");
  return (
    <div>
      <main>
        <p>{t("title")}</p>
        <Link href={`/${lng}`}>{t("back-to-home")}</Link>
      </main>
      <Footer lng={lng} />
    </div>
  );
}
