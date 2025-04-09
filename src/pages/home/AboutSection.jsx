// src/components/AboutSection.jsx
import React from 'react';
import { NavLink } from 'react-router';
import Section from './../../container/Section';
import Heading from './../../components/Heading'
import Body from './../../components/Body'
import Button from './../../components/Button';

const AboutSection = () => {
  return (
    <Section>
      <div className="container mx-auto px-6 text-center">
        <Heading>
          Your Trusted Real Estate Partner
        </Heading>
        <Body>
          At Gark Edge, we specialize in turning real estate dreams into reality. Whether you're a first-time buyer or selling your home, we're here to make the process smooth, transparent, and rewarding.
        </Body>
        <div className='flex justify-center'>
          <Button type="link" to="/contact">
            Speak to an Expert
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
