// src/pages/Contact.jsx
import React from 'react';
import ContactInfoSection from './ContactInfoSection';
import ContactFormSection from './ContactFormSection';
import MapSection from './MapSection';
import Page from '../../container/Page'

const Contact = () => {
  return (
    <Page>
      {/* Contact Info Section */}
      <ContactInfoSection />

      {/* Contact Form Section */}
      <ContactFormSection />

      {/* Map Section */}
      <MapSection />
    </Page>
  );
};

export default Contact;
