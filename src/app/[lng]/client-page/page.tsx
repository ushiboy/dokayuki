"use client";

import { use, useState } from "react";
import Link from "next/link";
import { useTranslation } from "@/i18n/client";
import { Language } from "@/i18n";
import { Footer } from "../components/Footer/client";

type Props = {
  params: Promise<{
    lng: Language;
  }>;
};

export default function Page({ params }: Props) {
  const { lng } = use(params);
  const { t } = useTranslation(lng, "client-page");
  const [counter, setCounter] = useState(0);

  return (
    <>
      <main>
        <h1>{t("title")}</h1>
        <p>{t("counter", { count: counter })}</p>
        <div>
          <button
            className="mb-2 me-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => setCounter(Math.max(0, counter - 1))}
          >
            -
          </button>
          <button
            className="mb-2 me-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => setCounter(Math.min(10, counter + 1))}
          >
            +
          </button>
        </div>
        <Link href={`/${lng}`}>
          <button type="button">{t("back-to-home")}</button>
        </Link>
      </main>
      <Footer lng={lng} />
    </>
  );
}
