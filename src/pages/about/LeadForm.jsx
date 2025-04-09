import React from 'react';
import Button from '../../components/Button';
import Section from '../../container/Section';

const LeadForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit actioned")
  }
  return (
    <Section variant="tertiary">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-lg mb-10">
            Whether you're buying, selling, or just exploring — our team is here to help you make confident moves in real estate.
          </p>
        </div>

        <form className="max-w-2xl mx-auto space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 rounded-xl bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-xl bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>
          <textarea
            placeholder="How can we help you?"
            className="w-full px-4 py-3 rounded-xl bg-white text-gray-800 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-white"
          ></textarea>
          <div className="flex justify-center text-center">
            <Button variant='secondary' type="submit">
              Send Message 
            </Button>
          </div>
        </form>
      </div>
    </Section>
  );
};

export default LeadForm;
