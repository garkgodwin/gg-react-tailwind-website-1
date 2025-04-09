// src/components/HeroSection.jsx
import React from 'react';
import Section from './../../container/Section';
import Heading from './../../components/Heading';
import Body from './../../components/Body';
import Button from './../../components/Button';

const HeroSection = () => {
  return (
    <Section>
      <div className="container mx-auto px-6 text-center">
        <Heading type="h1">
          Your Perfect Home Is Just a Click Away
        </Heading>
        <Body>
          Explore exclusive listings tailored to your lifestyle. Whether you're buying or selling, Gark Edge makes the process seamless and successful.
        </Body>
        <div className='flex justify-center'>
          <Button type="link" to="/listings">
            Start Your Search
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;
