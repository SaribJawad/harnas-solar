import { ArrowUpRight } from "lucide-react";
import React from "react";

function ProductCard({ solar }) {
  return (
    <div className="  bg-white flex flex-col justify-between  lg:p-4 p-2  transform  transition-all duration-300 hover:scale-[1.03] rounded-md hover:rounded-none">
      <div className="flex flex-col gap-1 ">
        <h2 className="text-xs sm:text-sm text-center text-[#4169E1]">
          {solar.solarType}
        </h2>
        <h3 className="lg:text-sm text-xs font-semibold">{solar.solar}</h3>
      </div>
      <img className="w-full" src={solar.solarImage} alt="" />
      <div className=" flex items-center justify-between ">
        <span className="sm:text-md text-sm text-red-700 font-semibold">
          ${solar.price}.00
        </span>
        <button className="lg:block hidden border border-black rounded-full px-2 py-1 text-xs transform transition-all duration-300 hover:bg-[#046200] hover:border-[#046200] hover:text-white">
          View details
        </button>
        <button className="lg:hidden block border border-black rounded-full p-1  text-xs transform transition-all duration-300 hover:bg-[#046200] hover:border-[#046200] hover:text-white">
          <ArrowUpRight size={15} />
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
