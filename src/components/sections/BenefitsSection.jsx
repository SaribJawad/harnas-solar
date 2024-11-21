import React from "react";
import BenefitsContainer from "../ui/BenefitsContainer";

function BenefitsSection() {
  return (
    <div className=" bg-[#E1E5DC] w-full xl:p-16 lg:p-12 md:p-10  flex flex-col items-center   gap-10 py-5">
      <div className="w-full flex flex-col   items-center md:gap-3 gap-0 ">
        <h2 className="font-semibold xl:text-5xl lg:text-4xl md:text-3xl    text-[22px]  md:pt-3 text-[#046200]">
          Why Choose Our Solar Panels?
        </h2>
        <p className="lg:text-lg md:text-md text-[#046200]   text-sm">
          Here’s why we’re your best choice.
        </p>
      </div>

      <BenefitsContainer />
    </div>
  );
}

export default BenefitsSection;
