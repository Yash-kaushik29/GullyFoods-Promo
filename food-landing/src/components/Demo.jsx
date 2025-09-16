import React from 'react';

const Demo = () => {
  return (
    <section id="demo" className="bg-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left: Text and CTA */}
        <div className="text-center lg:text-left lg:w-1/2 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            See the Vibe in Action. 💯
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
            It's giving seamless. Tap through the app and see how easy it is to get your faves delivered.
          </p>
          <a
            href="https://door-dash-sigma.vercel.app/"
            className="px-8 py-4 rounded-xl bg-green-600 text-white font-bold text-lg shadow-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
          >
            Check Out the Features
          </a>
        </div>

        <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-end min-h-[500px] animate-float">
          <div className="absolute w-[250px] h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl transform -rotate-12 translate-x-12 translate-y-8 hover:z-30 hover:scale-105 transition duration-300">
            <img 
              src="https://images.unsplash.com/photo-1757353071874-38ba5deb546e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8" 
              alt="App Screenshot 1" 
              className="w-full h-full object-cover" 
            />
          </div>

          <div className="absolute w-[250px] h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl transform rotate-0 translate-y-0 z-20 hover:z-30 hover:scale-105 transition duration-300">
            <img 
              src="https://images.unsplash.com/photo-1757659444738-d8173d9d7c62?q=80&w=683&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="App Screenshot 2" 
              className="w-full h-full object-cover" 
            />
          </div>

          <div className="absolute w-[250px] h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl transform rotate-12 -translate-x-12 translate-y-8 z-10 hover:z-30 hover:scale-105 transition duration-300">
            <img 
              src="https://images.unsplash.com/photo-1757743066485-e7acb3d7af7a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="App Screenshot 3" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;