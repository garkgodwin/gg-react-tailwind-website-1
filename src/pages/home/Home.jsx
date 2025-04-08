import React from 'react'
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import AboutSection from './AboutSection';
import TestimonialSection from './TestimonialSection';
import PricingSection from './PricingSection';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* About Section */}
      <AboutSection />

      {/* Testimonial Section */}
      <TestimonialSection />

      {/* Pricing Section */}
      <PricingSection />
    </>
  );
}

export default Home