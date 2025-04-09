import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react'; // optional icon package
import Section from './../../container/Section';
import Heading from './../../components/Heading';
import Body from './../../components/Body';

const ContactInfoSection = () => {
  return (
    <Section>
      <div className="max-w-screen-md mx-auto px-6 text-center">
        <Heading>Contact Information</Heading>
        <Body>
          Reach out to us — we'd love to hear from you.
        </Body>
        <div className="space-y-4 text-gray-700 text-sm">
          <div className="flex items-center justify-center gap-2">
            <Phone className="w-4 h-4 text-teal-600" />
            <span>+123 456 7890</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Mail className="w-4 h-4 text-teal-600" />
            <span>contact@company.com</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <MapPin className="w-4 h-4 text-teal-600" />
            <span>123 Business St, City, Country</span>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ContactInfoSection;
