import React from "react";

const AboutUs = () => {
  return (
    <div id="aboutus" className="text-center h-auto bg-[#1996B1]">
      <div className="text-xl font-bold underline py-2 text-white">ABOUT US</div>
      <div className="text-2xl font-bold text-[#000E8D]">M.S CONSULTANT</div>
      <div className="text-white text-[#F8BF7D] text-lg">JOBS || PLACEMENT || SERVICE</div>

      <ul className='list-disc pt-6 pb-10'>
        <li>MANPOWER SUPPLY/ TEACHING - NON TEACHING /TECHNICAL</li>
        <li>ENGINEERING / MEDICAL STAFF / BPO WORKER / BANKING</li>
        <li>CONSTRUCTION WORK / ANY TYPES OF WORKER & STAFF</li>
        <li>THIRD PARTY SERVICES(TELEPHONIC SUPPORT / HR / SELLING - BUYING PRODUCT / ONE DAY WORK etc.)</li>
      </ul>
    </div>
  );
};

export default AboutUs;
