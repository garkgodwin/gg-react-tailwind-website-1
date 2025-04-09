// src/sections/AboutSection.jsx
import React from 'react';
import Section from '../../container/Section';
import Heading from '../../components/Heading';
import Body from '../../components/Body'
import Button from '../../components/Button';

const AboutSection = () => {
  return (
    <Section variant="primary">
      <div className="container mx-auto px-6 text-center">
        <Heading variant="primary" type="h2">About Gark Edge</Heading>
        <Body variant="primary">
          Gark Edge is built on a simple idea: real estate should be stress-free. We connect buyers and sellers with the tools, expertise, and support to make homeownership easier than ever.
        </Body>
        <div className='flex justify-center'>
          <Button variant="primary" type="link" to="#mission">
            Learn More About Our Mission
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
