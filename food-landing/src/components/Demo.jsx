import React from "react";
import { motion } from "framer-motion";
import ss1 from '../assets/ss1.jpg';
import ss2 from '../assets/ss2.jpg';
import ss3 from '../assets/ss3.jpg';

const Demo = () => {
  return (
    <section
      id="demo"
      aria-labelledby="demo-heading"
      className="bg-white py-8 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left: Text and CTA */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left lg:w-1/2"
        >
          <h2
            id="demo-heading"
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
          >
            See the Vibe in Action. 💯
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
            It's giving seamless. Tap through the app and see how easy it is to
            get your faves delivered.
          </p>
          <a
            href="https://door-dash-sigma.vercel.app/"
            aria-label="Check out the app features"
            className="inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-green-500 to-green-600 text-white font-bold text-lg shadow-lg hover:shadow-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105"
          >
            Check Out the Features
          </a>
        </motion.div>

        {/* Right: Floating Phone Screens */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full lg:w-1/2 flex justify-center lg:justify-end min-h-[500px]"
        >
          {[
            {
              src: ss2,
              alt: "App Screenshot 1",
              classes:
                "transform -rotate-12 translate-x-12 translate-y-8 z-10",
            },
            {
              src: ss1,
              alt: "App Screenshot 2",
              classes: "transform rotate-0 translate-y-0 z-20",
            },
            {
              src: ss3,
              alt: "App Screenshot 3",
              classes: "transform rotate-12 -translate-x-12 translate-y-8 z-0",
            },
          ].map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.08, rotate: 0 }}
              className={`absolute w-[200px] sm:w-[220px] md:w-[250px] h-[420px] sm:h-[460px] md:h-[500px] rounded-[1rem] overflow-hidden shadow-2xl transition duration-300 ${img.classes}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Demo;
