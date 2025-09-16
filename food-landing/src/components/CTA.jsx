import React from "react";

const CTA = () => {
  return (
    <section
      id="cta"
      className="relative bg-gray-50 py-24 px-6 md:px-12 text-center overflow-hidden"
    >
      {" "}
      <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-600/10 to-transparent"></div>
      <div className="relative z-10 flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 animate-fade-in-down">
          Ready to satisfy your cravings? 🍔
        </h2>

        <p className="text-lg text-gray-700 mb-10 max-w-2xl animate-fade-in-up">
          That craving isn't gonna satisfy itself. Get your faves with lowkey
          fees and zero stress. We got you.
        </p>

        <a
          href="https://door-dash-sigma.vercel.app/"
          className="inline-block px-10 py-4 bg-green-600 text-white font-bold text-lg rounded-xl shadow-xl hover:bg-green-700 transform hover:scale-105 transition-all duration-300 animate-fade-in-up"
        >
          Start Ordering Now
        </a>
      </div>
    </section>
  );
};

export default CTA;
