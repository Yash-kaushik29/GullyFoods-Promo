import React from "react";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section
      id="cta"
      className="relative bg-gray-100 py-24 px-6 md:px-12 text-center overflow-hidden"
    >
      {/* Decorative background glow is removed for a cleaner look */}

      <div className="relative z-10 flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6"
        >
          Ready to satisfy your cravings? 🍔
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-700 mb-10 max-w-2xl"
        >
          That craving isn&apos;t gonna satisfy itself. Get your faves with{" "}
          <span className="font-semibold text-green-600">lowkey fees</span> and{" "}
          <span className="font-semibold text-green-600">zero stress</span>. We got you.
        </motion.p>

        <motion.a
          href="https://door-dash-sigma.vercel.app/"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="inline-block px-10 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
        >
          Start Ordering Now
        </motion.a>
      </div>
    </section>
  );
};

export default CTA;