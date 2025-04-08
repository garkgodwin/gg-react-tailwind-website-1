import React from 'react';

const PricingSection = () => {
  return (
    <section className="bg-gray-100 py-24">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-16">
          Flexible Service Packages
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {/* Package 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold mb-2 text-gray-900">
              Essential Buyer Package
            </h3>
            <p className="text-teal-600 text-3xl font-bold mb-4">Free</p>
            <p className="text-gray-600 mb-6">
              Perfect for buyers just starting their home search.
            </p>
            <button className="bg-teal-600 text-white px-6 py-3 rounded-full hover:bg-teal-700 transition">
              Get Started
            </button>
          </div>

          {/* Package 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold mb-2 text-gray-900">
              Premium Seller Plan
            </h3>
            <p className="text-teal-600 text-3xl font-bold mb-4">$499</p>
            <p className="text-gray-600 mb-6">
              Includes pro photography, staging advice & optimized listing.
            </p>
            <button className="bg-teal-600 text-white px-6 py-3 rounded-full hover:bg-teal-700 transition">
              List Your Home
            </button>
          </div>

          {/* Package 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold mb-2 text-gray-900">
              Full-Service Concierge
            </h3>
            <p className="text-teal-600 text-3xl font-bold mb-4">Custom Quote</p>
            <p className="text-gray-600 mb-6">
              Complete end-to-end service for serious buyers and sellers.
            </p>
            <button className="bg-teal-600 text-white px-6 py-3 rounded-full hover:bg-teal-700 transition">
              Request Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
