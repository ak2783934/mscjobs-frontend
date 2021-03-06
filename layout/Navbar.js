import React, { useState, useEffect } from "react";
import Link from "next/link";
import { api } from "../pages/api";

const Navbar = () => {
  const myClass = [
    "hidden w-full  md:items-center md:w-auto md:flex",
    "block w-full  md:items-center md:w-auto md:flex",
  ];
  const [cnt, setCnt] = useState(0);
  const [marqueeMsg, setMarqueeMsg] = useState("Site Under Construction");
  useEffect(() => {
    api
      .get("/marqueemsg", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data.msg);
        setMarqueeMsg(response.data.msg);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
      });
  }, []);

  return (
    <header>
      <nav className="flex flex-wrap items-center justify-between w-full py-2 md:px-12 bg-navbar">
        <div>
          <Link href="/">
            <a className="flex flex-col items-center px-4 md:px-0">
              <img src="/msc-logo.svg" className="h-8 md:h-14" alt="msc-logo" />
              <div className="pt-1 text-white font-Rochester text-tiny md:pt-0 md:text-[10px]">
                Better Career
              </div>
            </a>
          </Link>
        </div>

        <div
          onClick={() => {
            setCnt(cnt ? 0 : 1);
          }}
          className="px-4 md:hidden"
        >
          <svg
            xmlns="<http://www.w3.org/2000/svg>"
            id="menu-button"
            className="block w-10 h-10 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#fff"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>

        <div className={myClass[cnt]} id="menu">
          <ul className="text-sm text-center text-white lg:text-base md:text-sm bg-navbar md:flex md:justify-between md:pt-0">
            <li>
              <Link href="/governmentjobs">
                <a className="block h-full py-2 md:p-2 lg:py-4 lg:px-2 md:py-4 hover:underline">
                  GOVERNMENT JOBS
                </a>
              </Link>
            </li>
            <li>
              <Link href="/teachingjobs">
                <a className="block h-full py-2 md:p-2 lg:py-4 lg:px-2 md:py-4 hover:underline">
                  TEACHING JOBS
                </a>
              </Link>
            </li>
            <li>
              <Link href="/otherjobs">
                <a className="block h-full py-2 md:p-2 lg:py-4 lg:px-2 md:py-4 hover:underline">
                  OTHER JOBS
                </a>
              </Link>
            </li>
            <li>
              <Link href="/careertips">
                <a className="block h-full py-2 md:p-2 lg:py-4 lg:px-2 md:py-4 hover:underline">
                  CAREER TIPS
                </a>
              </Link>
            </li>
            <li>
              <Link href="/#aboutus">
                <a className="block h-full py-2 md:p-2 lg:py-4 lg:px-2 md:py-4 hover:underline">
                  ABOUT US
                </a>
              </Link>
            </li>
            <li>
              <Link href="/studymaterials">
                <a className="block h-full py-2 md:p-2 lg:py-4 lg:px-2 md:py-4 hover:underline">
                  STUDY MATERIAL
                </a>
              </Link>
            </li>
            <li>
              <Link href="/premiumservices">
                <a className="block h-auto px-2 py-2 mx-8 mt-3 text-sm text-black rounded bg-premium hover:underline">
                  PREMIUM SERVICE
                </a>
              </Link>
            </li>
            <li className="mx-8">
              <div className="flex flex-col block h-full py-2 md:p-2">
                <Link href="/otherjobs">
                  <button className="h-auto px-4 py-1 my-1 text-sm text-white border-2 border-black rounded hover:underline hover:border-yellow-300">
                    APPLY HERE
                  </button>
                </Link>
                <Link href="/applyhere">
                  <a className="text-xs text-center text-premium hover:underline">
                    Signup as Employer
                  </a>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <div className="flex flex-row">
        <marquee
          behavior="scroll"
          scrollamount="10"
          width="100%"
          direction="left"
          height="auto"
          className="text-xl text-red-600 "
        >
          {marqueeMsg}
        </marquee>
      </div>
    </header>
  );
};

export default Navbar;
