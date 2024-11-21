import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Quote } from "lucide-react";
import Face from "../../assets/faces/Face.jpeg";
import Face1 from "../../assets/faces/Face1.jpeg";
import Face2 from "../../assets/faces/Face2.jpeg";
import Face3 from "../../assets/faces/Face3.jpeg";
import Face4 from "../../assets/faces/face4.jpeg";
import Face5 from "../../assets/faces/face5.jpeg";
import Face6 from "../../assets/faces/face6.jpeg";

function TestimonialSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      image: Face,
      feedback:
        "The solar panels are amazing! My energy bills have dropped significantly, and the installation was quick and easy.",
    },
    {
      id: 2,
      name: "Jane Smith",
      image: Face1,
      feedback:
        "I love that I'm contributing to a greener planet while saving money. The efficiency of these panels is outstanding!",
    },
    {
      id: 3,
      name: "Alice Johnson",
      image: Face2,
      feedback:
        "Fantastic product! The solar system is robust, and the service provided was exceptional. Highly recommend it!",
    },
    {
      id: 4,
      name: "Alice Johnson",
      image: Face3,
      feedback:
        "Incredible experience! The team was professional, and the product quality exceeded my expectations. Thank you!",
    },
    {
      id: 5,
      name: "Alice Johnson",
      image: Face4,
      feedback:
        "Switching to solar energy has been the best decision. My home is now more sustainable, and I’ve seen huge savings.",
    },
    {
      id: 6,
      name: "Alice Johnson",
      image: Face5,
      feedback:
        "The durability and efficiency of these solar panels are unmatched. Great investment for my business!",
    },
    {
      id: 7,
      name: "Alice Johnson",
      image: Face6,
      feedback:
        "Exceptional customer service and top-notch solar solutions. I’m thrilled with the performance of my solar setup.",
    },
  ];

  return (
    <div className="container mx-auto px-4 ">
      <div className="max-w-2xl mx-auto overflow-hidden">
        <Slider {...settings} className="testimonial-slider">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="text-center p-4 md:p-8 focus:outline-none"
            >
              <div className="bg-white shadow-lg rounded-lg p-6 md:p-8">
                <Quote
                  className="mx-auto text-[#4169E1] mb-4"
                  size={40}
                  strokeWidth={1.5}
                />
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 mx-auto rounded-full mb-4 object-cover"
                />
                <p className="italic text-gray-700 mb-4 text-base md:text-lg">
                  "{testimonial.feedback}"
                </p>
                <h3 className="font-semibold text-lg text-gray-900">
                  {testimonial.name}
                </h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default TestimonialSlider;
