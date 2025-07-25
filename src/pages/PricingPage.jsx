import React from 'react';
import Header from '../components/Header';
import Pricing from '../components/Pricing';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="py-20">
        <Pricing />
      </div>
      <CTA />
      <Footer />
    </div>
  );
};

export default PricingPage;