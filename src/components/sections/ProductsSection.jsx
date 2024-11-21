import React from "react";
import ProductCard from "../ui/ProductCard";

function ProductsSection() {
  const products = [
    {
      solarType: "MONOCRYSTALLINE",
      solar: "Solar Panel 180 Watts Mono Crystalline",
      solarImage:
        "https://emaratisolar.com/wp-content/uploads/2023/12/Fsolar-Osun-180-W-1-300x300.png",
      price: 500,
    },
    {
      solarType: "LITHIUM ION ",
      solar: "Fsolar 500AH 48V 25KW Lithium Battery LiFePO4 ",
      solarImage:
        "https://emaratisolar.com/wp-content/uploads/2024/08/GGESS-1-300x300.png",
      price: 700,
    },
    {
      solarType: "LITHIUM ION ",
      solar: "Fsolar 200AH 48V 10KW Lithium Battery LiFePO4 ",
      solarImage:
        "https://emaratisolar.com/wp-content/uploads/2024/08/GGESS-1-300x300.png",
      price: 850,
    },
    {
      solarType: "LITHIUM ION ",
      solar: "FSolar Lithium Battery 300AH 12.8V LiFePO4",
      solarImage:
        "https://emaratisolar.com/wp-content/uploads/2024/08/Fsolar-Lithium-300-300x300.png",
      price: 999,
    },
  ];

  return (
    <section className=" bg-[#E1E5DC] w-full xl:p-16 lg:p-12 md:p-10   flex flex-col items-center gap-10 py-5">
      <div className="w-full flex justify-center ">
        <h2 className="font-semibold xl:text-5xl lg:text-4xl md:text-3xl text-[22px]  text-[#046200]">
          Our Solar Products
        </h2>
      </div>

      <div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 
                justify-center gap-4 md:gap-4 lg:gap-8 w-full p-4 "
      >
        {products.map((solar, index) => {
          return <ProductCard key={index} solar={solar} />;
        })}
      </div>
    </section>
  );
}

export default ProductsSection;
