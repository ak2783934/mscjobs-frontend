import React from "react";
import Link from "next/link";
import { Carousel } from "@trendyol-js/react-carousel";

const CustomComp = ({ job }) => {
  return (
    <div className="w-auto h-auto m-1 overflow-hidden bg-[#AEBAD2] md:h-auto md:m-4">
      <div className="w-full h-[40px] md:h-[80px]">
        <img
          src={job.imgUrl}
          className="w-full h-full"
          alt="premium services"
        />
      </div>
      <div className="px-1 pt-1 font-semibold md:pb-1 md:px-4 md:pt-2 text-[0.55rem] md:text-lg">
        {job.title}
      </div>
      <div className="px-1 md:px-4 text-[#757171] text-[0.3rem] md:text-xs md:py-1">
        {job.text1}
      </div>
      <div className="px-1 md:px-4 text-[0.4rem] md:text-sm pb-1">
        {job.text2}
      </div>
    </div>
  );
};

const RightArrow = () => {
  return (
    <div className="px-3 pt-6 md:px-10 md:pt-16">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4 md:w-10 md:h-10"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        />
        <path
          fillRule="evenodd"
          d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};
const LeftArrow = () => {
  return (
    <div className="px-3 pt-6 md:px-10 md:pt-16">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4 md:w-10 md:h-10"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

function RecentJobsCarousal() {
  const jobs = [
    {
      imgUrl: "https://picsum.photos/200/300",
      title: "Experience Faculty",
      text1: "Connect with us @ 99/- year",
      text2: "Experience should be more than 2 years.",
      text3: "*Premium Assistance",
    },
    {
      imgUrl: "https://picsum.photos/200/300",
      title: "Experience Faculty",
      text1: "Connect with us @ 99/- year",
      text2: "Experience should be more than 2 years.",
      text3: "*Premium Assistance",
    },
    {
      imgUrl: "https://picsum.photos/200/300",
      title: "Experience Faculty",
      text1: "Connect with us @ 99/- year",
      text2: "Experience should be more than 2 years.",
      text3: "*Premium Assistance",
    },
    {
      imgUrl: "https://picsum.photos/200/300",
      title: "Experience Faculty",
      text1: "Connect with us @ 99/- year",
      text2: "Experience should be more than 2 years.",
      text3: "*Premium Assistance",
    },
    {
      imgUrl: "https://picsum.photos/200/300",
      title: "Experience Faculty",
      text1: "Connect with us @ 99/- year",
      text2: "Experience should be more than 2 years.",
      text3: "*Premium Assistance",
    },
    {
      imgUrl: "https://picsum.photos/200/300",
      title: "Experience Faculty",
      text1: "Connect with us @ 99/- year",
      text2: "Experience should be more than 2 years.",
      text3: "*Premium Assistance",
    },
    {
      imgUrl: "https://picsum.photos/200/300",
      title: "Experience Faculty",
      text1: "Connect with us @ 99/- year",
      text2: "Experience should be more than 2 years.",
      text3: "*Premium Assistance",
    },
    {
      imgUrl: "https://picsum.photos/200/300",
      title: "Experience Faculty",
      text1: "Connect with us @ 99/- year",
      text2: "Experience should be more than 2 years.",
      text3: "*Premium Assistance",
    },
  ];
  return (
    <div className="w-auto h-auto mx-4 my-8 border-0 border-black rounded shadow-2xl md:mx-10 ">
      <div className="w-auto px-6 pt-3 text-lg font-bold md:text-4xl">
        Premium Services
      </div>
      <Link href="/premiumservices">
        <div className="px-6 text-xs text-right text-blue-400 cursor-pointer md:px-10 md:text-sm ">
          View all
        </div>
      </Link>

      <Carousel
        className="w-auto h-auto my-2"
        show={4}
        slide={2}
        swiping={true}
        leftArrow={<LeftArrow />}
        rightArrow={<RightArrow />}
      >
        {jobs.map((job, index) => {
          return <CustomComp key={index} job={job} />;
        })}
      </Carousel>
    </div>
  );
}

export default RecentJobsCarousal;
