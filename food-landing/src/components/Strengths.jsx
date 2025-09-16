import React from "react";
// You will need to install react-icons to use these.
// For example: npm install react-icons
import { 
  HiCurrencyDollar, 
  HiLightningBolt, 
  HiCursorClick, 
  HiSearch, 
  HiDeviceMobile, 
  HiLocationMarker 
} from "react-icons/hi";

const strengths = [
  {
    title: "Affordable Rates",
    desc: "The only thing high here is the quality, not the rates. 😎",
    icon: <HiCurrencyDollar className="text-5xl text-green-600 mb-4" />,
  },
  {
    title: "Fast Delivery",
    desc: "Your food will be there, like, right now. 💨",
    icon: <HiLightningBolt className="text-5xl text-green-600 mb-4" />,
  },
  // The only phone call you’ll get is from your bestie. Order flow is straight fire. 🔥
  {
    title: "Seamless Checkout",
    desc: "We're all about that seamless checkout. Order placed, you're done. ✅",
    icon: <HiCursorClick className="text-5xl text-green-600 mb-4" />,
  },
  {
    title: "Optimized Search",
    desc: "It's like we know what you're thinking. Find it fast. ⚡️",
    icon: <HiSearch className="text-5xl text-green-600 mb-4" />,
  },
  {
    title: "Works Everywhere",
    desc: "Get your food on Android, iOS, and even your laptop. Zero stress. 😌",
    icon: <HiDeviceMobile className="text-5xl text-green-600 mb-4" />,
  },
  {
    title: "Saved Addresses",
    desc: "Send some love to your family with a few taps. It's that simple. 🎁",
    icon: <HiLocationMarker className="text-5xl text-green-600 mb-4" />,
  },
];

const Strengths = () => {
  return (
    <section className="bg-gray-100 py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12">
          Why <span className="text-green-600">Choose Us?</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {strengths.map((s, i) => (
            <div
              key={i}
              className="p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 flex flex-col items-center text-center animate-fade-in-up"
            >
              {s.icon}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{s.title}</h3>
              <p className="text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Strengths;