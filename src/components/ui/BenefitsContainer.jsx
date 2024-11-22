import React from "react";
import costEffectivePng from "../../assets/cost-effective1.png";
import ecoFriendlyPng from "../../assets/eco-friendly.png";
import durablePng from "../../assets/durable1.png";
import highEffiecncy from "../../assets/high-efficiency.png";

function BenefitsContainer() {
  return (
    <div
      className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4
                justify-center gap-4 md:gap-4 lg:gap-8    w-[95%]"
    >
      <div className=" flex flex-col justify-around items-center p-2">
        <img className="w-[70%]" src={costEffectivePng} alt="" />
        <p className="text-center text-black md:text-sm text-xs ">
          Save from the start with our affordable solutions.
        </p>
      </div>
      <div className=" flex flex-col justify-around items-center p-2">
        <img className="w-[70%]" src={ecoFriendlyPng} alt="" />
        <p className="text-center text-black md:text-sm text-xs  ">
          Power a sustainable future with our eco-friendly solar solutions.
        </p>
      </div>
      <div className=" flex flex-col justify-around items-center p-2">
        <img className="w-[70%]" src={durablePng} alt="" />
        <p className="text-center text-black md:text-sm text-xs  ">
          Built to last for decades.
        </p>
      </div>
      <div className=" flex flex-col justify-around items-center p-2">
        <img className="w-[70%]" src={highEffiecncy} alt="" />
        <p className="text-center text-black md:text-sm text-xs  ">
          Maximize your energy output with our high-efficiency solar panels.
        </p>
      </div>
    </div>
  );
}

export default BenefitsContainer;
