import React from "react";

function CallToAction() {
  return (
    <section className="relative text-white py-20 px-6 md:px-20 text-center overflow-hidden">
      {/* Background overlay */}
      <div className="w-full h-full absolute inset-0 bg-purple-950 opacity-20"></div>
      <div className="absolute inset-0 -z-10">
        <img src="/skyrocket.gif" alt="" className="sticky w-full object-cover"/>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Skyrocket Your Leads?
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Let’s discuss how Leafny can help grow your business through
          data-driven advertising strategies.
        </p>
        <a
          href="#contact" // change to external URL if needed
          className="inline-block bg-white text-purple-900 font-semibold px-8 py-4 rounded-full hover:bg-purple-600 hover:text-white transition duration-300"
        >
          Book Your Strategy Call
        </a>
      </div>
    </section>
  );
}

export default CallToAction;
