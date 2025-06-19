import React from "react";

function Footer() {
  return (
    <footer className="bg-purple-700 text-white py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} AdAgency. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#home" className="hover:text-purple-200 transition">Home</a>
          <a href="#services" className="hover:text-purple-200 transition">Services</a>
          <a href="#about" className="hover:text-purple-200 transition">About</a>
          <a href="#contact" className="hover:text-purple-200 transition">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
