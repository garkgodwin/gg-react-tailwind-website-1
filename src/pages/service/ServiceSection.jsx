// src/sections/ServiceSection.jsx
import React from 'react';

const ServiceSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="p-6 bg-gray-100 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Web Development</h3>
            <p>We build responsive, high-performance websites that scale with your business needs.</p>
          </div>
          <div className="p-6 bg-gray-100 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Mobile App Development</h3>
            <p>Our mobile apps deliver seamless user experiences on both iOS and Android platforms.</p>
          </div>
          <div className="p-6 bg-gray-100 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-4">UI/UX Design</h3>
            <p>We create intuitive, user-centered designs that boost user engagement and satisfaction.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
