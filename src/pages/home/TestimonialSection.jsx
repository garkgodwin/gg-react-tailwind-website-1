import React from 'react';

const TestimonialSection = () => {
  return (
    <section className="bg-teal-500 text-white py-24">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">What Our Clients Say</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-stretch max-w-4xl mx-auto">
          {/* Testimonial 1 */}
          <div className="bg-white text-gray-800 p-6 rounded-2xl shadow-lg flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center mb-4 text-teal-600 text-xl font-bold">
              A
            </div>
            <p className="italic text-center mb-4">
              “Gark Edge helped us find the perfect home in less than a month. The experience was stress-free and enjoyable.”
            </p>
            <h4 className="font-semibold text-lg">Alex Martinez</h4>
            <p className="text-sm text-gray-500">Home Buyer, Austin TX</p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white text-gray-800 p-6 rounded-2xl shadow-lg flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center mb-4 text-teal-600 text-xl font-bold">
              S
            </div>
            <p className="italic text-center mb-4">
              “As a seller, I couldn’t be happier. My home was listed and sold above asking in just 10 days!”
            </p>
            <h4 className="font-semibold text-lg">Samantha Lee</h4>
            <p className="text-sm text-gray-500">Home Seller, Denver CO</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
