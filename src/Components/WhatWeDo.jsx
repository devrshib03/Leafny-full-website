import React from "react";
import { FaGoogle, FaFacebook, FaPenNib, FaSitemap } from "react-icons/fa";

const WhatWeDo = () => {
  return (
    <section className="bg-white text-gray-800 py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">What We Do</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Service 1 */}
          <div className="p-6 bg-gray-100 rounded-xl shadow-md hover:shadow-xl transition">
            <FaGoogle className="text-4xl text-purple-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Google Ads</h3>
            <p>
              We help you reach high-intent customers using targeted Google ad
              campaigns.
            </p>
          </div>

          {/* Service 2 */}
          <div className="p-6 bg-gray-100 rounded-xl shadow-md hover:shadow-xl transition">
            <FaFacebook className="text-4xl text-purple-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Meta Ads</h3>
            <p>
              Run high-converting ads on Facebook & Instagram to generate leads
              and sales.
            </p>
          </div>

          {/* Service 3 */}
          <div className="p-6 bg-gray-100 rounded-xl shadow-md hover:shadow-xl transition">
            <FaPenNib className="text-4xl text-purple-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Ad Copywriting</h3>
            <p>
              Powerful copy that stops scrolling and gets clicks, leads, and
              conversions.
            </p>
          </div>

          {/* Service 4 */}
          <div className="p-6 bg-gray-100 rounded-xl shadow-md hover:shadow-xl transition">
            <FaSitemap className="text-4xl text-purple-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Funnel Design</h3>
            <p>
              We build full ad funnels that turn cold visitors into loyal
              customers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatWeDo;