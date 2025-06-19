import React from "react";

const brandLogos = [
  "/Zomato-logo.png",
  "/POCO-Emblem.png",
  "/Oppo-Logo.wine.png",
  "/Vivo_logo_2019.svg.png",
  "/Swiggy-logo.png",
  
];

const BrandsSection = () => {
  return (
    <section className="py-12 bg-zinc-950 z-999">
      {/* Section Title */}
      <h2 className="text-2xl md:text-3xl uppercase font-bold text-center text-white mb-8">
        Trusted by Leading Brands
      </h2>

      {/* Logos Container */}
      <div className="max-w-6xl mx-auto md:h-36 md:min-w-full px-6 grid grid-cols-1 md:grid-cols-5 gap-5 items-center justify-items-center cursor-pointer justify-between">
        {brandLogos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Brand ${index}`}
            className="h-12 md:h-24 w-auto transition duration-300"
          />
        ))}
      </div>
    </section>
  );
};

export default BrandsSection;
