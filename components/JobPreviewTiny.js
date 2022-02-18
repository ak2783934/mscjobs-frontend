import React from "react";
import Link from "next/link";
const JobPreviewTiny = ({ job }) => {
  return (
    <div className="px-4 py-1 mx-2 mt-3 bg-gray-300 rounded-xl">
      <div className="text-lg">{job.companyName}</div>
      <hr className="border-black border-1" />
      <div className="px-2 text-xs md:px-8">{job.desc}</div>
      <div className="px-2 text-xs md:px-8">
        Last Date of Application : {job.lastDateOfApplication}
      </div>
      <div className="px-2 text-xs md:px-8">
        No of vacancies : {job.vacancies}
      </div>
      <Link href="/">
        <div className="text-right cursor-pointer text-tiny">
          Explore more >>
        </div>
      </Link>
    </div>
  );
};

export default JobPreviewTiny;
