import React from "react";
import Link from "next/link";
import Image from "next/image";
import UrgentJobRequirement from "./UrgentJobRequirement";
import JobsByTopSkills from "./JobsByTopSkills";

const PosterSection = ({ jobs }) => {
  return (
    <div className="flex flex-row mx-4 md:mx-10">
      <div className="grow">
        <div className="relative w-full my-1 cursor-pointer md:h-93">
          <Link href="/ourservice">
            <Image alt="our-service" src={"/our-service.svg"} layout="fill" />
          </Link>
        </div>
        <div className="relative w-full my-1 cursor-pointer md:h-93">
          <Link href="/recentjobs">
            <Image alt="work-with-us" src={"/work-with-us.svg"} layout="fill" />
          </Link>
        </div>
        <div className="relative w-full my-1 md:h-100">
          <Image alt="girl-pic" src={"/girl-pic.svg"} layout="fill" />
        </div>
      </div>
      <div className="w-full px-4 md:w-96">
        <div className="relative w-full h-24">
          <Image
            alt="beware-of-scammer"
            className="z-0"
            src={"/beware.svg"}
            layout="fill"
          />
        </div>
        <UrgentJobRequirement jobs={jobs} />
        <JobsByTopSkills />
      </div>
    </div>
  );
};

export default PosterSection;
