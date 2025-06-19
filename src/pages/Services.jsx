import React from "react";
import {
  Briefcase,
  Globe,
  Facebook,
  Youtube,
  TrendingUp,
  PenTool,
  Shuffle,
} from "lucide-react"; // install with: npm install lucide-react
import Footer from "../Components/Footer";

const services = [
  {
    icon: <Globe size={32} className="text-purple-700" />,
    title: "Google Ads Management",
    what: "We set up, manage, and optimize Google Ads campaigns to ensure maximum reach and ROI.",
    who: "Perfect for businesses wanting to appear on top of Google Search and across Google's ad network.",
    benefits: [
      "Higher visibility on Google",
      "Precise keyword targeting",
      "Improved conversion rates",
    ],
    pricing: "Starting at ₹15,000/month",
  },
  {
    icon: <Facebook size={32} className="text-purple-700" />,
    title: "Facebook & Instagram Ads",
    what: "We create and manage social media ad campaigns to reach your audience where they spend most of their time.",
    who: "Ideal for brands looking to engage audiences on Meta platforms with visual and video content.",
    benefits: [
      "Highly targeted ads by interest and behavior",
      "Custom audience retargeting",
      "Visual storytelling",
    ],
    pricing: "Starting at ₹12,000/month",
  },
  {
    icon: <Youtube size={32} className="text-purple-700" />,
    title: "LinkedIn & YouTube Ads",
    what: "Run high-converting campaigns on professional and video-first platforms for brand awareness and leads.",
    who: "Great for B2B brands, coaches, and content-driven businesses.",
    benefits: [
      "Reach decision-makers and professionals",
      "Leverage video-based engagement",
      "Drive targeted traffic",
    ],
    pricing: "Starting at ₹18,000/month",
  },
  {
    icon: <TrendingUp size={32} className="text-purple-700" />,
    title: "Conversion Tracking & Optimization",
    what: "We implement tracking tools to monitor and optimize user actions across platforms.",
    who: "Best for brands that want measurable results and data-driven improvements.",
    benefits: [
      "Track user journey from ad to sale",
      "Data-backed decisions",
      "Improved ROI",
    ],
    pricing: "₹5,000 one-time setup",
  },
  {
    icon: <PenTool size={32} className="text-purple-700" />,
    title: "Ad Creatives and Copywriting",
    what: "We craft compelling ad visuals and copy that grab attention and drive clicks.",
    who: "Essential for any business wanting high-performing ad creatives.",
    benefits: [
      "Scroll-stopping creatives",
      "Persuasive ad copy",
      "Consistency across channels",
    ],
    pricing: "Starting at ₹3,000/ad set",
  },
  {
    icon: <Shuffle size={32} className="text-purple-700" />,
    title: "Ad Funnel Design",
    what: "We design strategic ad funnels that guide users from awareness to conversion.",
    who: "Perfect for growth-focused businesses and product/service launches.",
    benefits: [
      "Higher conversion rates",
      "Better customer journey",
      "Automated lead nurturing",
    ],
    pricing: "Custom pricing based on scope",
  },
];

const ServiceCard = ({ icon, title, what, who, benefits, pricing }) => (
  <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between">
    <div>
      <div className="mb-3">{icon}</div>
      <h2 className="text-xl font-semibold text-purple-700 mb-2">{title}</h2>
      <p className="text-gray-700 mb-2">
        <strong>What is it?</strong> {what}
      </p>
      <p className="text-gray-700 mb-2">
        <strong>Who is it for?</strong> {who}
      </p>
      <div className="text-gray-700 mb-2">
        <strong>Benefits:</strong>
        <ul className="list-disc list-inside mt-1">
          {benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>
      {pricing && (
        <p className="text-gray-800 font-medium mt-2">
          <strong>Pricing:</strong> {pricing}
        </p>
      )}
    </div>
    <button className="mt-4 bg-purple-700 hover:bg-purple-800 text-white py-2 px-4 rounded-xl transition cursor-pointer">
      Book a Consultation
    </button>
  </div>
);

const Services = () => {
  return (
    <section className="relative py-12 px-4 sm:px-8 lg:px-20">
      <div className="absolute bg-purple-950 inset-0 -z-4 opacity-91"></div>
      <div className="absolute inset-0 -z-5 w-full h-full">
        <video
          src="/services4.mp4"
          autoPlay
          playsInline
          loop
          muted
          className="absolute inset-0 h-full w-full object-cover -z-9"
        ></video>
      </div>
      <h1 className="text-4xl font-bold text-center text-white mb-12 my-20">
        Our Ad Services
      </h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
