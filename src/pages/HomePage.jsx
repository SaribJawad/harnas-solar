import React from "react";
import HeroSection from "../components/sections/HeroSection";
import ProductsSection from "../components/sections/ProductsSection";
import BenefitsSection from "../components/sections/BenefitsSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import SolarCalculator from "../components/sections/SolarEnergyCalculator";

function HomePage() {
  return (
    <div className="bg-[#E1E5DC] h-full w-full">
      <HeroSection />
      <ProductsSection />
      <SolarCalculator />
      <BenefitsSection />
      <TestimonialsSection />
    </div>
  );
}

export default HomePage;
