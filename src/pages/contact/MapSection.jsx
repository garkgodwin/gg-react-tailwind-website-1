// src/sections/MapSection.jsx
import React from 'react';

const MapSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold mb-8">Find Us</h2>
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
    </section>
  );
};

export default MapSection;
