// src/pages/AboutPage.jsx
import React from 'react';
import AboutSection from './AboutSection';
import MissionSection from './MissionSection';
import TimelineSection from './TimelineSection';
import LeadForm from './LeadForm';
import AgentsSection from './AgentsSection';
import Page from '../../container/Page'


const About  = () => {
  return (
    <Page>
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
    </Page>
  );
};

export default About;
