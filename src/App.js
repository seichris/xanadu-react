import React from 'react';
import HeroSection from "./components/2HeroSection";
import MyComponent from "./components/3ThreeBoxSection";
import FlowSection from "./components/6FlowSection";
import BenefitsSection from "./components/3BenefitsSection";
import ProductSection from "./components/8ProductSection";
import FooterSection from "./components/10FooterSection";

function App() {
  return (
    <div className="container mx-auto px-4">
      <HeroSection />
      <MyComponent />
      <FlowSection />
      <BenefitsSection />
      <ProductSection />
      <FooterSection />
    </div>
  );
}

export default App;
