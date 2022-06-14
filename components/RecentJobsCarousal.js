import React, { useState, useEffect } from "react";
import Link from "next/link";

const RecentJobComponent = ({ job }) => {
  console.log(job);
  return (
    <Link
      href={{
        pathname: "/jobPreviewPage",
        query: { jobid: job._id, jobType: job.jobType1 },
      }}
    >
      <div className="w-auto h-20 m-1 overflow-hidden bg-[#AEBAD2] md:h-40 md:m-4 cursor-pointer">
        <div className="px-1 pt-1 font-semibold md:pb-1 md:px-4 md:pt-2 text-[0.55rem] md:text-lg">
          {job.companyName}
        </div>
        <div className="px-1 md:px-4 text-[#757171] text-[0.3rem] md:text-xs md:py-1">
          {job.jobRole}
        </div>
        <div className="px-1 md:px-4 text-[0.4rem] md:text-sm font-semibold">
          Experience: {job.workExp}
        </div>
        <div className="px-1 text-[0.4rem] md:px-4 md:pt-1 md:text-sm font-semibold">
          Location: {job.workLoc}
        </div>
      </div>
    </Link>
  );
};

function RecentJobsCarousal({ jobs }) {
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

      <div className="flex flex-row justify-center">
        {jobs
          .reverse()
          .slice(0, 5)
          .map((job, index) => (
            <RecentJobComponent key={index} job={job} />
          ))}
      </div>
    </div>
  );
}

export default RecentJobsCarousal;
