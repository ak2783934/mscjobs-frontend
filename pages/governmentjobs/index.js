import React, { useState, useEffect } from "react";
import Layout from "../../layout";
import Head from "next/head";
import Link from "next/link";
import SideBlock from "../../components/SideBlock";
import BreadCrum from "../../components/BreadCrum";
import { api } from "../api";

const GovtJobsPreview = ({ job }) => {
  return (
    <div className="px-4 py-1 mx-2 mt-3 bg-gray-300 rounded-xl">
      <div className="text-lg">{job.companyName}</div>
      <hr className="border-black border-1" />
      <div className="px-2 text-xs md:px-8">{job.jobDescription}</div>
      <div className="px-2 text-xs md:px-8">
        Last Date of Application : {job.lastDateOfApplication}
      </div>
      <div className="px-2 text-xs md:px-8">
        No of vacancies : {job.noOfOpenings}
      </div>
      <Link
        href={{
          pathname: "/jobPreviewPage",
          query: { jobid: job._id, jobType: job.jobType1 },
        }}
      >
        <div className="text-right cursor-pointer text-tiny">Explore more</div>
      </Link>
    </div>
  );
};

const Index = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    api
      .get("/jobs", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setJobs(
          response.data.jobs.filter((job) => job.jobType1 === "Government job")
        );
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

  const [jobType, setjobType] = useState("state government");
  return (
    <Layout>
      <Head>
        <title>MSC JOBS</title>
        <link rel="icon" href="/msc-logo.svg" />
        <meta name="MSC JOBS" content="Landing page of msc jobs" />
        <meta name="Location" content="Bhubaneswar" />
        <meta name="type" content="Consultancy" />
        <meta name="jobs" content="government" />
      </Head>
      <div className="bg-[#008DF4] w-full">
        <BreadCrum pageName="Government Jobs" />
        <div className="flex flex-row py-4">
          <SideBlock pageName="governmentjobs" />
          <div className="grow">
            <div className="bg-white px-2 py-2 mx-12 md:mx-auto mb-2 md:mb-8 md:w-[800px] rounded">
              <div className="text-sm font-medium md:text-xl">
                Government Jobs
              </div>
              <div className="flex flex-row py-1 text-xs md:text-sm">
                Share this{" "}
                <span>
                  <img
                    className="w-4 h-4 mx-1"
                    src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-facebook-social-media-justicon-flat-justicon.png"
                  />
                </span>
                <span>
                  <img
                    className="w-4 h-4 mx-1"
                    src="https://img.icons8.com/color/48/000000/twitter--v1.png"
                  />
                </span>{" "}
                <span>
                  <img
                    className="w-4 h-4 mx-1"
                    src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-linkedin-social-media-justicon-flat-justicon.png"
                  />
                </span>
              </div>
              <hr />
              <div className="grid grid-cols-2 text-xs text-center md:text-sm">
                <button
                  onClick={() => setjobType("state government")}
                  className={
                    jobType === "state government"
                      ? "py-1 font-medium border-t border-r border-gray-600 shadow hover:cursor-pointer"
                      : "py-1 font-medium border-t border-gray-600 hover:cursor-pointer"
                  }
                >
                  State Government Jobs
                </button>
                <button
                  onClick={() => setjobType("central government")}
                  className={
                    jobType === "central government"
                      ? "py-1 font-medium border-t border-r border-gray-600 shadow hover:cursor-pointer"
                      : "py-1 font-medium border-t border-gray-600 hover:cursor-pointer"
                  }
                >
                  Central Government Jobs
                </button>
              </div>
              <div className="h-[400px] overflow-y-auto ">
                {jobs
                  .filter((job) => job.jobType2 === jobType)
                  .map((job, index) => {
                    return <GovtJobsPreview key={index} job={job} />;
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
