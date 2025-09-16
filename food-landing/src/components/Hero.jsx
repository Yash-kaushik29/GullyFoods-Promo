import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[80vh] bg-gradient-to-r from-white via-gray-50 to-white overflow-hidden flex items-center justify-center p-4 pt-24 lg:pt-16">
      <div className="absolute inset-0 bg-dots-grid opacity-10"></div>
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 animate-fade-in-down mb-4">
            Fresh Food & Groceries, Delivered Fast
            <span className="text-green-500">🚀</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 animate-fade-in mb-8 max-w-xl mx-auto lg:mx-0">
            Craving that spot or need a restock? We got you. Order up and we'll pull up with the goods, fast. It's a whole vibe.
          </p>
          <a
            href="https://door-dash-sigma.vercel.app/"
            className="px-8 py-3 bg-green-500 text-white rounded-xl font-bold text-lg shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
          >
            Start Ordering
          </a>
        </div>

        <div className="relative w-full lg:w-1/2 flex justify-center items-center h-96 lg:h-[500px]">
          <div className="absolute w-[250px] h-[350px] bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:-translate-y-4 transition-transform duration-300 animate-card-1 z-20">
            <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38" alt="Delicious burger" className="w-full h-full object-cover" />
          </div>
          <div className="absolute w-[250px] h-[350px] bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:-translate-y-4 transition-transform duration-300 animate-card-2 z-10">
            <img src="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGdyb2Nlcmllc3xlbnwwfHwwfHx8MA%3D%3D" alt="Fresh salad" className="w-full h-full object-cover" />
          </div>
          <div className="absolute w-[250px] h-[350px] bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:-translate-y-4 transition-transform duration-300 animate-card-3">
            <img src="https://images.unsplash.com/photo-1581264669997-3f222f331aaa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fGdyb2Nlcnl8ZW58MHx8MHx8fDA%3D" alt="Tacos" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;