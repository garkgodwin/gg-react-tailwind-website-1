// src/components/FeaturesSection.jsx
import React from 'react';

const FeaturesSection = () => {
  return (
    <section className="bg-gray-100 py-24">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">
          Why Buyers and Sellers Choose <span className="text-teal-600">Gark Edge</span>
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
  
        <a
          href="#contact"
          className="inline-block bg-teal-600 text-white px-8 py-3 rounded-full hover:bg-teal-700 transition font-medium"
        >
          Connect with an Agent
        </a>
      </div>
    </section>
  );
};

export default FeaturesSection;
