import React, { useEffect, useState } from "react";
import { Menu, ShoppingCart, X } from "lucide-react";
import logo from "../../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../../context/Cart";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { cart } = useCart();

  console.log(cart.length);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

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
    <header className="bg-[#013222] p-3 flex items-center justify-between relative px-4 md:px-8">
      <div className="flex-shrink-0">
        <img width={45} src={logo} alt="" />
      </div>

      <div className="flex items-center gap-3 md:hidden">
        <Link to="/cart">
          <button className=" relative  p-[5px] rounded-full text-white   ">
            <ShoppingCart size={20} strokeWidth={2} />
            {cart.length >= 1 && (
              <span className="bg-[#FFD700] h-4 w-4 flex items-center justify-center top-[-4px] right-[-5px] rounded-full  text-black text-sm font-semibold absolute">
                {cart.length}
              </span>
            )}
          </button>
        </Link>
        <button onClick={toggleMenu} className="focus:outline-none">
          {isMenuOpen ? (
            <X size={24} strokeWidth={2.7} color="#F5F5F5" />
          ) : (
            <Menu size={24} strokeWidth={2.7} color="#F5F5F5" />
          )}
        </button>
      </div>

      <nav className="hidden md:flex gap-10">
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
        <nav className="z-50 md:hidden fixed inset-0 bg-[#013222] flex flex-col items-center justify-center gap-8 py-4 shadow-lg">
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
          <button className="bg-transparent border-2 transform transition-all duration-300 border-white text-white hover:bg-white text-sm px-4 py-2 rounded-full font-semibold hover:text-black">
            Get a Quote
          </button>
        </nav>
      )}

      <div className="hidden md:flex items-center gap-2">
        <button className="transform transition-all duration-300 bg-transparent text-white hover:bg-white border-2 border-white hover:text-black hover:border-white text-sm px-4 py-2 rounded-full font-semibold">
          Get a Quote
        </button>
        <Link to="/cart">
          <button className="border-2 relative border-white p-[9px] rounded-full text-white hover:bg-white hover:text-black hover:border-white">
            <ShoppingCart size={18} strokeWidth={3} />
            {cart.length >= 1 && (
              <span className="bg-[#FFD700] h-6 w-6 flex items-center justify-center top-[-8px] right-[-15px] rounded-full  text-black text-sm font-semibold absolute">
                {cart.length}
              </span>
            )}
          </button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
