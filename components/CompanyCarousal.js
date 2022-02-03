import React from "react";
import useWindowSize from "./../hooks/useWindowSize";

import Image from "next/image";
import { Carousel } from "@trendyol-js/react-carousel";

const CustomComp = ({ imgsrc }) => {
  const size = useWindowSize();
  return (
    <div className="w-auto h-auto m-1 overflow-hidden md:m-4">
      <Image
        src={imgsrc}
        alt="logoimgs"
        width={size.width < 700 ? 300 : 150}
        height={size.width < 700 ? 300 : 150}
      />
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

const CompanyCarousal = () => {
  const size = useWindowSize();
  const imgArray = [
    "https://res.cloudinary.com/dlb1ct3qc/image/upload/v1643478601/c8_y7n21s.jpg",
    "https://res.cloudinary.com/dlb1ct3qc/image/upload/v1643478601/c1_yqwjxc.png",
    "https://res.cloudinary.com/dlb1ct3qc/image/upload/v1643478601/c2_zrfrqx.png",
    "https://res.cloudinary.com/dlb1ct3qc/image/upload/v1643478601/c7_rkrb7l.png",
    "https://res.cloudinary.com/dlb1ct3qc/image/upload/v1643478601/c5_txsc9q.png",
    "https://res.cloudinary.com/dlb1ct3qc/image/upload/v1643478601/c6_lbkd2l.png",
    "https://res.cloudinary.com/dlb1ct3qc/image/upload/v1643478601/c3_y8hwm7.png",
    "https://res.cloudinary.com/dlb1ct3qc/image/upload/v1643478601/c4_me9fop.png",
  ];
  return (
    <div className="w-auto h-auto mx-4 my-8 border-0 border-black rounded shadow-2xl md:mx-10 ">
      <div className="pt-3 pb-2 text-lg font-bold text-center md:text-4xl">
        Choose your dream company
      </div>
      <Carousel
        className="w-auto h-auto my-2"
        show={size.width < 700 ? 4 : 6}
        slide={2}
        swiping={true}
        leftArrow={<LeftArrow />}
        rightArrow={<RightArrow />}
      >
        {imgArray.map((imgsrc, index) => {
          return <CustomComp key={index} imgsrc={imgsrc} />;
        })}
      </Carousel>
    </div>
  );
};

export default CompanyCarousal;
