import React from "react";
import Link from "next/link";
import { Carousel } from "@trendyol-js/react-carousel";

const CustomComp = ({ job }) => {
  return (
    <div className="w-[25%] h-auto m-1 overflow-hidden bg-[#AEBAD2] md:h-auto md:m-4">
      <div className="w-full h-[40px] md:h-[100px]">
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
      title: "Fresher Faculty/Other Jobs",
      text1: "Connect with us @ 199/- year",
      text2: "Your Resume will be on Top Priority",
      text3: "*Job Guarantee",
    },
    {
      imgUrl: "https://picsum.photos/200/300",
      title: "Institute/Organisation",
      text1: "Connect with us @ 1000/- year",
      text2: "*Premium Assistance ",
      text3: "*Premium Assistance",
    },
  ];
  return (
    <div className="w-auto h-auto mx-4 my-8 border-0 border-black rounded shadow-2xl md:mx-10 ">
      <div className="w-auto px-6 pt-3 text-lg font-bold md:text-4xl">
        Premium Services
      </div>
      <div className="flex flex-row justify-center">
        {jobs.map((job, index) => {
          return <CustomComp key={index} job={job} />;
        })}
      </div>
    </div>
  );
}

export default RecentJobsCarousal;
