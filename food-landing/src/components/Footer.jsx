import React from "react";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold text-green-600 mb-2">GullyFoods</h3>
          <p className="text-gray-600">
            Delicious food, lightning-fast delivery, zero hassle.
          </p>
        </div>

        <div className="flex space-x-6 text-gray-700">
          <a href="#hero" className="hover:text-green-600 transition">Home</a>
          <a href="#strengths" className="hover:text-green-600 transition">Why Us</a>
          <a href="#demo" className="hover:text-green-600 transition">Demo</a>
          <a href="#cta" className="hover:text-green-600 transition">Order Now</a>
        </div>

        <div className="flex space-x-4 text-gray-700">
          <a href="#" className="hover:text-pink-500 transition"><FaInstagram size={20} /></a>
          <a href="#" className="hover:text-sky-400 transition"><FaTwitter size={20} /></a>
          <a href="#" className="hover:text-blue-600 transition"><FaFacebookF size={20} /></a>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} GullyFoods. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;