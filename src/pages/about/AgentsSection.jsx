import React from 'react';
import placeholder from '../../assets/placeholder.png';

const agents = [
  {
    name: 'John Doe',
    title: 'Senior Agent - Downtown Austin',
    description: 'Specialist in urban properties and investment homes.',
  },
  {
    name: 'Jane Smith',
    title: 'Agent - Family Homes Specialist',
    description: 'Helping families find their perfect home in the suburbs.',
  },
  {
    name: 'Sarah Lee',
    title: 'Luxury Property Consultant',
    description: 'Focused on high-end listings and private sales.',
  },
];

const AgentsSection = () => {
  return (
    <section className="bg-gray-100 py-24">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Meet Our Agents</h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-16">
          Our licensed agents know your market and care about your goals. Whether you're buying your first home or selling a luxury property, we’re here to guide you every step of the way.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {agents.map((agent, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition text-center">
              <img src={placeholder} alt={agent.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900">{agent.name}</h3>
              <p className="text-sm text-teal-600 font-medium mb-2">{agent.title}</p>
              <p className="text-sm text-gray-600">{agent.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgentsSection;
