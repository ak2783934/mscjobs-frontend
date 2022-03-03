import Layout from "../layout";
import Head from "next/head";
import BGWithSearch from "../components/BGWithSearch";
import CompanyCarousal from "../components/CompanyCarousal";
import PosterSection from "../components/PosterSection";
import RecentJobsCarousal from "../components/RecentJobsCarousal";
import HomeTutorCarousal from "../components/HomeTutorCarousal";
import PremiumServicesCarousal from "../components/PremiumServicesCarousal";

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
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
            rel="stylesheet"
          />
        </Head>
        <BGWithSearch />
        <CompanyCarousal />
        <PosterSection />
        <RecentJobsCarousal />
        <HomeTutorCarousal />
        <PremiumServicesCarousal />
      </div>
    </Layout>
  );
}
