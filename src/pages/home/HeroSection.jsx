// src/components/HeroSection.jsx
import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative bg-white text-black py-24">
      <div className="container mx-auto px-6 text-center">
      <h1 className="text-5xl font-semibold leading-tight mb-4">
        Your Perfect Home Is Just a Click Away
      </h1>
      <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
        Explore exclusive listings tailored to your lifestyle. Whether you're buying or selling, Gark Edge makes the process seamless and successful.
      </p>
      <a
        href="#listings"
        className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition duration-300"
      >
        Start Your Search
      </a>
      </div>
    </section>
  );
};

export default HeroSection;
