// src/sections/AboutSection.jsx
import React from 'react';

const AboutSection = () => {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">About Gark Edge</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
          Gark Edge is built on a simple idea: real estate should be stress-free. We connect buyers and sellers with the tools, expertise, and support to make homeownership easier than ever.
        </p>
        <a
          href="#mission"
          className="bg-teal-600 text-white px-6 py-3 rounded-full hover:bg-teal-700 transition"
        >
          Learn More About Our Mission
        </a>
      </div>
    </section>
  );
};

export default AboutSection;
