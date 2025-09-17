import React from "react";
import { motion } from "framer-motion";
import {
  HiCurrencyDollar,
  HiLightningBolt,
  HiCursorClick,
  HiSearch,
  HiDeviceMobile,
  HiLocationMarker,
} from "react-icons/hi";

const strengths = [
  {
    title: "Affordable Rates",
    desc: "The only thing high here is the quality, not the rates. 😎",
    icon: HiCurrencyDollar,
  },
  {
    title: "Fast Delivery",
    desc: "Your food will be there, like, right now. 💨",
    icon: HiLightningBolt,
  },
  {
    title: "Seamless Checkout",
    desc: "We're all about that seamless checkout. Order placed, you're done. ✅",
    icon: HiCursorClick,
  },
  {
    title: "Optimized Search",
    desc: "It's like we know what you're thinking. Find it fast. ⚡️",
    icon: HiSearch,
  },
  {
    title: "Works Everywhere",
    desc: "Get your food on Android, iOS, and even your laptop. Zero stress. 😌",
    icon: HiDeviceMobile,
  },
  {
    title: "Saved Addresses",
    desc: "Send some love to your family with a few taps. It's that simple. 🎁",
    icon: HiLocationMarker,
  },
];

const Strengths = () => {
  return (
    <section
      id="strengths"
      aria-labelledby="strengths-heading"
      className="bg-gray-100 py-20 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2
          id="strengths-heading"
          className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12"
        >
          Why <span className="text-green-600">Choose Us?</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {strengths.map(({ title, desc, icon: Icon }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 flex flex-col items-center text-center"
            >
              <div className="p-4 bg-green-50 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                <Icon className="text-3xl text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-600">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Strengths;