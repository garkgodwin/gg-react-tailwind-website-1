import React, { useState } from 'react';
import placeholder from "../../assets/sample_listing.png";
import { listings as initialListings } from '../../data';
import { NavLink } from 'react-router';
import Section from './../../container/Section';
import Heading from './../../components/Heading'
import Page from '../../container/Page'

const Listings = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [bathrooms, setBathrooms] = useState('');

  const filteredListings = initialListings.filter((listing) => {
    const matchesSearch =
      listing.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      listing.location.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesBedrooms = bedrooms ? listing.bedrooms >= parseInt(bedrooms) : true;
    const matchesBathrooms = bathrooms ? listing.bathrooms >= parseInt(bathrooms) : true;

    return matchesSearch && matchesBedrooms && matchesBathrooms;
  });

  return (
    <Page>

<Section>
      <div className="max-w-screen-xl mx-auto">
        <Heading>
          Available Properties
        </Heading>

        {/* Filters */}
        <div className="mb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="Search by title or location"
            className="w-full border border-gray-300 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="w-full border border-gray-300 rounded-xl px-4 py-2 text-sm text-gray-700"
            value={bedrooms}
            onChange={(e) => setBedrooms(e.target.value)}
          >
            <option value="">All Bedrooms</option>
            <option value="1">1+ Bedrooms</option>
            <option value="2">2+ Bedrooms</option>
            <option value="3">3+ Bedrooms</option>
            <option value="4">4+ Bedrooms</option>
          </select>
          <select
            className="w-full border border-gray-300 rounded-xl px-4 py-2 text-sm text-gray-700"
            value={bathrooms}
            onChange={(e) => setBathrooms(e.target.value)}
          >
            <option value="">All Bathrooms</option>
            <option value="1">1+ Bathrooms</option>
            <option value="2">2+ Bathrooms</option>
            <option value="3">3+ Bathrooms</option>
            <option value="4">4+ Bathrooms</option>
          </select>
          <button
            className="w-full bg-gray-100 text-gray-700 text-sm rounded-xl px-4 py-2 hover:bg-gray-200 transition"
            onClick={() => {
              setSearchTerm('');
              setBedrooms('');
              setBathrooms('');
            }}
          >
            Clear Filters
          </button>
        </div>

        {/* Listings */}
        {filteredListings.length === 0 ? (
          <p className="text-center text-gray-500">No properties found.</p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredListings.map((listing) => (
              <div
                key={listing.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
              >
                <img
                  src={listing.imageUrl}
                  alt={listing.title || "Property listing"}
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    e.currentTarget.src = placeholder;
                  }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">
                    {listing.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-1">{listing.location}</p>
                  <p className="text-gray-600 text-sm mb-1">
                    {listing.bedrooms} beds • {listing.bathrooms} baths • {listing.sqft.toLocaleString()} sqft
                  </p>
                  <p className="text-gray-500 text-sm mb-1">
                    {listing.propertyType} &bull; Built in {listing.yearBuilt}
                  </p>
                  <p className="text-teal-600 text-lg font-bold mb-4">{listing.price}</p>

                  <NavLink to={`/listings/${listing.id}`} className="block">
                    <div className="w-full bg-teal-600 text-white py-2 rounded-full text-center hover:bg-teal-700 transition">
                      View Details
                    </div>
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Section>
    </Page>
  );
};

export default Listings;
