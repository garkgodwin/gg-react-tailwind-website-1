import React, { useState } from 'react';
import Section from '../../container/Section'
import Heading from './../../components/Heading';
import Button from './../../components/Button';

const ContactFormSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <Section variant="secondary">
      <div className="max-w-screen-md mx-auto px-6">
        <Heading>Get In Touch</Heading>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              aria-label="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 bg-white"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              aria-label="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 bg-white"
              required
            />
          </div>
          <textarea
            name="message"
            placeholder="Your Message"
            aria-label="Your Message"
            value={formData.message}
            onChange={handleInputChange}
            rows={5}
            className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 bg-white"
            required
          />
          <div className="flex justify-end">
            <Button type="submit">
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </Section>
  );
};

export default ContactFormSection;
