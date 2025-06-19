import React from "react";
import { ShieldCheck, TrendingUp, Clock, Users } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck className="w-10 h-10 text-white hover:text-purple-400" />,
    title: "Trusted Expertise",
    desc: "Over 5 years of experience delivering real ROI for top brands.",
  },
  {
    icon: <TrendingUp className="w-10 h-10 text-white hover:text-purple-400" />,
    title: "Proven Growth",
    desc: "Our data-driven strategies consistently boost sales and leads.",
  },
  {
    icon: <Clock className="w-10 h-10 text-white hover:text-purple-400" />,
    title: "Fast Execution",
    desc: "Quick turnaround times without sacrificing quality results.",
  },
  {
    icon: <Users className="w-10 h-10 text-white hover:text-purple-400" />,
    title: "Client-Centric",
    desc: "Transparent communication and campaigns built for your goals.",
  },
];

function WhyChooseUs() {
  return (
    <section className="bg-zinc-950 py-24 px-6 md:px-20 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold text-purple-500 text-gray-800 mb-6 uppercase">Why Choose Us?</h2>
      <p className="text-gray-600 mb-12 text-white max-w-2xl mx-auto">
        Discover the key reasons businesses partner with us for high-impact
        advertising solutions.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 cursor-pointer">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-purple-800 rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300"
          >
            <div className="mb-4 flex justify-center text-white ">{feature.icon}</div>
            <h3 className="text-xl text-white font-semibold mb-2">{feature.title}</h3>
            <p className="text-white">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;
