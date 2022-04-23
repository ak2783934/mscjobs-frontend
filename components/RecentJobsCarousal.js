import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Carousel } from "@trendyol-js/react-carousel";
import { api } from "../pages/api";

const RecentJobComponent = (props) => {
  // console.log(
  //   _id + " " + companyName + " " + workExp + " " + workLoc + " " + jobRole
  // );

  // console.log(props);

  return (
    <div className="w-auto h-20 m-1 overflow-hidden bg-[#AEBAD2] md:h-40 md:m-4">
      <div className="px-1 pt-1 font-semibold md:pb-1 md:px-4 md:pt-2 text-[0.55rem] md:text-lg">
        Fidelity.com
      </div>
      <div className="px-1 md:px-4 text-[#757171] text-[0.3rem] md:text-xs md:py-1">
        Intern
      </div>
      <div className="px-1 md:px-4 text-[0.4rem] md:text-sm font-semibold">
        Experience: 5 years
      </div>
      <div className="px-1 text-[0.4rem] md:px-4 md:pt-1 md:text-sm font-semibold">
        Location: Ramgarh
      </div>
    </div>
  );
};
const RightArrow = () => {
  return (
    <div className="px-3 pt-6 md:px-10 md:pt-16">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4 md:w-10 md:h-10"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        />
        <path
          fillRule="evenodd"
          d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};
const LeftArrow = () => {
  return (
    <div className="px-3 pt-6 md:px-10 md:pt-16">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4 md:w-10 md:h-10"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

function RecentJobsCarousal() {
  // const [jobs, setJobs] = useState([]);
  // var myJobs = [];
  // useEffect(() => {
  //   // myJobs.splice(0, myJobs.length)
  //   api
  //     .get("/jobs", {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     })
  //     .then((response) => {
  //       setJobs(response.data.jobs);
  //       myJobs.push(response.data.jobs);
  //       // console.log("Inside useEffect");
  //       // console.log(myJobs);
  //     })
  //     .catch((error) => {
  //       if (error.response) {
  //         console.log(error.response.data);
  //         console.log(error.response.status);
  //         console.log(error.response.headers);
  //       } else if (error.request) {
  //         // The request was made but no response was received
  //         console.log(error.request);
  //       } else {
  //         // Something happened in setting up the request that triggered an Error
  //         console.log("Error", error.message);
  //       }
  //     });
  // }, []);

  const jobs = [
    {
      companyName: "XYZ solutions",
      jobRole: "SDE I",
      experienceReq: "3-10 years",
      jobLocation: "Bangaluru",
    },
    {
      companyName: "Avinash solutions",
      jobRole: "SDE I",
      experienceReq: "3-10 years",
      jobLocation: "Bangaluru",
    },
    {
      companyName: "Mayank solutions",
      jobRole: "SDE I",
      experienceReq: "3-10 years",
      jobLocation: "Bangaluru",
    },
    {
      companyName: "Rajesh solutions",
      jobRole: "SDE I",
      experienceReq: "3-10 years",
      jobLocation: "Bangaluru",
    },
    {
      companyName: "Shivam solutions",
      jobRole: "SDE I",
      experienceReq: "3-10 years",
      jobLocation: "Bangaluru",
    },
    {
      companyName: "Vishnu solutions",
      jobRole: "SDE I",
      experienceReq: "3-10 years",
      jobLocation: "Bangaluru",
    },
    {
      companyName: "Punam solutions",
      jobRole: "SDE I",
      experienceReq: "3-10 years",
      jobLocation: "Bangaluru",
    },
    {
      companyName: "Jadav solutions",
      jobRole: "SDE I",
      experienceReq: "3-10 years",
      jobLocation: "Bangaluru",
    },
  ];

  return (
    <div className="w-auto h-auto mx-4 my-8 border-0 border-black rounded shadow-2xl md:mx-10 ">
      <div className="w-auto px-6 pt-3 text-lg font-bold md:text-4xl">
        Recent Jobs
      </div>
      <Link href="/recentjobs">
        <div className="px-6 text-xs text-right text-blue-400 cursor-pointer md:px-10 md:text-sm ">
          View all
        </div>
      </Link>

      <Carousel
        className="w-auto h-auto my-2"
        show={4}
        slide={2}
        swiping={true}
        leftArrow={<LeftArrow />}
        rightArrow={<RightArrow />}
      >
        {jobs.map((job, index) => {
          // const { _id, companyName, jobRole, workExp, workLoc } = job;
          // console.log(
          //   _id +
          //     " " +
          //     companyName +
          //     " " +
          //     jobRole +
          //     " " +
          //     workExp +
          //     " " +
          //     workLoc
          // );
          // console.log(myJobs);
          return <RecentJobComponent key={index} job={job} />;
        })}
      </Carousel>
    </div>
  );
}

export default RecentJobsCarousal;
