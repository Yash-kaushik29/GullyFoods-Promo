import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Strengths from "./components/Strengths";
import HowItWorks from "./components/HowItWorks";
import Demo from "./components/Demo";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import SellerHero from "./components/SellerHero";

const App = () => {
  return (
    <div className="font-sans bg-white text-gray-900">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section (Customer) */}
      <section id="hero" className="w-full">
        <Hero />
      </section>

      {/* Strengths / Features */}
      <section id="strengths" className="w-full">
        <Strengths />
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="w-full">
        <HowItWorks />
      </section>

      {/* Demo / Screenshots */}
      <section id="demo" className="w-full">
        <Demo />
      </section>

      {/* Call To Action (Customer) */}
      <section id="cta" className="w-full">
        <CTA />
      </section>

      {/* Seller Hero Section */}
      <section id="seller-hero" className="w-full">
        <SellerHero />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
