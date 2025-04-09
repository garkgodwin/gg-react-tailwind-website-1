// src/sections/TimelineSection.jsx
import React from 'react';
import Section from '../../container/Section';
import Heading from './../../components/Heading';
import Body from './../../components/Body';

const TimelineSection = () => {
  return (
    <Section>
    <div className="container mx-auto px-6 text-center">
      <Heading>
        Our Journey
      </Heading>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[
          { year: '2021', text: 'Gark Edge was founded with a vision to simplify real estate for everyone.' },
          { year: '2022', text: 'We helped 1,000+ clients buy and sell homes with ease.' },
          { year: '2023', text: 'Introduced smart tools and expanded into 12+ new markets.' },
        ].map((milestone, idx) => (
          <div key={idx} className="bg-gray-100 p-8 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-3 text-(--color-primary)">{milestone.year}</h3>
            <p className="text-gray-700">{milestone.text}</p>
          </div>
        ))}
      </div>
    </div>
  </Section>
  );
};

export default TimelineSection;
