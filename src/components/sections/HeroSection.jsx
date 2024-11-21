import React from "react";

function HeroSection() {
  return (
    <section
      className=" w-full p-10 bg-gradient-to-t from-[hsla(225,73%,57%,1)] to-[hsla(51,100%,50%,1)] md:pt-32"
      style={{ height: "calc(100vh - 77px)" }}
    >
      <div className="w-full text-[#4169E1]  flex flex-col items-center text-center">
        <h1 className="xl:text-7xl lg:text-6xl md:text-5xl text-4xl font-bold mb-4">
          Harness the Power of the Sun
        </h1>
        <p className="lg:text-xl md:text-md text-sm mb-6 text-black ">
          Unlock limitless energy with cutting-edge solar solutions.
        </p>
        <button className="hover:bg-[#4169E1] border-2 transform transition-all duration-300 hover:text-white border-[#4169E1]  bg-transparent lg:text-md text-sm lg:px-5 px-4 lg:py-3 py-2 rounded-full font-semibold text-[#4169E1]">
          Learn More
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
// bg-gradient-to-t from-[hsla(225,73%,57%,1)] to-[hsla(51,100%,50%,1)]
// bg-gradient-to-r from-[hsla(225,73%,57%,1)] to-[#c2ae3b]
// className="bg-gradient-to-r from-[hsla(197,71%,73%,1)] to-[hsla(120,61%,50%,1)] ..."
