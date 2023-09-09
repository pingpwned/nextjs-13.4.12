import useTranslation from "next-translate/useTranslation";
import { usePathname, useRouter } from "next/navigation";
import i18n from "../../i18n";

export default function useSetLanguage() {
  const router = useRouter();
  const pathname = usePathname();
  const { lang } = useTranslation();

  return (locale: string) => {
    console.log(locale, lang, "locale", pathname);

    // const segments = pathname?.split("/");
    // if (segments && i18n.locales.includes(segments[1])) {
    //   segments[1] = locale;
    // } else {

    // }
    // const url = segments?.join("/") || "";
  };
}
