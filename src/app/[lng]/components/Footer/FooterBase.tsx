import Link from "next/link";
import { Trans } from "react-i18next/TransWithoutContext";
import { languages, Language } from "@/i18n";
import { TFunction } from "i18next";

type Props = {
  t: TFunction;
  lng: Language;
};

export function FooterBase({ t, lng }: Props) {
  return (
    <footer>
      <Trans i18nKey="languageSwitcher" t={t} values={{ lng }}>
        Switch from <strong>lng</strong> to:{" "}
      </Trans>
      {languages
        .filter((l) => lng !== l)
        .map((l, index) => {
          return (
            <span key={l}>
              {index > 0 && " or "}
              <Link href={`/${l}`}>{l}</Link>
            </span>
          );
        })}
    </footer>
  );
}
