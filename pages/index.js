import Layout from "../layout";
import Head from "next/head";

export default function Home() {
  return (
    <Layout>
      <div className="w-full">
        <Head>
          <title>MSC JOBS</title>
          <link rel="icon" href="/msc-logo.svg" />
          <meta name="twitter:title" content="TITLE OF POST OR PAGE" />
          <meta
            name="twitter:description"
            content="DESCRIPTION OF PAGE CONTENT"
          />
          <meta name="twitter:image" content="LINK TO IMAGE" />
          <meta name="twitter:site" content="@USERNAME" />
          <meta name="twitter:creator" content="@USERNAME" />
        </Head>
        <img
          src="https://picsum.photos/200/300"
          className="w-full"
          alt="testingImg"
        />
      </div>
    </Layout>
  );
}
