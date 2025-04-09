// src/components/FeaturesSection.jsx
import React from 'react';
import Section from '../../container/Section';
import Button from './../../components/Button';

const FeaturesSection = () => {
  return (
    <Section variant='secondary'>
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">
          Why Buyers and Sellers Choose <span className="text-(--color-primary)">Gark Edge</span>
        </h2>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {/* Feature 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              🏡 Tailored Property Matches
            </h3>
            <p className="text-gray-600">
              Get listings that match your lifestyle, location, and budget — curated by local experts.
            </p>
          </div>
  
          {/* Feature 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              👩‍💼 Local Expert Agents
            </h3>
            <p className="text-gray-600">
              Work with top-rated agents who know your neighborhood and market inside and out.
            </p>
          </div>
  
          {/* Feature 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              🤝 End-to-End Support
            </h3>
            <p className="text-gray-600">
              From first tour to final paperwork — we’ve got you covered at every step.
            </p>
          </div>
        </div>
  
        <div className='flex justify-center'>
          <Button variant='primary' type="link" to="/contact">
            Connect with an Agent
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default FeaturesSection;
