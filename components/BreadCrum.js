import React from "react";
import Link from "next/link";

const BreadCrum = ({ pageName }) => {
  return (
    <div className="flex flex-row px-20 py-3 font-bold md:px-32 text-md md:text-4xl">
      <Link href="/">Home</Link>{" "}
      <span>
        <img
          src="https://img.icons8.com/ios-glyphs/30/000000/more-than.png"
          alt="> tag"
          className="w-3 h-3 mx-2 mt-2 md:w-6 md:h-6"
        />
      </span>{" "}
      {pageName}
    </div>
  );
};

export default BreadCrum;
