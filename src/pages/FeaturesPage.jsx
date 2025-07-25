import React from 'react';
import Header from '../components/Header';
import Features from '../components/Features';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const FeaturesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="py-20">
        <Features />
      </div>
      <CTA />
      <Footer />
    </div>
  );
};

export default FeaturesPage;