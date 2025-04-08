// src/sections/ProcessSection.jsx
import React from 'react';

const ProcessSection = () => {
  return (
    <section className="bg-teal-500 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold mb-8">Our Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="p-6 bg-white text-teal-500 shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Consultation</h3>
            <p>We understand your needs and define the project goals with you.</p>
          </div>
          <div className="p-6 bg-white text-teal-500 shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Design & Development</h3>
            <p>Our expert team designs and develops solutions tailored to your business.</p>
          </div>
          <div className="p-6 bg-white text-teal-500 shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Delivery & Support</h3>
            <p>We launch the solution and provide ongoing support to ensure success.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
