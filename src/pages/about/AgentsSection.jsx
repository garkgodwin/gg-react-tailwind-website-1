import React from 'react';
import placeholder from '../../assets/placeholder.png';
import Section from './../../container/Section';
import Heading from './../../components/Heading';
import Body from './../../components/Body';

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
    <Section variant="secondary">
      <div className="container mx-auto px-6 text-center">
        <Heading varint="primary" type="h2">
          Meet Our Agents
        </Heading>
        <Body variant='primary'>
          Our licensed agents know your market and care about your goals. Whether you're buying your first home or selling a luxury property, we’re here to guide you every step of the way.
        </Body>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {agents.map((agent, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition text-center">
              <img src={placeholder} alt={agent.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-(--color-text-heading)">{agent.name}</h3>
              <p className="text-sm text-(--color-primary) font-medium mb-2">{agent.title}</p>
              <p className="text-sm text-(--color-text-body)">{agent.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default AgentsSection;
