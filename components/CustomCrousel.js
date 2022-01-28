import React from "react";
import { Carousel } from "@trendyol-js/react-carousel";

const CustomComp = ({ text }) => {
  return (
    <div className="w-auto h-40 p-8 m-8 overflow-hidden text-black bg-blue-100 text-ellipsis">
      {text}
    </div>
  );
};

const RightArrow = () => {
  return (
    <div className="px-10 pt-14">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-10 w-10"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
          clip-rule="evenodd"
        />
        <path
          fill-rule="evenodd"
          d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
  );
};
const LeftArrow = () => {
  return (
    <div className="px-10 pt-14">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
  );
};

const CustomCrousel = () => {
  const myText = [
    "fasdfasdfasdf fasdfasd asdfasdf ",
    "fasdf asdfasd asdf",
    "dfasdf asdfasd asdfa",
    "sdfasd asdfasd",
    "fasdf asdfasd qerawdefasd",
    "asdfasdfaa asdfasdfas asdfa",
    "fasdfase asdffwec ",
    "sdf weradc asdfawf gasdf",
    "asdfwe aserasdcas aseradfc",
  ];
  return (
    <div className="w-auto h-auto">
      <Carousel
        className="w-auto h-auto"
        show={4}
        slide={2}
        swiping={true}
        leftArrow={<LeftArrow />}
        rightArrow={<RightArrow />}
      >
        <CustomComp text="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. Wikipedia" />
        <CustomComp text="Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. Wikipedia" />
        <CustomComp text="mmonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. Wikipedia" />
        <CustomComp text="laceholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. Wikipedia" />
        <CustomComp text="ishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. Wikipedia" />
        <CustomComp text="hic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. Wikipedia" />
        <CustomComp text="demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. Wikipedia" />
        <CustomComp text="is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. Wikipedia" />
      </Carousel>
    </div>
  );
};

export default CustomCrousel;
