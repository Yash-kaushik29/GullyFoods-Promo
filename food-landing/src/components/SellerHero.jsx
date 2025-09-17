import React from 'react';
import { motion } from 'framer-motion';

const SellerHero = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Side: Animated Shop Count */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center lg:text-left lg:w-1/2"
        >
          <h2 className="text-8xl md:text-9xl font-extrabold text-green-600 mb-2">14+ <span className='text-gray-800'>Partners</span></h2>
          <p className="text-lg md:text-xl font-semibold text-gray-800">and still counting</p>
        </motion.div>

        {/* Right Side: Gen Z-Friendly Text */}
        <div className="text-center lg:text-left lg:w-1/2">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            From the Corner Shop to the Cloud Kitchen, We Got You.
          </h3>
          <p className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
            Whether you're a local legend or serving up a whole vibe from a ghost kitchen, our platform is built for you to thrive.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SellerHero;