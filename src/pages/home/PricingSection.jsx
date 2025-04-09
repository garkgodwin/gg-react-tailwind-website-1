import React from 'react';
import Section from '../../container/Section';
import Heading from './../../components/Heading';
import Button from './../../components/Button';

const PricingSection = () => {
  const handlePackage1 = () => {}
  const handlePackage2 = () => {}
  const handlePackage3 = () => {}
  return (
    <Section variant='secondary'>
      <div className="container mx-auto px-6 text-center">
        <Heading>
          Flexible Service Packages
        </Heading>

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
            <div className='flex justify-center'>
              <Button type="button" handleClick={handlePackage1}>
                Get Started
              </Button>
            </div>
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
            <div className='flex justify-center'>
              <Button type="button" handleClick={handlePackage2}>
                List Your Home
              </Button>
            </div>
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
            <div className='flex justify-center'>
              <Button type="button" handleClick={handlePackage3}>
                Request Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default PricingSection;
