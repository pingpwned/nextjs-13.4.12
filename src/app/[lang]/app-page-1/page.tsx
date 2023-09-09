import { Counter } from "@/components/Counter";
import { PageTitle } from "@/components/PageTitle";
import useTranslation from "next-translate/useTranslation";

export async function generateMetadata() {
  const { t } = useTranslation("app-router");
  return {
    title: `${t("app-page-1")} - Next.js 13`,
  };
}

export default function Page() {
  const { t } = useTranslation("app-router");
  return (
    <>
      <PageTitle title={t("app-page-1")} />

      <Counter />
    </>
  );
}
