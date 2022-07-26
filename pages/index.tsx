import type { NextPage } from "next";
import Head from "next/head";

import Home from "../components/home";

const Root: NextPage = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Hello</title>
        <meta
          name="description"
          content="The only secure messenger all over the internet."
        />
      </Head>
      <Home />
    </>
  );
};

export default Root;
