import React, { useState } from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };
  const position = [40.7128, -74.006];

  return (
    <section className="container mx-auto px-4 py-16 lg:px-8 bg-[#DDDCDC] ">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white shadow-lg rounded-lg p-8 space-y-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>

          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <MapPin className="text-[#4169E1] h-6 w-6" />
              <span className="text-gray-700">
                123 Business Street, New York, NY
              </span>
            </div>

            <div className="flex items-center space-x-4">
              <Mail className="text-[#4169E1] h-6 w-6" />
              <span className="text-gray-700">contact@company.com</span>
            </div>

            <div className="flex items-center space-x-4">
              <Phone className="text-[#4169E1] h-6 w-6" />
              <span className="text-gray-700">+1 (555) 123-4567</span>
            </div>
          </div>
        </div>

        <div className="h-96 w-full bg-gray-100 rounded-lg overflow-hidden shadow-lg">
          <MapContainer
            center={position}
            zoom={13}
            scrollWheelZoom={false}
            className="h-full w-full"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              import React from "react";
              <Popup permanent={true} closeButton={false}>
                Our Business Location <br /> 123 Business Street, New York, NY
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>

      <div className="mt-12 bg-white shadow-lg rounded-lg p-8 max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-300"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none "
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-md  outline-none  transition duration-300"
              placeholder="Type your message here"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#4169E1] text-white  py-3 rounded-md  transition duration-300   "
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactUsPage;
