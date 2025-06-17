import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
// import Services from "./pages/Services";
// import CaseStudies from "./pages/CaseStudies";
// import About from "./pages/About";
// import Blog from "./pages/Blog";
// import Pricing from "./pages/Pricing";
// import Contact from "./pages/Contact";
import Navbar from "./Components/Navbar";
// import Footer from "./components/Footer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/services" element={<Services />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      {/* <Footer /> */}
    </Router>
  </React.StrictMode>
);
