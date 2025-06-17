import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./Components/Navbar";
import BrandsSection from "./Components/BrandsSection";
import WhatWeDo from "./Components/WhatWeDo";

function App() {
  return (
    <>
      <BrandsSection />
      <WhatWeDo />
      <Navbar />
      <Home />
    </>
  );
}

export default App;
