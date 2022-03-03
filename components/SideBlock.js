import React from "react";
import Link from "next/link";

const SideBlock = () => {
  return (
    <div className="hidden w-1/3 md:block">
      <div className="bg-white w-[230px] rounded h-auto mx-auto px-4 py-10">
        <Link href="/governmentjobs">
          <div className="py-2 cursor-pointer">Government Jobs</div>
        </Link>
        <Link href="teachingjobs">
          <div className="py-2 cursor-pointer">Teaching Jobs</div>
        </Link>
        <Link href="otherjobs">
          <div className="py-2 cursor-pointer">Other Jobs</div>
        </Link>
        <Link href="permiummaterials">
          <div className="py-2 cursor-pointer">Premium Services</div>
        </Link>
        <Link href="careertips">
          <div className="py-2 cursor-pointer">Career Tips</div>
        </Link>
      </div>
    </div>
  );
};

export default SideBlock;
