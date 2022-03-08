import React, { useState } from "react";
import Layout from "../../layout";
import Head from "next/head";
import Link from "next/link";
import BreadCrum from "../../components/BreadCrum";

const Index = () => {
  // const job = {
  //   companyName: "RBI India",
  //   profile: "Clerk",
  //   desc:
  //     "Byju's BDA APPLICATION - Sales (Read this before filling the form as you might be questioned upon this)This is a Hybrid sales job for people who got the knack to get out of their comfort zone and want a 4x faster growth in terms of their career in terms of salary and promotion IF you can     Convince people in any given scenario, not to sell a product but to create a need for the customer wherein they are interested to know what you have to offer",
  //   lastDateOfApplication: "18th feb 2022",
  //   vacancies: "123",
  //   location: "Lucknow, UP",
  //   experienceReq: "3-10 years",
  //   type: "government/non government",
  //   subType: "central governement/state government/teaching/others",
  // };

  const job = {
    companyName: "RBI India",
    profile: "Clerk",
    desc:
      "Byju's BDA APPLICATION - Sales (Read this before filling the form as you might be questioned upon this)This is a Hybrid sales job for people who got the knack to get out of their comfort zone and want a 4x faster growth in terms of their career in terms of salary and promotion IF you can     Convince people in any given scenario, not to sell a product but to create a need for the customer wherein they are interested to know what you have to offer",
    lastDateOfApplication: "18th feb 2022",
    vacancies: "123",
    location: "Lucknow, UP",
    experienceReq: "3-10 years",
    imgUrl: "https://picsum.photos/200/300",
    applyLink: "www.google.com",
    type: "government/private",
    subType: "state/central/teaching/other/internship/part-time",
    additionalNote:
      "This job is only for people who has completed their masters from tier 1 colleges of India. Others applying for this job will be reject. Thanks!",
    timeOfJobPost: "3 hours ago",
  };

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
        <BreadCrum pageName="Government Jobs" auxPage={job.companyName} />
        <div className="flex flex-row py-4">
          <div className="grow">
            <div className="bg-white px-2 py-2 mx-12 md:mx-auto mb-2 md:mb-8 md:w-[900px] rounded">
              <div className="text-sm font-medium md:text-xl">
                {job.companyName}
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
              <hr className="border-t-2 border-gray-500" />
              <div className="flex flex-row mx-1 my-1">
                <span>
                  <img
                    src="/clock-logo.svg"
                    alt="clock-logo"
                    className="h-[13px] w-[13px] md:h-[20px] md:w-[20px]"
                  />
                </span>
                <span className="mx-1 text-tiny md:text-sm">21 Hours Ago</span>
                <span className="mx-1">
                  <img
                    src="/bag-logo.svg"
                    alt="bag-logo"
                    className="h-[13px] w-[13px] md:h-[20px] md:w-[20px]"
                  />
                </span>
                <span className="mx-1 text-tiny md:text-sm">Full-Time</span>
              </div>
              <div className="h-auto mx-1 mt-5 mb-4 text-sm md:text-base">
                <div className="my-2">
                  <span className="font-semibold ">Job Profile: </span>
                  <span className="font-normal ">{job.profile}</span>
                </div>
                <div className="my-2">
                  <span className="font-semibold ">Location: </span>
                  <span className="font-normal ">{job.location}</span>
                </div>
                <div className="my-2">
                  <span className="font-semibold ">Experience Req: </span>
                  <span className="font-normal ">{job.experienceReq}</span>
                </div>
                <div className="my-2">
                  <span className="font-semibold ">No. of Openings </span>
                  <span className="font-normal ">{job.vacancies}</span>
                </div>
                <div className="my-2">
                  <span className="font-semibold ">
                    Last Date of application:{" "}
                  </span>
                  <span className="font-normal ">
                    {job.lastDateOfApplication}
                  </span>
                </div>
                <div className="my-2">
                  <span className="font-semibold ">Job Description:</span>
                  <div className="font-normal ">{job.desc}</div>
                </div>
                <div className="my-2">
                  <span className="font-semibold ">Additional Notes: </span>
                  <div className="font-normal ">{job.additionalNote}</div>
                </div>
                <div className="my-2">
                  <span className="font-semibold ">Attachments: </span>
                  <span className="cursor-pointer">
                    <Link href={job.imgUrl}>
                      <img
                        src="/attachment-logo.svg"
                        alt="attachment-logo"
                        className="h-[13px] w-[13px] inline mx-1"
                      />
                    </Link>
                  </span>
                </div>
              </div>
              <div className="flex flex-row justify-center mt-[80px]">
                <button className="px-10 py-1 mx-auto border-2 border-gray-900 rounded-2xl ">
                  <span>
                    <img
                      src="/anchor-logo.svg"
                      alt="anchor-logo"
                      className="inline mx-1 h-[20px] w-[20px]"
                    />
                  </span>
                  <span> Submit</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
