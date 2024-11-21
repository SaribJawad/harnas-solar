import React from "react";
import { Facebook, Twitter, Linkedin, Instagram, Mail } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  const quickLinks = [
    { path: "/", label: "Home" },
    { path: "/about_us", label: "About Us" },
    { path: "/contact_us", label: "Contact Us" },
  ];

  return (
    <footer className="bg-[#013222] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Harness Solars</h3>
            <p className="text-sm text-gray-200 mb-4">
              Transforming the world with sustainable energy solutions, one
              solar panel at a time.
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-300 transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-300 transition-colors"
              >
                <Twitter size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-300 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-300 transition-colors"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((list, index) => (
                <li key={index}>
                  <Link
                    to={`${list.path}`}
                    className="hover:text-yellow-300 transition-colors text-sm"
                  >
                    {list.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-yellow-300 transition-colors text-sm"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-yellow-300 transition-colors text-sm"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-yellow-300 transition-colors text-sm"
                >
                  Cookie Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-yellow-300 transition-colors text-sm"
                >
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-4 border-t border-[#E1E5DC] pt-6 mt-6 text-center">
            <p className="text-sm">
              © 2024 Harness Solers. All Rights Reserved.
            </p>
            <div className="flex justify-center items-center space-x-2 mt-2">
              <Mail size={16} />
              <a
                href="mailto:info@solartech.com"
                className="hover:text-yellow-300 text-sm"
              >
                info@harnesssolars.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
