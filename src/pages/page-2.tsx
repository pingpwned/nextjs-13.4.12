import { Counter } from "@/components/Counter";
import { PageTitle } from "@/components/PageTitle";
import Head from "next/head";

const Page: React.FC = () => {
  return (
    <>
      <Head>
        <title>Page 2</title>
      </Head>

      <PageTitle title="Pages Router 2" />

      <Counter />
    </>
  );
};

export default Page;
