import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo.png";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    // Disable scrolling when the menu is open
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup to avoid side effects
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const NavList = [
    { path: "/", label: "Home" },
    { path: "/about_us", label: "About Us" },
    { path: "/contact_us", label: "Contact Us" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#013222] p-3 flex items-center justify-between relative px-8">
      <div>
        <img width={45} src={logo} alt="" />
      </div>

      <div className="md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          {isMenuOpen ? (
            <X size={24} strokeWidth={2.7} color="#F5F5F5" />
          ) : (
            <Menu size={24} strokeWidth={2.7} color="#F5F5F5" />
          )}
        </button>
      </div>

      <nav className="hidden md:flex gap-10 ">
        {NavList.map((list, index) => {
          return (
            <Link
              to={`${list.path}`}
              key={index}
              className={`hover:text-[#ffd700] text-[#F5F5F5] font-semibold transform transition-all duration-300 ${
                location.pathname === list.path
                  ? "text-[#dfcb1f]"
                  : "text-[#F5F5F5]"
              }`}
            >
              {list.label}
            </Link>
          );
        })}
      </nav>
      {/* md:hidden fixed inset-0 bg-black z-20 flex flex-col items-center justify-center */}
      {isMenuOpen && (
        <nav className="z-50 md:hidden fixed inset-0    bg-[#013222] flex flex-col items-center justify-center gap-8 py-4 shadow-lg">
          <button
            className="absolute top-5 right-5 text-white"
            onClick={toggleMenu}
          >
            <X size={24} strokeWidth={2.7} color="#F5F5F5" />
          </button>
          {NavList.map((list, index) => {
            return (
              <Link
                to={`${list.path}`}
                key={index}
                className={`transform transition-all duration-300 text-[#F5F5F5] hover:text-[#ffd700] font-semibold ${
                  location.pathname === list.path
                    ? "text-[#dfcb1f]"
                    : "text-[#F5F5F5]"
                }`}
              >
                {list.label}
              </Link>
            );
          })}
          <button className="bg-transparent border-2 transform transition-all duration-300 border-white text-white  hover:bg-white text-sm px-4 py-2 rounded-full font-semibold hover:text-black ">
            Get a Quote
          </button>
        </nav>
      )}

      <button className="hidden md:block transform transition-all duration-300 bg-transparent text-white hover:bg-white border-2 border-white hover:text-black hover:border-white  text-sm px-4 py-2 rounded-full font-semibold">
        Get a Quote
      </button>
    </header>
  );
}

export default Header;
