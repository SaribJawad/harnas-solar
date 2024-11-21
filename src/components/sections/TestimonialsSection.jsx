import React from "react";
import CustomersCarousel from "../ui/CustomersCarousel";

function TestimonialsSection() {
  return (
    <section className="bg-[#dddcdc] w-full xl:p-16 lg:p-12 md:p-10 py-5   flex flex-col  gap-8">
      <div className="w-full flex justify-center pt-5 md:pt-0">
        <h2 className="font-semibold xl:text-5xl lg:text-4xl md:text-3xl text-[22px] md:pt-0 text-[#4169E1]">
          What Our Customers Say
        </h2>
      </div>
      <CustomersCarousel />
    </section>
  );
}

export default TestimonialsSection;
