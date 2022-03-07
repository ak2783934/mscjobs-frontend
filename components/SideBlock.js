import React from "react";
import Link from "next/link";

const SideBlock = ({ pageName }) => {
  return (
    <div className="hidden w-1/3 md:block">
      <div className="bg-white w-[230px] rounded h-auto mx-auto px-4 py-10">
        <Link href="/governmentjobs">
          <div className="py-2 cursor-pointer">
            <span className="inline">Government Jobs</span>
            <span className="inline">
              {pageName === "governmentjobs" && (
                <img
                  src="https://img.icons8.com/material-rounded/24/000000/sort-right.png"
                  alt="side-arrow"
                  className="inline w-4 h-4"
                />
              )}
            </span>
          </div>
        </Link>
        <Link href="teachingjobs">
          <div className="py-2 cursor-pointer">
            <span className="inline">Teaching Jobs</span>
            <span className="inline">
              {pageName === "teachingjobs" && (
                <img
                  src="https://img.icons8.com/material-rounded/24/000000/sort-right.png"
                  alt="side-arrow"
                  className="inline w-4 h-4"
                />
              )}
            </span>
          </div>
        </Link>
        <Link href="otherjobs">
          <div className="py-2 cursor-pointer">
            <span className="inline">Other Jobs</span>
            <span className="inline">
              {pageName === "otherjobs" && (
                <img
                  src="https://img.icons8.com/material-rounded/24/000000/sort-right.png"
                  alt="side-arrow"
                  className="inline w-4 h-4"
                />
              )}
            </span>
          </div>
        </Link>
        <Link href="studymaterials">
          <div className="py-2 cursor-pointer">
            <span className="inline">Study Materials</span>
            <span className="inline">
              {pageName === "studymaterials" && (
                <img
                  src="https://img.icons8.com/material-rounded/24/000000/sort-right.png"
                  alt="side-arrow"
                  className="inline w-4 h-4"
                />
              )}
            </span>
          </div>
        </Link>
        <Link href="premiumservices">
          <div className="py-2 cursor-pointer">
            <span className="inline">Premium services</span>
            <span className="inline">
              {pageName === "premiumservices" && (
                <img
                  src="https://img.icons8.com/material-rounded/24/000000/sort-right.png"
                  alt="side-arrow"
                  className="inline w-4 h-4"
                />
              )}
            </span>
          </div>
        </Link>
        <Link href="careertips">
          <div className="py-2 cursor-pointer">
            <span className="inline">Career tips</span>
            <span className="inline">
              {pageName === "careertips" && (
                <img
                  src="https://img.icons8.com/material-rounded/24/000000/sort-right.png"
                  alt="side-arrow"
                  className="inline w-4 h-4"
                />
              )}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SideBlock;
