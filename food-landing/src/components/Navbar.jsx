import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import AppLogo from '../assets/AppLogo.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center relative">
        <a href="#hero">
          <img src={AppLogo} alt="App Logo" className="w-36 md:w-40 h-16" />
        </a>

        <div className="hidden md:flex space-x-10 items-center">
          <a
            href="#hero"
            className="text-gray-800 text-lg font-semibold hover:text-green-600 transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="#strengths"
            className="text-gray-800 text-lg font-semibold hover:text-green-600 transition-colors duration-300"
          >
            Why Us
          </a>
          <a
            href="#demo"
            className="text-gray-800 text-lg font-semibold hover:text-green-600 transition-colors duration-300"
          >
            Demo
          </a>
          <a
            href="#cta"
            className="text-gray-800 text-lg font-semibold hover:text-green-600 transition-colors duration-300"
          >
            Get Started
          </a>
          <a
            href="https://door-dash-sigma.vercel.app/"
            className="px-6 py-3 rounded-xl bg-green-600 text-white font-bold shadow-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
          >
            Order Now
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-800 text-3xl focus:outline-none">
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full right-0 w-full bg-white shadow-xl transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center py-6 space-y-4">
          <a href="#hero" onClick={toggleMenu} className="text-gray-800 text-lg font-semibold hover:text-green-600 transition-colors duration-300">
            Home
          </a>
          <a href="#strengths" onClick={toggleMenu} className="text-gray-800 text-lg font-semibold hover:text-green-600 transition-colors duration-300">
            Why Us
          </a>
          <a href="#demo" onClick={toggleMenu} className="text-gray-800 text-lg font-semibold hover:text-green-600 transition-colors duration-300">
            Demo
          </a>
          <a href="#cta" onClick={toggleMenu} className="text-gray-800 text-lg font-semibold hover:text-green-600 transition-colors duration-300">
            Get Started
          </a>
          <a
            href="https://door-dash-sigma.vercel.app/"
            onClick={toggleMenu}
            className="w-4/5 text-center px-6 py-3 rounded-xl bg-green-600 text-white font-bold shadow-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
          >
            Order Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;