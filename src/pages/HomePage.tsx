import React from 'react';
import Hero from '../components/home/Hero';
import HowItWorks from '../components/home/HowItWorks';

import CallToActionBanner from '../components/home/CallToActionBanner';


const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen pt-[70px]">
      <Hero />
      <HowItWorks />
      <CallToActionBanner />
      
    </div>
  );
};

export default HomePage;