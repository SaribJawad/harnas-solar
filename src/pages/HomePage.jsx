import React from "react";
import HeroSection from "../components/sections/HeroSection";
import ProductsSection from "../components/sections/ProductsSection";
import BenefitsSection from "../components/sections/BenefitsSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";

function HomePage() {
  return (
    <div className="bg-[#4169e1] h-full w-full">
      <HeroSection />
      <ProductsSection />
      <BenefitsSection />
      <TestimonialsSection />
    </div>
  );
}

export default HomePage;
