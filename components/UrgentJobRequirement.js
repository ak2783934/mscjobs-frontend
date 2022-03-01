import React from "react";
import Link from "next/link";

const UrgentJobRequirement = () => {
  return (
    <div className="bg-[#F8F7F7] h-auto my-2 rounded pb-3">
      <div className="px-5 py-5 text-lg font-bold">
        Urgently Job Requirement
      </div>
      <hr />
      <Link href="/applyhere" className="cursor-pointer ">
        <div className="bg-[#C4C4C4] mx-4 my-2 px-4 py-2">
          <div className="text-lg font-bold text-center">Name of Company</div>
          <div className="my-2 text-xs font-thin md:text-sm">
            <span>Posted: 1 hr</span>
            <span className="ml-10">Job Post</span>
          </div>
          <div className="mx-4 my-2 text-sm">Experience: 3-10 years</div>
          <div className="mx-4 my-2 text-sm">
            Location: Bangaluru/Delhi/Gurugram
          </div>
        </div>
      </Link>

      <Link href="/applyhere" className="cursor-pointer ">
        <div className="bg-[#C4C4C4] mx-4 my-2 px-4 py-2">
          <div className="text-lg font-bold text-center">Name of Company</div>
          <div className="my-2 text-xs font-thin md:text-sm">
            <span>Posted: 1 hr</span>
            <span className="ml-10">Job Post</span>
          </div>
          <div className="mx-4 my-2 text-sm">Experience: 3-10 years</div>
          <div className="mx-4 my-2 text-sm">
            Location: Bangaluru/Delhi/Gurugram
          </div>
        </div>
      </Link>
    </div>
  );
};

export default UrgentJobRequirement;
