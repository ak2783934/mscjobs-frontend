import React from "react";
import Link from "next/link";

const JobsByTopSkills = () => {
  return (
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
  );
};

export default JobsByTopSkills;
