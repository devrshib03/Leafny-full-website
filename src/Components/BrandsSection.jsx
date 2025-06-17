import React from "react";

const brandLogos = [
  "/AsusTek-black-logo.png",
  "/Logo_of_Infinix.png",
  "/nike.png",
  "/Swiggy-logo.png",
  "/Zomato-logo.png",
];

const BrandsSection = () => {
  return (
    <section className="bg-white py-12 z-999">
      {/* Section Title */}
      <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-800 mb-8">
        Trusted by Leading Brands
      </h2>

      {/* Logos Container */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-5 gap-6 items-center justify-items-center">
        {brandLogos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Brand ${index}`}
            className="h-12 md:h-16 grayscale hover:grayscale-0 transition duration-300"
          />
        ))}
      </div>
    </section>
  );
};

export default BrandsSection;
