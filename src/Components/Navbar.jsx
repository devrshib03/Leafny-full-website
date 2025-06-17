import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full z-999">
      <div className="max-w-7xl mx-auto px-2 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl text-white font-bold">
          AdWebsite
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 font-medium">
          <Link to="/services" className="text-white hover:text-purple-400 transition cursor-pointer">
            Services
          </Link>
          <Link to="/case-studies" className="text-white hover:text-purple-400 transition">
            Case Studies
          </Link>
          <Link to="/pricing" className="text-white hover:text-purple-400 transition">
            Pricing
          </Link>
          <Link to="/about" className="text-white hover:text-purple-400 transition">
            About
          </Link>
          <Link to="/contact" className="text-white hover:text-purple-400 transition">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-80 px-6 pb-4">
          <Link
            to="/services"
            className="block py-2 text-white hover:text-indigo-400"
          >
            Services
          </Link>
          <Link
            to="/case-studies"
            className="block py-2 text-white hover:text-indigo-400"
          >
            Case Studies
          </Link>
          <Link
            to="/pricing"
            className="block py-2 text-white hover:text-indigo-400"
          >
            Pricing
          </Link>
          <Link
            to="/about"
            className="block py-2 text-white hover:text-indigo-400"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block py-2 text-white hover:text-indigo-400"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
