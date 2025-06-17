import React from "react";

const Home = () => {
  return (
    <section className="relative text-white min-h-screen px-6 md:px-20 py-24 flex flex-col justify-center items-center text-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/flagged/photo-1597175804074-f5f1336d891b?q=80&w=1976&auto=format&fit=crop')] bg-center bg-cover -z-10"></div>

      {/* Foreground Content */}
      <div className="relative z-10">
        <h1 className="text-4xl md:text-8xl font-bold mb-6">
          Grow Your Business with
          <span className="text-purple-400"> High-Converting Ads</span>
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Data-driven ads that deliver leads, sales, and real ROI for your
          business.
        </p>
        <a
          href="#"
          className="bg-purple-900 hover:bg-purple-600 text-white px-6 py-3 rounded-full transition"
        >
          Get a Free Ad Audit
        </a>
      </div>
    </section>
  );
};

export default Home;
