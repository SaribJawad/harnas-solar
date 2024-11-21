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

  const NavList = [
    { path: "/", label: "Home" },
    { path: "/about_us", label: "About Us" },
    { path: "/contact_us", label: "Contact Us" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#4169E1] p-3 flex items-center justify-between relative px-8">
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

      {isMenuOpen && (
        <nav className="z-20 md:hidden absolute  top-full left-0 right-0 bg-[#4169E1] flex flex-col items-center gap-4 py-4 shadow-lg">
          {NavList.map((list, index) => {
            return (
              <Link
                to={`${list.path}`}
                key={index}
                className={`transform transition-all duration-300 text-white hover:text-[#ffd700] font-semibold ${
                  location.pathname === list.path
                    ? "text-[#dfcb1f]"
                    : "text-[#F5F5F5]"
                }`}
              >
                {list.label}
              </Link>
            );
          })}
          <button className="bg-[#ffd700] border-2 transform transition-all duration-300 border-[#ffd700] text-[#3453b1]  hover:bg-transparent text-sm px-4 py-2 rounded-full font-semibold hover:text-[#ffd700]">
            Get a Quote
          </button>
        </nav>
      )}

      <button className="hidden md:block transform transition-all duration-300 bg-[#ffd700] hover:bg-transparent border-2 border-[#4169E1] hover:text-[#ffd700] hover:border-[#ffd700] text-black  text-sm px-4 py-2 rounded-full font-semibold">
        Get a Quote
      </button>
    </header>
  );
}

export default Header;
