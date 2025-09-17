import React from "react";
import { motion } from "framer-motion";
import { HiOutlineSearch, HiOutlineShoppingCart, HiOutlineEmojiHappy } from "react-icons/hi";

// Data for each step
const steps = [
  {
    id: 1,
    title: "Find Your Fave",
    desc: "Search for what you're craving or browse a whole vibe of restaurants and grocery stores near you.",
    icon: <HiOutlineSearch className="text-4xl text-green-600 mb-4" />,
  },
  {
    id: 2,
    title: "Tap to Order",
    desc: "Your cart is good to go. Securely pay with a few taps and your order is sent, no cap.",
    icon: <HiOutlineShoppingCart className="text-4xl text-green-600 mb-4" />,
  },
  {
    id: 3,
    title: "Delivered Fast",
    desc: "Pull up with the goods! Our delivery team is on it, bringing your order straight to you.",
    icon: <HiOutlineEmojiHappy className="text-4xl text-green-600 mb-4" />,
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="bg-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12">
          How It <span className="text-green-600">Works</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="flex flex-col items-center text-center p-8 bg-gray-50 rounded-xl shadow-md"
            >
              <div className="p-4 bg-green-100 rounded-full mb-4">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;