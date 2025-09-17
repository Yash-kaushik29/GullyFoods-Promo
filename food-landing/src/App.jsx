import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Strengths from "./components/Strengths";
import HowItWorks from "./components/HowItWorks";
import Demo from "./components/Demo";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import SellerHero from "./components/SellerHero"; // Make sure you have this component file

const App = () => {
  return (
    <div className="font-sans">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section (Customer) */}
      <div id="hero">
        <Hero />
      </div>

      {/* Strengths / Features */}
      <div id="strengths">
        <Strengths />
      </div>
      
      {/* How It Works */}
      <div id="how-it-works">
        <HowItWorks />
      </div>

      {/* Demo / Screenshots */}
      <div id="demo">
        <Demo />
      </div>

      {/* Call To Action (Customer) */}
      <div id="cta">
        <CTA />
      </div>

      {/* Seller Hero Section */}
      <div id="seller-hero">
        <SellerHero />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;