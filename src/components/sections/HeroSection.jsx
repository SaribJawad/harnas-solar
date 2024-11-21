import React, { useState, useEffect } from "react";

// Import your background images
import bgImage1 from "../../assets/hero-section-images/hero-section-1.jpg";
import bgImage2 from "../../assets/hero-section-images/hero-section-2.jpg";
import bgImage3 from "../../assets/hero-section-images/hero-section-3.jpg";
import bgImage4 from "../../assets/hero-section-images/hero-section-4.jpg";
import bgImage5 from "../../assets/hero-section-images/hero-section-5.jpg";

function HeroSection() {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [nextBgIndex, setNextBgIndex] = useState(1);
  const backgroundImages = [bgImage1, bgImage2, bgImage3, bgImage4, bgImage5];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentBgIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length
      );
      setNextBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section
      className="relative w-full p-10 md:pt-32 overflow-hidden"
      style={{
        height: "calc(100vh - 69px)",
      }}
    >
      {/* Animated background images */}
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out 
            filter brightness-75 saturate-50 contrast-75 
            ${
              currentBgIndex === index
                ? "opacity-100 scale-100 animate-hero-zoom"
                : "opacity-0 scale-110"
            }`}
          style={{
            backgroundImage: `url(${image})`,
            zIndex: currentBgIndex === index ? 1 : 0,
          }}
        />
      ))}

      {/* Overlay to improve text readability */}
      <div className="absolute inset-0 bg-[#01322267] z-10"></div>

      <div className="relative z-20 w-full text-white flex flex-col items-center text-center">
        <h1 className="xl:text-7xl lg:text-6xl md:text-5xl text-4xl font-bold mb-4 drop-shadow-lg">
          Harness the Power of the Sun
        </h1>
        <p className="lg:text-xl md:text-md text-sm mb-6 drop-shadow-md">
          Unlock limitless energy with cutting-edge solar solutions.
        </p>
        <button className="hover:bg-white border-2 transform  transition-all duration-300 hover:text-black border-white bg-transparent lg:text-md text-sm lg:px-5 px-4 lg:py-3 py-2 rounded-full font-semibold text-white">
          Learn More
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
