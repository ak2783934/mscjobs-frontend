import Layout from "../layout";
import Head from "next/head";
import BGWithSearch from "../components/BGWithSearch";
import CompanyCarousal from "../components/CompanyCarousal";
import PosterSection from "../components/PosterSection";

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

        <BGWithSearch />
        <CompanyCarousal />
        <PosterSection />
      </div>
    </Layout>
  );
}
