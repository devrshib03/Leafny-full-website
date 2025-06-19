import React from "react";
import Navbar from "../Components/Navbar";
import BrandsSection from "../Components/BrandsSection";
import WhatWeDo from "../Components/WhatWeDo";
import Hero from "../Components/Hero.JSX";
import WhyChooseUs from "../Components/WhyChooseUs";
import Testimonials from "../Components/Testimonials";
import CallToAction from "../Components/CallToAction";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <BrandsSection />
      <WhatWeDo />
      <WhyChooseUs />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  );
};

export default Home;
