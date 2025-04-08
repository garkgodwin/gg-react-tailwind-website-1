// src/pages/Contact.jsx
import React from 'react';
import ContactInfoSection from './ContactInfoSection';
import ContactFormSection from './ContactFormSection';
import MapSection from './MapSection';

const Contact = () => {
  return (
    <div>
      {/* Contact Info Section */}
      <ContactInfoSection />

      {/* Contact Form Section */}
      <ContactFormSection />

      {/* Map Section */}
      <MapSection />
    </div>
  );
};

export default Contact;
