// src/sections/MissionSection.jsx
import React from 'react';
import { NavLink } from 'react-router';
import Section from '../../container/Section';
import Heading from '../../components/Heading';
import Body from '../../components/Body';
import Button from '../../components/Button';

const MissionSection = () => {
  return (
    <Section variant='tertiary' id="mission">
      <div className="container mx-auto px-6 text-center">
        <Heading>
          Our Mission
        </Heading>
        <Body>
          We're here to empower every homebuyer and seller with honest advice, expert guidance, and modern digital tools — so your real estate journey is smooth from the very first step.
        </Body>
        <div className='flex justify-center'>
          <Button variant="secondary" type="link" to="/contact">
            Talk to an Agent
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default MissionSection;
