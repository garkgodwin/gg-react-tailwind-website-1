// src/sections/TeamSection.jsx
import React from 'react';
import placeholder from '../../assets/placeholder.png'
const TeamSection = () => {
  return (
    <section className="bg-gray-100 py-24">
  <div className="container mx-auto px-6 text-center">
    <h2 className="text-4xl font-bold mb-12">Meet Our Team</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {[
        { name: 'John Doe', title: 'CEO & Founder' },
        { name: 'Jane Smith', title: 'Chief Operating Officer' },
        { name: 'Sarah Lee', title: 'Marketing Director' },
      ].map((member, idx) => (
        <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
          <img src="/assets/placeholder.png" alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
          <p className="text-sm text-gray-500">{member.title}</p>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default TeamSection;
