import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react'; // optional icon package

const ContactInfoSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-screen-md mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
        <p className="text-lg text-gray-600 mb-8">
          Reach out to us — we’d love to hear from you.
        </p>
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
    </section>
  );
};

export default ContactInfoSection;
