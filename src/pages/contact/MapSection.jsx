// src/sections/MapSection.jsx
import React from 'react';
import Section from './../../container/Section';
import Heading from './../../components/Heading'

const MapSection = () => {
  return (
    <Section>
      <div className="container mx-auto px-6 text-center">
        <Heading>Find Us</Heading>
        {/* Embed Google Map */}
        <div className="h-72">
          <iframe
            width="100%"
            height="100%"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.028255111734!2d144.9537350153195!3d-37.81720997975121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d489351b0f1%3A0x5045675218ce6e0!2sMelbourne%2C%20Victoria!5e0!3m2!1sen!2sau!4v1630228253903!5m2!1sen!2sau"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </div>
    </Section>
  );
};

export default MapSection;
