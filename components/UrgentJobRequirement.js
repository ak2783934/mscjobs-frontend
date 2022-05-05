import React from "react";
import Link from "next/link";

const getDate = (date) => {
  const postDate = new Date(date);
  const dateStr =
    postDate.getDay() +
    "-" +
    postDate.getMonth() +
    "-" +
    postDate.getFullYear();
  return dateStr;
};

const UrgentJobRequirement = ({ jobs }) => {
  return (
    <div className="bg-[#F8F7F7] h-auto my-2 rounded pb-3">
      <div className="px-5 py-5 text-lg font-bold">
        Urgently Job Requirement
      </div>
      <hr />

      {jobs && (
        <Link
          href={{ pathname: "/jobPreviewPage", query: { jobid: jobs[0]?._id } }}
        >
          <div className="bg-[#C4C4C4] cursor-pointer mx-4 my-2 px-4 py-2">
            <div className="text-lg font-bold text-center">
              {jobs[0]?.companyName}
            </div>
            <div className="my-2 text-xs font-thin md:text-sm">
              <span>Posted: {getDate(jobs[0]?.createdAt)}</span>
              <span className="ml-10">{jobs[0]?.jobRole}</span>
            </div>
            <div className="mx-4 my-2 text-sm">
              Experience: {jobs[0]?.workExp}
            </div>
            <div className="mx-4 my-2 text-sm">
              Location: {jobs[0]?.workLoc}
            </div>
          </div>
        </Link>
      )}

      {jobs && (
        <Link
          href={{ pathname: "/jobPreviewPage", query: { jobid: jobs[1]?._id } }}
        >
          <div className="bg-[#C4C4C4] mx-4 my-2 px-4 cursor-pointer py-2">
            <div className="text-lg font-bold text-center">
              {jobs[1]?.companyName}
            </div>
            <div className="my-2 text-xs font-thin md:text-sm">
              <span>Posted: {getDate(jobs[1]?.createdAt)}</span>
              <span className="ml-10">{jobs[0]?.jobRole}</span>
            </div>
            <div className="mx-4 my-2 text-sm">
              Experience: {jobs[1]?.workExp}
            </div>
            <div className="mx-4 my-2 text-sm">
              Location: {jobs[1]?.workLoc}
            </div>
          </div>
        </Link>
      )}
    </div>
  );
};

export default UrgentJobRequirement;
