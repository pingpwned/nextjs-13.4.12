import { Counter } from "@/components/Counter";
import { PageTitle } from "@/components/PageTitle";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";

const Page: React.FC = () => {
  const { t } = useTranslation("pages-router");

  return (
    <>
      <Head>
        <title>{`${t("page-2")} - Next.js 13`}</title>
      </Head>

      <PageTitle title={`${t("page-2")}`} />

      <Counter />
    </>
  );
};

export default Page;
