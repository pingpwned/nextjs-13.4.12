import { Counter } from "@/components/Counter";
import { PageTitle } from "@/components/PageTitle";
import Head from "next/head";

const Page: React.FC = () => {
  return (
    <>
      <Head>
        <title>Pages page</title>
      </Head>

      <PageTitle title="Pages Router 1" />

      <Counter />
    </>
  );
};

export default Page;
