import React from "react";
import { Goal, Award, Users } from "lucide-react";

function AboutUsPage() {
  return (
    <section className=" py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Our Team"
              className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
            />
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#4169E1] mb-6">
              About Our Company
            </h2>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Founded in 2010 by a group of passionate environmental
                engineers, SolarTech Solutions emerged from a simple yet
                powerful vision: to revolutionize the way communities access and
                utilize renewable energy. What began in a small garage in
                Silicon Valley has now grown into a national leader in solar
                technology and sustainable energy solutions.
              </p>

              <p>
                Our journey started with a core mission to make clean energy
                accessible, affordable, and efficient for homes and businesses
                across the country. We recognized early on that the future of
                our planet depends on transitioning from fossil fuels to
                renewable energy sources. Since our inception, we've installed
                over 10,000 solar systems, prevented more than 50,000 tons of
                carbon emissions, and empowered countless communities to take
                control of their energy consumption.
              </p>

              <p>
                Today, SolarTech Solutions continues to push the boundaries of
                solar innovation. We're not just a solar panel company – we're a
                team dedicated to creating a sustainable future, one rooftop at
                a time. Our commitment goes beyond technology; we're building a
                global movement towards cleaner, greener, and more responsible
                energy consumption.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mt-8">
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <Goal className="mx-auto text-[#4169E1] mb-2" size={40} />
                <h3 className="font-semibold text-gray-800">Mission</h3>
                <p className="text-sm text-gray-600">
                  Sustainable Energy Solutions
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <Award className="mx-auto text-[#4169E1] mb-2" size={40} />
                <h3 className="font-semibold text-gray-800">Vision</h3>
                <p className="text-sm text-gray-600">Global Green Revolution</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <Users className="mx-auto text-[#4169E1] mb-2" size={40} />
                <h3 className="font-semibold text-gray-800">Team</h3>
                <p className="text-sm text-gray-600">50+ Energy Experts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUsPage;
