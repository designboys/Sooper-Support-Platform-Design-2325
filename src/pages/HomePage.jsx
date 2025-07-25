import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import SocialProof from '../components/SocialProof';
import Features from '../components/Features';
import Integrations from '../components/Integrations';
import IntegrationsGrid from '../components/IntegrationsGrid';
import Pricing from '../components/Pricing';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <SocialProof />
      <Features />
      <Integrations />
      <IntegrationsGrid />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
};

export default HomePage;