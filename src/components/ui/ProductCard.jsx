import { ArrowUpRight, ShoppingCart } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/Cart";
import toast, { Toaster } from "react-hot-toast";

function ProductCard({ solar }) {
  const navigate = useNavigate();
  const { cart, dispatch } = useCart();

  const isInCart = cart.some((item) => item.id === solar.id);

  const handleAddToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        id: solar.id,
        solarType: solar.solarType,
        solar: solar.solar,
        price: solar.price,
        solarImage: solar.solarImage,
      },
    });
    if (isInCart) {
      toast.success("Added another item to cart", {
        duration: 2000,
        position: "bottom-right",
        style: {
          background: "#21721f",
          color: "#fff",
          padding: "10px",
          borderRadius: "10px",
        },
        icon: "🔋",
      });
    } else {
      toast.success("Added to cart", {
        duration: 2000,
        position: "bottom-right",
        style: {
          background: "#21721f",
          color: "#fff",
          padding: "10px",
          borderRadius: "10px",
        },
        icon: "⚡",
      });
    }
  };

  return (
    <div className="  bg-white flex flex-col justify-between  lg:p-4 p-2  transform  transition-all duration-300 hover:scale-[1.03] rounded-md hover:rounded-none">
      <div className="flex flex-col gap-1 ">
        <h2 className="text-xs sm:text-sm text-center text-[#4169E1]">
          {solar.solarType}
        </h2>
        <h3 className="lg:text-sm text-xs font-semibold">{solar.solar}</h3>
      </div>
      <img className="w-full" src={solar.solarImage} alt="" />
      <div className=" flex items-center justify-between ">
        <span className="sm:text-md text-sm text-red-700 font-semibold">
          ${solar.price}.00
        </span>
        <div className="flex gap-2">
          <button
            onClick={() => navigate("/model-display")}
            className="lg:block hidden border border-black rounded-full px-2 py-1 text-xs transform transition-all duration-300 hover:bg-[#046200] hover:border-[#046200] hover:text-white"
          >
            View model
          </button>

          <button
            onClick={() => navigate("/model-display")}
            className="lg:hidden block border border-black rounded-full p-1  text-xs transform transition-all duration-300 hover:bg-[#046200] hover:border-[#046200] hover:text-white"
          >
            <ArrowUpRight size={15} />
          </button>
          <button
            onClick={handleAddToCart}
            className={` rounded-full p-1 border  text-xs transform transition-all duration-300  
        ${
          isInCart
            ? "bg-[#046200] border-[#046200] hover:text-black hover:bg-transparent hover:border-black text-white "
            : "border-black text-black hover:bg-[#046200] hover:border-[#046200] hover:text-white"
        }`}
          >
            <ShoppingCart size={15} className="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
