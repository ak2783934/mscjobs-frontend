import React from "react";
import Link from "next/link";
import Image from "next/image";

const PosterSection = () => {
  return (
    <div className="flex flex-row mx-4 md:mx-10">
      <div className="grow">
        <div className="relative w-full md:h-93">
          <Image alt="our-service" src={"/our-service.svg"} layout="fill" />
        </div>
        <div className="relative w-full md:h-93">
          <Image alt="work-with-us" src={"/work-with-us.svg"} layout="fill" />
        </div>
        <div className="relative w-full md:h-100">
          <Image alt="girl-pic" src={"/girl-pic.svg"} layout="fill" />
        </div>
      </div>
      <div className="w-full px-4 md:w-96">
        <div className="relative w-full h-24">
          <Image alt="beware-of-scammer" src={"/beware.svg"} layout="fill" />
        </div>
        <div className="bg-[#F8F7F7] h-auto my-2 rounded">
          <div className="px-5 py-5 text-lg font-bold">Jobs by top skills</div>
          <hr />
          <div className="px-6 pt-4 pb-1 font-semibold ">
            <Link href="/#">Teaching Jobs</Link>
          </div>
          <div className="px-6 pb-1 font-semibold ">
            <Link href="/#">JEE Faculty Jobs</Link>
          </div>
          <div className="px-6 pb-1 font-semibold ">
            <Link href="/#">NEET Faculty Jobs</Link>
          </div>
          <div className="px-6 pb-1 font-semibold ">
            <Link href="/#">Home Tutor Jobs</Link>
          </div>
          <div className="px-6 pb-1 font-semibold ">
            <Link href="/#">Banking Jobs</Link>
          </div>
          <div className="px-6 pb-1 font-semibold ">
            <Link href="/#">BPO Jobs</Link>
          </div>
          <div className="px-6 pb-1 font-semibold ">
            <Link href="/#">Data Entry Jobs</Link>
          </div>
          <div className="px-6 pb-1 font-semibold ">
            <Link href="/#">Data Science Jobs</Link>
          </div>
          <div className="px-6 pb-1 font-semibold ">
            <Link href="/#">Java Jobs</Link>
          </div>
          <div className="px-6 pb-1 font-semibold ">
            <Link href="/#">Marketing Jobs</Link>
          </div>
          <div className="px-6 pb-1 font-semibold ">
            <Link href="/#">Engineering Jobs</Link>
          </div>
          <div className="px-6 pb-1 font-semibold ">
            <Link href="/#">SEO Jobs</Link>
          </div>
          <div className="px-6 pb-10 font-semibold ">
            <Link href="/#">Mentor Jobs</Link>
          </div>
        </div>
        <div className="bg-[#F8F7F7] h-auto my-2 rounded">
          <div className="px-5 py-5 text-lg font-bold">
            Urgently Job Requirement
          </div>
          <hr />
          <div className="px-6 pt-4 pb-1 font-semibold ">
            <Link href="/#">Teacher Jobs</Link>
          </div>
          <div className="px-6 pb-1 font-semibold ">
            <Link href="/#">HR Head Jobs</Link>
          </div>
          <div className="px-6 pb-1 font-semibold ">
            <Link href="/#">Animation Jobs</Link>
          </div>
          <div className="px-6 pb-1 font-semibold ">
            <Link href="/#">Architecture Jobs</Link>
          </div>
          <div className="px-6 pb-1 font-semibold ">
            <Link href="/#">Banking Jobs</Link>
          </div>
          <div className="px-6 pb-1 font-semibold ">
            <Link href="/#">BPO Jobs</Link>
          </div>
          <div className="px-6 pb-1 font-semibold ">
            <Link href="/#">Data Entry Jobs</Link>
          </div>
          <div className="px-6 pb-1 font-semibold ">
            <Link href="/#">Data Science Jobs</Link>
          </div>
          <div className="px-6 pb-1 font-semibold ">
            <Link href="/#">Engineering Jobs</Link>
          </div>
          <div className="px-6 pb-1 font-semibold ">
            <Link href="/#">SEO Jobs</Link>
          </div>
          <div className="px-6 pb-10 font-semibold ">
            <Link href="/#">Mentor Jobs</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PosterSection;
