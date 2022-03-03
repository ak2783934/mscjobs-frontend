import React from "react";

const SearchWithButton = () => {
  return (
    <div className="flex flex-row w-full">
      <div className="h-6 w-[70%] md:h-10">
        <input
          style={{
            backgroundImage: `url(/search-icon.svg)`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "5px 5px",
          }}
          placeholder="Search by profession"
          className="w-full h-full px-3 pt-[2px] bg-[left_top_1rem] bg-[top_left_1rem] bg-[length:17px_17px] md:bg-[length:30px_30px] text-xs indent-3 md:indent-6 md:text-lg outline-0"
        />
      </div>
      <div className="h-6 w-[30%] md:h-10 bg-searchBg">
        <button className="w-full h-full text-xs font-bold text-center text-white md:text-lg">
          SEARCH
        </button>
      </div>
    </div>
  );
};

export default SearchWithButton;
