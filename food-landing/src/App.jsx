import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Strengths from "./components/Strengths";
import Demo from "./components/Demo";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="font-sans">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div id="hero">
        <Hero />
      </div>

      {/* Strengths / Features */}
      <div id="strengths">
        <Strengths />
      </div>

      {/* Demo / Screenshots */}
      <div id="demo">
        <Demo />
      </div>

      {/* Call To Action */}
      <div id="cta">
        <CTA />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
