import React, { useEffect, useState } from "react";
import Layout from "../layout";
import Head from "next/head";
import BGWithSearch from "../components/BGWithSearch";
import CompanyCarousal from "../components/CompanyCarousal";
import PosterSection from "../components/PosterSection";
import RecentJobsCarousal from "../components/RecentJobsCarousal";
import HomeTutorCarousal from "../components/HomeTutorCarousal";
import PremiumServicesCarousal from "../components/PremiumServicesCarousal";
import AboutUs from "../components/AboutUs";
import { api } from "./api";

export default function Home() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    api
      .get("/jobs", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setJobs(response.data.jobs.reverse());
        console.log(response.data.jobs);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
      });
  }, []);

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
        <PosterSection jobs={jobs} />
        <RecentJobsCarousal jobs={jobs} />
        <HomeTutorCarousal
          jobs={jobs.filter((job) => job.jobType2 === "Home Tutor jobs")}
        />
        <PremiumServicesCarousal />
        <AboutUs />
      </div>
    </Layout>
  );
}
