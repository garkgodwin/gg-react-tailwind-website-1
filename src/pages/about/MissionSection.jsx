// src/sections/MissionSection.jsx
import React from 'react';

const MissionSection = () => {
  return (
    <section className="bg-teal-600 text-white py-24">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
        <p className="text-lg max-w-3xl mx-auto mb-8">
          We're here to empower every homebuyer and seller with honest advice, expert guidance, and modern digital tools — so your real estate journey is smooth from the very first step.
        </p>
        <a
          href="/contact"
          className="bg-white text-teal-600 px-6 py-3 rounded-full hover:bg-teal-700 hover:text-white transition"
        >
          Talk to an Agent
        </a>
      </div>
    </section>
  );
};

export default MissionSection;
