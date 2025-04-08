// src/components/AboutSection.jsx
import React from 'react';

const AboutSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl font-semibold mb-8">Your Trusted Real Estate Partner</h2>
      <p className="text-xl mb-8">
        At Gark Edge, we specialize in turning real estate dreams into reality. Whether you're a first-time buyer or selling your home, we're here to make the process smooth, transparent, and rewarding.
      </p>
      <a href="#contact" className="bg-teal-500 text-white px-6 py-3 rounded-full hover:bg-teal-600 transition duration-300">
        Speak to an Expert
      </a>
      </div>
    </section>
  );
};

export default AboutSection;
