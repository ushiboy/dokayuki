import { dir } from "i18next";
import { Language, languages } from "@/app/i18n";
import "../globals.css";

type Props = {
  children: React.ReactNode;
  params: Promise<{
    lng: Language;
  }>;
};

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default async function RootLayout({ children, params }: Props) {
  const { lng } = await params;
  return (
    <html lang={lng} dir={dir(lng)}>
      <body>{children}</body>
    </html>
  );
}
