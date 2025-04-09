import React from 'react'
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import AboutSection from './AboutSection';
import TestimonialSection from './TestimonialSection';
import PricingSection from './PricingSection';
import Page from '../../container/Page'

const Home = () => {
  return (
    <Page>
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
    </Page>
  );
}

export default Home