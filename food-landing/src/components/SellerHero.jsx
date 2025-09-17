import React from "react";
import { motion } from "framer-motion";

const partners = [
  { id: 1, logo: "https://th.bing.com/th/id/OIP.kcJk6H4gB-EKQWTyAVCzMAHaHa", name: "McDonalds" },
  { id: 2, logo: "https://th.bing.com/th/id/OIP.fFb-n1CHq4BLPYYq0Bxx9AHaHa", name: "Dominos" },
  { id: 3, logo: "https://th.bing.com/th/id/OIP.uo1HgRkLPluFv7sM7E0tGwHaHa", name: "Haldiram" },
  { id: 4, logo: "https://th.bing.com/th/id/OIP.pzOrYtAX0Lx16Hq9DuZqZwHaEK", name: "Starbucks" },
  { id: 5, logo: "https://th.bing.com/th/id/OIP.prSlgqQ49bVW2C1Wn7T8OwAAAA", name: "Nazeer" },
  { id: 6, logo: "https://th.bing.com/th/id/OIP.17aEABFauzA8MzXNevATYwHaEi", name: "Burger King" },
  { id: 7, logo: "https://th.bing.com/th/id/OIP.JyzuVc5d2HcPWqQmfPPURQHaHa", name: "Pizza Hut" },
  { id: 8, logo: "https://th.bing.com/th/id/OIP.SAYRNiqHn3V5y0gdceCrnQHaEc", name: "Bikanervala" },
];

// Floating animation variant
const floatAnimation = {
  initial: { y: 0 },
  animate: {
    y: [0, -16, 0, 16, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    }
  }
};

const SellerHero = () => (
  <section className="relative bg-white py-24 px-6 md:px-12 overflow-hidden">
    <div className="relative max-w-6xl mx-auto flex flex-col items-center gap-16">
      {/* Main heading */}
      <motion.h2
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="text-center text-green-600 font-black text-5xl md:text-6xl mb-2 z-10"
      >
        Trusted by <span className="text-gray-900">14+</span>
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, scale: 0.88 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="text-center text-gray-800 font-bold text-4xl md:text-5xl mb-8 z-10"
      >
        Partners—from Local Shops to Cloud Kitchens
      </motion.div>

      {/* Partner logo cards with floating animation and names */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 z-10">
        {partners.map((partner, i) => (
          <motion.div
            key={partner.id}
            initial="initial"
            animate="animate"
            variants={floatAnimation}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center transition-transform hover:-translate-y-2 hover:shadow-xl duration-300 border border-green-100"
            viewport={{ once: true }}
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="w-14 h-14 md:w-20 md:h-20 object-cover rounded-full mb-2"
              loading="lazy"
            />
            <span className="text-base font-semibold text-gray-700">{partner.name}</span>
          </motion.div>
        ))}
      </div>

      {/* Subtext */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: partners.length * 0.1 }}
        className="text-lg text-gray-600 max-w-2xl mx-auto text-center mt-10 z-10 bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100"
      >
        <span className="font-bold text-green-700">Whether you’re a legend on your street or serving up a feast from a ghost kitchen,</span>
        <br />
        our platform helps you thrive with tools designed for food entrepreneurs.
      </motion.div>
    </div>
  </section>
);

export default SellerHero;
