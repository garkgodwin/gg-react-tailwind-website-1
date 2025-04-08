import React from 'react';

const LeadForm = () => {
  return (
    <section className="bg-teal-600 text-white py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Let’s Connect</h2>
          <p className="text-lg mb-10">
            Whether you’re buying, selling, or just exploring — our team is here to help you make confident moves in real estate.
          </p>
        </div>

        <form className="max-w-2xl mx-auto space-y-6">
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
          <div className="text-center">
            <button
              type="submit"
              className="bg-white text-teal-600 font-semibold px-8 py-3 rounded-full hover:bg-teal-700 hover:text-white transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LeadForm;
