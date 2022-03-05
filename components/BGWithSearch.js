import React from "react";
import Link from "next/link";
import SearchWithButton from "../components/SearchWithButton";

const BGWithSearch = () => {
  return (
    <div
      style={{
        backgroundImage: `url(/bgimage.svg)`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#008CF3",
      }}
      className="w-full my-4 h-auto md:h-[35rem] pb-2 md:pb-0"
    >
      <div className="w-auto px-4 py-2 text-sm font-bold text-center md:py-4 md:text-left md:pt-16 md:pb-10 md:text-4xl md:px-14">
        5,000+ JOBS. CONNECT TO BETTER CAREER OPTIONS
      </div>

      <div className="md:grid md:grid-cols-2 md:gap-10">
        <div className="relative h-auto">
          <div className="w-4/5 h-full mx-auto bg-black bg-opacity-75 md:absolute md:right-0 rounded-xl">
            <div className="py-1 text-sm font-bold text-center text-white md:py-5 md:text-4xl">
              Job Search by Profession
            </div>
            <div className="w-4/5 mx-auto ">
              <SearchWithButton />
            </div>
            <div className="px-8 py-2 text-white text-tiny md:text-sm md:py-6">
              Leading Job Portal for Nobel Professions like Teaching, Academic
              Mentor & such more. Trending Available Locations : Jharkhand,
              Bihar, Kolkata, Chattisgarh
            </div>
          </div>
        </div>

        <div className="flex flex-row my-4 md:relative md:h-56 md:mx-32">
          <div className="w-[45%] mx-auto text-center text-white bg-black rounded md:absolute md:bottom-0 bg-opacity-90 md:h-3/5 ">
            <div className="pt-3 pb-2 text-sm font-bold leading-4 md:pt-4 md:text-base">
              New to MSC Jobs
            </div>
            <Link href="/applyhere">
              <div className="text-xs font-bold leading-4 cursor-pointer md:text-sm text-violet-700">
                Connect with us
              </div>
            </Link>
            <div className="flex flex-row text-xs font-bold leading-5">
              <hr className="w-1/3 mx-3 my-3" /> <span>OR</span>{" "}
              <hr className="w-1/3 mx-3 my-3" />
            </div>
            <Link href="/uploadresume">
              <div className="h-auto px-2 py-1 mx-3 my-1 text-xs font-bold rounded cursor-pointer md:text-sm bg-uploadResumeBg">
                UPLOAD RESUME
              </div>
            </Link>
          </div>

          <div className="w-[45%] mx-auto text-center text-white bg-black rounded md:absolute md:bottom-0 md:right-0 bg-opacity-90 md:h-3/5 ">
            <div className="pt-3 pb-2 text-sm font-bold leading-4 md:pt-4 md:text-base ">
              Free Job Alert
            </div>
            <div className="text-xs font-bold leading-4 md:text-sm text-violet-700">
              Get all jobs update
            </div>
            <div className="text-xs font-bold leading-4 md:text-sm text-violet-700">
              on your email
            </div>
            <Link href="/jobalert">
              <div className="px-1 py-1 mx-2 my-2 text-xs text-sm font-bold border-2 rounded cursor-pointer text-alert">
                Click here for Job Alert
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="md:mx-[120px] cursor-pointer">
        <Link href="http://whatsapp.com">
          <img
            src="/whatsapp-logo.png"
            alt="whatsapp"
            className="h-[40px] w-[40px] float-right "
          />
        </Link>
      </div>
    </div>
  );
};

export default BGWithSearch;
