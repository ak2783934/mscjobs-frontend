import Layout from "../layout";
import Head from "next/head";
import CustomCrousel from "../components/CustomCrousel";

export default function Home() {
  return (
    <Layout>
      <div className="w-full">
        <Head>
          <title>MSC JOBS</title>
          <link rel="icon" href="/msc-logo.svg" />
          <meta name="MSC JOBS" content="Landing page of msc jobs " />
          <meta name="Location" content="Bhubaneswar" />
          <meta name="type" content="Consultancy" />
        </Head>

        <CustomCrousel />

        <img
          src="https://picsum.photos/200/300"
          className="w-full h-1/2"
          alt="testingImg"
        />
      </div>
    </Layout>
  );
}
