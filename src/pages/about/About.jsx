// src/pages/AboutPage.jsx
import React from 'react';
import AboutSection from './AboutSection';
import TeamSection from './TeamSection';
import MissionSection from './MissionSection';
import TimelineSection from './TimelineSection';
import LeadForm from './LeadForm';
import AgentsSection from './AgentsSection';

const About  = () => {
  return (
    <>
      {/* About Section */}
      <AboutSection />

      {/* Team Section */}
      <AgentsSection />

      {/* Mission Section */}
      <MissionSection />

      {/* Timeline Section */}
      <TimelineSection />
      
      {/* Lead Form */}
      <LeadForm />
    </>
  );
};

export default About;
